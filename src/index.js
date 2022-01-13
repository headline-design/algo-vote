import "./styles.css";

import Pipeline from "@pipeline-ui-2/pipeline";

var candidate = ""

document.getElementById("vote-root").innerHTML = `<div class="fees">
<button id="wallet-connect" class="btn btn--connect-wallet" data-bs-toggle="modal-1" data-bs-target="#exampleModal" onclick="setOpenOne()" ><span class="fee-count__title">Connect Wallet</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
<path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"/>
</svg></button>
<div id="modal-root-1" style="display:none"><div class="modal-1"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">Algo Wallets</h2><button id="wallet-connect-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button>
</div> <div class="flex">
<button id="WalletConnect" class="btn btn--connect-wallet">WalletConnect</button>

<button id="AlgoSigner" class="btn btn--connect-wallet">AlgoSigner</button>

<button id="myAlgoWallet" class="btn btn--connect-wallet">MyAlgo</button></div>
</div></div><div class="modal-body"></span></div></div></div></div></div>

<br>
<div id="votediv" class="swap-form" align="center">
<h1 id="voteTitle">Algoo Voot</h1>
<br>
<br><br>
<div class="swap-container">
<div class="swap-field">
<label class="swap-field__label label">App</label>
<input class="input input--amount" disabled id="appId" placeholder="App index" type="number"></input>
<div class="swap-field__btns">
<button class="btn btn--change-token" id="optin">Register</button></div>
</div>
<div class="swap-switch"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="2 2 20 20" width="22px" fill="#FFFFFF"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></div>
<div class="swap-field">
<label class="swap-field__label label">Voting Token</label>
<input class="input input--amount" disabled placeholder="asset id" type="number" id="asset"></input>
<div class="swap-field__btns">
<button class="btn btn--change-token" id="asaOpt">Opt-in to Token</button></div></div></div><br><br>
<div class="">
<div class="fees">
<div id="options-div" class="options-div" style="display:block">
<label >Select Option:</label>
<button class="btn btn--generate-link" id="options-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpenTwo()">Voting Options</button></div>
<div id="modal-root-3" class="modal-root-3" style="display:none">
<div class="modal-topbar"><h2 class="modal-title">Vote Options</h2><button id="options-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button>
</div>
<button class="btn btn--generate-link"" id="candidatea">candidatea</button>
<button class="btn btn--generate-link"" id="candidateb">candidateb</button>
</div>
</div></div><button class="btn btn--generate-link"" id="vote" disabled>Vote</button> <br>
<div id="fee-container" class="fees"><button id="fee-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpen()" class="btn btn--connect-wallet" disabled><span class="fee-count__title">Check Vote</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-bar-graph" viewBox="0 0 16 16">
<path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"/>
<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg></button></div>
<div id="modal-root" style="display:none"><div class="modal"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">Fees</h2><button id="check" >Check</button><button id="div-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button></div><div class="modal-body"><div class="swap-field"><label class="swap-field__label label">Your fee</label><input class="input input--amount" placeholder="0.0" value="0.001"><svg class="swap-field__currency-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.82183 16L5.13576 11.9929L7.4497 8L9.74952 3.99295L10.1305 3.35802L10.2998 3.99295L11.0052 6.63139L10.2151 8L7.90119 11.9929L5.60137 16H8.3668L10.6807 11.9929L11.88 9.91887L12.4444 11.9929L13.5167 16H16L14.9276 11.9929L13.8553 8L13.5732 6.97002L15.2945 3.99295H12.783L12.6984 3.69665L11.8236 0.42328L11.7107 0H9.29802L9.24158 0.0846561L6.98409 3.99295L4.67015 8L2.37033 11.9929L0.0563965 16H2.82183Z"></path></svg></div><div class="swap-field"><label class="swap-field__label label">Peer's fee</label><input class="input input--amount" placeholder="0.0" value="0.001"><svg class="swap-field__currency-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.82183 16L5.13576 11.9929L7.4497 8L9.74952 3.99295L10.1305 3.35802L10.2998 3.99295L11.0052 6.63139L10.2151 8L7.90119 11.9929L5.60137 16H8.3668L10.6807 11.9929L11.88 9.91887L12.4444 11.9929L13.5167 16H16L14.9276 11.9929L13.8553 8L13.5732 6.97002L15.2945 3.99295H12.783L12.6984 3.69665L11.8236 0.42328L11.7107 0H9.29802L9.24158 0.0846561L6.98409 3.99295L4.67015 8L2.37033 11.9929L0.0563965 16H2.82183Z"></path></svg></div><div class="fee-count"><span class="fee-count__title">Total Fee<svg viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path d="M9.05 3.60997C8.145 3.60997 7.775 2.96997 8.225 2.18497C8.485 1.72997 8.33 1.14997 7.875 0.889968L7.01 0.394968C6.615 0.159968 6.105 0.299968 5.87 0.694968L5.815 0.789968C5.365 1.57497 4.625 1.57497 4.17 0.789968L4.115 0.694968C3.89 0.299968 3.38 0.159968 2.985 0.394968L2.12 0.889968C1.665 1.14997 1.51 1.73497 1.77 2.18997C2.225 2.96997 1.855 3.60997 0.95 3.60997C0.43 3.60997 0 4.03497 0 4.55997V5.43997C0 5.95997 0.425 6.38997 0.95 6.38997C1.855 6.38997 2.225 7.02997 1.77 7.81497C1.51 8.26997 1.665 8.84997 2.12 9.10997L2.985 9.60497C3.38 9.83997 3.89 9.69997 4.125 9.30497L4.18 9.20997C4.63 8.42497 5.37 8.42497 5.825 9.20997L5.88 9.30497C6.115 9.69997 6.625 9.83997 7.02 9.60497L7.885 9.10997C8.34 8.84997 8.495 8.26497 8.235 7.81497C7.78 7.02997 8.15 6.38997 9.055 6.38997C9.575 6.38997 10.005 5.96497 10.005 5.43997V4.55997C10 4.03997 9.575 3.60997 9.05 3.60997ZM5 6.62497C4.105 6.62497 3.375 5.89497 3.375 4.99997C3.375 4.10497 4.105 3.37497 5 3.37497C5.895 3.37497 6.625 4.10497 6.625 4.99997C6.625 5.89497 5.895 6.62497 5 6.62497Z"></path></svg></span><span class="fee-count__currency">0.002<svg viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path d="M2.59531 12L4.33076 8.99471L6.06621 6L7.79108 2.99471L8.0768 2.51852L8.20378 2.99471L8.73288 4.97355L8.14029 6L6.40484 8.99471L4.67997 12H6.75404L8.48949 8.99471L9.38896 7.43915L9.81225 8.99471L10.6165 12H12.4789L11.6747 8.99471L10.8704 6L10.6588 5.22751L11.9498 2.99471H10.0662L10.0027 2.77249L9.34664 0.31746L9.26198 0H7.45246L7.41013 0.0634921L5.71701 2.99471L3.98156 6L2.25669 8.99471L0.52124 12H2.59531Z"></path></svg></span></div></div></div></div></div>
</div>`

