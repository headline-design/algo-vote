import "./styles.css";

import Pipeline from "@pipeline-ui-2/pipeline";

document.getElementById("vote-root").innerHTML = `
<h1>Algoo Voot</h1>
<select id="selectWallet">
  <option selected value="myAlgoWallet">MyAlgo</option>
  <option value="AlgoSigner">AlgoSigner</option>
  <option value="WalletConnect">WalletConnect</option>
</select>
<button id="connect">Connect</button>
<p id="address"></p>
<input id="appId" placeholder="App index" type="number"></input>
<button id="optin">Opt In</button>
<select id="selectCandidates">
  <option id="candidatea" value="candidatea">A</option>
  <option id="candidateb" value="candidateb">B</option>
</select>
<input placeholder="asset id" type="number" id="asset"></input>
<button id="asaOpt">Opt in to ASA</button>
<button id="vote">Vote</button>
<button id="check">Check</button>`

const wallet = Pipeline.init()

document.getElementById("selectWallet").onchange = function () {
  Pipeline.pipeConnector = document.getElementById("selectWallet").value
}

document.getElementById("connect").onclick = function () {
  Pipeline.connect(wallet).then(data => alert("Connected address: " + data))
}

document.getElementById("optin").onclick = function () {
  let appId = document.getElementById("appId").value || 123456
  Pipeline.optIn(appId, ["register"]).then(data => alert("Transaction status: " + data))
}

document.getElementById("vote").onclick = function () {
  let appId = document.getElementById("appId").value
  Pipeline.getAppCreator(appId).then(
    data => {
      let appArgs = ["vote", document.getElementById("selectCandidates").value]
      let assetIndex = document.getElementById("asset").value
      Pipeline.appCallWithTxn(appId, appArgs, data, 1, "vote", assetIndex).then(data => alert("Transaction status: " + data))
    })
}

document.getElementById("check").onclick = checkVote

document.getElementById("asaOpt").onclick = function () {
  let index = document.getElementById("asset").value
  Pipeline.send(Pipeline.address, 0, "", undefined, undefined, index)
}

function checkVote() {
  let index = document.getElementById("appId").value
  Pipeline.readGlobalState(index).then(
    data => {
      let btally = 0
      let atally = 0
      for (let i = 0; i < data.length; i++) {
        let thisKey = window.atob(data[i].key)
        if (thisKey === "candidateb") {
          btally = data[i].value.uint
        }
        else {
          if (thisKey === "candidatea") {
            atally = data[i].value.uint
          }
        }
      }
      alert("Voting tallies: Option 1: " + atally + ", Option 2: " + btally)
    })
}