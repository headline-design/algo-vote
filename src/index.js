import "./styles.css";

import Pipeline from "@pipeline-ui-2/pipeline";

document.getElementById("vote-root").innerHTML = `
<div id="votediv" class="algo-vote-widget" align="center">
<h1 id="voteTitle">Algoo Voot</h1>
<select id="selectWallet">
  <option selected value="myAlgoWallet">MyAlgo</option>
  <option value="AlgoSigner">AlgoSigner</option>
  <option value="WalletConnect">WalletConnect</option>
</select>
<button id="connect">Connect</button><br><br>

<label>App</label>
<input disabled id="appId" placeholder="App index" type="number"></input>
<button id="optin">Register</button><br><br>

<label>Voting Token</label>
<input disabled placeholder="asset id" type="number" id="asset"></input>
<button id="asaOpt">Opt in to Token</button><br><br>

<label>Select Option:</label>
<select id="selectCandidates">
  <option id="candidatea" value="candidatea">A</option>
  <option id="candidateb" value="candidateb">B</option>
</select>
<button id="vote">Vote</button>
<button id="check">Check</button>
</div>`

//uncomment to test window.voteConfig
window.voteConfig = {title: "Test Poll", asaIndex: 1234567, appId: 1234567, a: "hello world", b: "goodbye world"}

if (window.voteConfig !== undefined){
  document.getElementById("candidatea").innerText = window.voteConfig.a
  document.getElementById("candidateb").innerText = window.voteConfig.b
  document.getElementById("asset").value = window.voteConfig.asaIndex
  document.getElementById("appId").value = window.voteConfig.appId
  document.getElementById("voteTitle").innerText = window.voteConfig.title
}

const wallet = Pipeline.init()

document.getElementById("selectWallet").onchange = function () {
  Pipeline.pipeConnector = document.getElementById("selectWallet").value
}

document.getElementById("connect").onclick = function () {
  Pipeline.connect(wallet).then(data => alert("Connected address: " + data))
}

document.getElementById("optin").onclick = function () {
  let appId = document.getElementById("appId").value
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
      window.tallies = {a: atally, b: btally}
      //alert("Voting tallies: Option 1: " + atally + ", Option 2: " + btally)
    })
}

setInterval(toggleBorder,100)

var on = false
var colora = "8px solid green"
var colorb = "20px solid red"

function toggleBorder(){
  on = !on
  let color = on?colora:colorb
  document.getElementById("votediv").style.border = color
}