//uncomment to test window.voteConfig
window.voteConfig = {title: "Algo Vote", asaIndex: 1234567, appId: 1234567, a: "candidate 0", b: "goodbye world"}

if (window.voteConfig !== undefined){
  document.getElementById("candidatea").innerText = window.voteConfig.a
  document.getElementById("candidateb").innerText = window.voteConfig.b
  document.getElementById("asset").value = window.voteConfig.asaIndex
  document.getElementById("appId").value = window.voteConfig.appId
  document.getElementById("voteTitle").innerText = window.voteConfig.title
}

const wallet = Pipeline.init()

document.getElementById("WalletConnect").onclick = () => {
  localStorage.clear()

  Pipeline.pipeConnector = "WalletConnect"
  Pipeline.connect(wallet).then(data => alert(data))
}

document.getElementById("AlgoSigner").onclick = () => {

  Pipeline.pipeConnector = "AlgoSigner"
  Pipeline.connect(wallet).then(data => alert(data))
}

document.getElementById("myAlgoWallet").onclick = () => {

  Pipeline.pipeConnector = "myAlgoWallet"
  Pipeline.connect(wallet).then(data => alert(data))
}

document.getElementById("optin").onclick = function () {
  let appId = document.getElementById("appId").value
  Pipeline.optIn(appId, ["register"]).then(data => alert("Transaction status: " + data))
}

document.getElementById("vote").onclick = function () {
  let appId = document.getElementById("appId").value
  Pipeline.getAppCreator(appId).then(
    data => {
      let appArgs = ["vote", candidate]
      let assetIndex = document.getElementById("asset").value
      Pipeline.appCallWithTxn(appId, appArgs, data, 1, "vote", assetIndex).then(data => alert("Transaction status: " + data))
    })
}

document.getElementById("wallet-connect").onclick = setOpenOne;
document.getElementById("options-btn").onclick = setOpenTwo;
document.getElementById("fee-btn").onclick = setOpen;
document.getElementById("div-close").onclick = close;
document.getElementById("options-close").onclick = close;
document.getElementById("wallet-connect-close").onclick = close;
document.getElementById("candidatea").onclick = setA;
document.getElementById("candidateb").onclick = setB;

document.getElementById("check").onclick = checkVote

document.getElementById("asaOpt").onclick = function () {
  let index = document.getElementById("asset").value
  Pipeline.send(Pipeline.address, 0, "", undefined, undefined, index)
}

function setOpen() {
  document.getElementById("modal-root").style.display = "block";
  document.getElementById("modal-root").className = "modal fade show";
}

function setOpenOne() {
  document.getElementById("modal-root-1").style.display = "block";
  document.getElementById("modal-root-1").className = "modal fade show";
}

function setOpenTwo() {
  document.getElementById("modal-root-3").style.display = "block";
  document.getElementById("modal-root-3").className = "modal-root-3 show";
  document.getElementById("options-div").style.display = "none";

}

function close() {
  Object.assign({ isOpen: false });
  document.getElementById("modal-root").style.display = "none";
  document.getElementById("modal-root-1").style.display = "none";
  document.getElementById("modal-root-3").style.display = "none";
  document.getElementById("options-div").style.display = "block";
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

//setInterval(toggleBorder,100)

var on = false
var colora = ""
var colorb = ""

function toggleBorder(){
  on = !on
  let color = on?colora:colorb
  document.getElementById("votediv").style.border = color
}

function setA (){
  candidate = "candidatea"
}

function setB (){
  candidate = "candidatea"
}