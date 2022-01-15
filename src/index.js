import "./styles.css";

import Pipeline from "@pipeline-ui-2/pipeline";

import Plotly from 'plotly.js-dist'

var candidate = ""

var showChart = true

//uncomment to test window.voteConfig
window.voteConfig = {title: "Algo Vote", asaIndex: 1234567, appId: 538450585, a: "candidate 0", b: "goodbye world"}

document.getElementById("vote-root").innerHTML = `
<button id="toggle-css">Toggle light mode</button>
<br>
<div id="votediv" class="swap-form" align="center">
<h1 id="voteTitle">Algoo Voot</h1>
<br>
<div class="fees-1"><div class="flex">
<div class="footer__menu"><button id="info" class="footer__item" data-bs-toggle="root-modal-5" data-bs-target="#exampleModal" onclick="setOpenThree()"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 7.99984C15.9999 12.4182 12.4182 15.9999 7.99984 15.9999C3.58151 15.9999 -0.000244141 12.4182 -0.000244141 7.99984C-0.000244141 3.58151 3.58151 -0.000244141 7.99984 -0.000244141C12.4182 -0.000244141 15.9999 3.58151 15.9999 7.99984ZM10.2626 4.12777C10.6803 4.54337 10.9743 5.06685 11.1119 5.63981C11.2977 6.40624 11.1933 7.21434 10.8187 7.90834C10.444 8.60233 9.82578 9.13307 9.08305 9.39825C8.91905 9.45665 8.80305 9.60225 8.80305 9.77585V10.4015C8.80305 10.6141 8.71859 10.8179 8.56826 10.9683C8.41793 11.1186 8.21404 11.2031 8.00144 11.2031C7.78884 11.2031 7.58494 11.1186 7.43461 10.9683C7.28428 10.8179 7.19983 10.6141 7.19983 10.4015V8.79024C7.20256 8.57987 7.28806 8.37905 7.43779 8.23126C7.58749 8.0835 7.78937 8.00065 7.9997 8.00063H7.99424C8.87825 8.00063 9.59665 7.28223 9.59665 6.40062C9.58709 5.98173 9.41391 5.58323 9.1142 5.29043C8.81449 4.99762 8.41205 4.83379 7.99305 4.834C7.57406 4.83421 7.17179 4.99844 6.87237 5.29154C6.57295 5.58464 6.40017 5.98332 6.39102 6.40222C6.38942 6.84302 6.03102 7.20062 5.58941 7.20062C5.39196 7.19941 5.20206 7.12464 5.05679 6.9909C4.91152 6.85717 4.82132 6.67409 4.8038 6.47742L4.7998 6.35982C4.81341 4.35659 6.65662 2.81098 8.74624 3.28618C9.3199 3.42081 9.84487 3.71218 10.2626 4.12777ZM8.79984 12.7999C8.79984 13.2417 8.44167 13.5999 7.99984 13.5999C7.558 13.5999 7.19983 13.2417 7.19983 12.7999C7.19983 12.358 7.558 11.9999 7.99984 11.9999C8.44167 11.9999 8.79984 12.358 8.79984 12.7999Z" fill="white"></path></svg></button><div class=""><div id="modal-root-5" style="display: none;" class="modal fade show"><ul class=""><div class="modal"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">How it works</h2><button id="info-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button></div><div class="modal-body"><p>With SwapLink, 2 peers can swap Algorand assets (Algos, ASAs and NFTs) directly and without slippage.</p><p>SwapLink uses layer 1 atomic swaps - an Algorand capability that allows to swap safely without smart contracts. Both parties can verify both transfers when signing with their wallet.</p><p>The complete swap is encoded in a link - SwapLink doesn't lock tokens or store any data - and submitted directly to the network by the receiving party.</p><p>Note that this means that nothing is executed when the link is generated: The swap, fees deduction, balance and opt-in checks for both parties find place when the receiver submits the transactions.</p></div></div></div></ul></div></div><a href="https://github.com/headline-design/algo-vote" target="_blank" rel="noreferrer" class="footer__item"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00003 0C3.5823 0 0 3.67233 0 8.20251C0 11.8267 2.29225 14.9013 5.47093 15.9859C5.87073 16.0618 6.01754 15.808 6.01754 15.5913C6.01754 15.3957 6.01008 14.7495 6.00669 14.0642C3.78101 14.5603 3.31138 13.0964 3.31138 13.0964C2.94747 12.1483 2.42313 11.8962 2.42313 11.8962C1.69732 11.3871 2.47784 11.3975 2.47784 11.3975C3.2812 11.4554 3.70421 12.2428 3.70421 12.2428C4.41773 13.4968 5.57571 13.1343 6.03223 12.9247C6.104 12.3945 6.31137 12.0327 6.54013 11.8279C4.76325 11.6204 2.89527 10.9171 2.89527 7.77413C2.89527 6.87865 3.20779 6.14688 3.71959 5.57247C3.63651 5.36584 3.3627 4.5316 3.79707 3.40175C3.79707 3.40175 4.46886 3.18129 5.99765 4.24256C6.63575 4.06076 7.32015 3.96967 8.00003 3.96658C8.67991 3.96967 9.36481 4.06076 10.0042 4.24256C11.5311 3.18129 12.202 3.40175 12.202 3.40175C12.6374 4.5316 12.3635 5.36584 12.2804 5.57247C12.7933 6.14688 13.1037 6.87858 13.1037 7.77413C13.1037 10.9245 11.2322 11.6183 9.45084 11.8213C9.73776 12.0759 9.99343 12.5751 9.99343 13.3403C9.99343 14.4378 9.98415 15.3211 9.98415 15.5913C9.98415 15.8096 10.1281 16.0654 10.5337 15.9848C13.7106 14.899 16 11.8254 16 8.20251C16 3.67233 12.4182 0 8.00003 0Z" fill="white"></path></svg></a></div></div><div id="modal-root-4" style="display:none"><div class="modal"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">How it works</h2><button class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button></div><div class="modal-body"><p>With SwapLink, 2 peers can swap Algorand assets (Algos, ASAs and NFTs) directly and without slippage.</p><p>SwapLink uses layer 1 atomic swaps - an Algorand capability that allows to swap safely without smart contracts. Both parties can verify both transfers when signing with their wallet.</p><p>The complete swap is encoded in a link - SwapLink doesn't lock tokens or store any data - and submitted directly to the network by the receiving party.</p><p>Note that this means that nothing is executed when the link is generated: The swap, fees deduction, balance and opt-in checks for both parties find place when the receiver submits the transactions.</p></div></div></div></div><button id="wallet-connect" class="btn btn--connect-wallet" data-bs-toggle="modal-1" data-bs-target="#exampleModal" onclick="setOpenOne()"><span class="fee-count__title">Connect Wallet</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
<path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path>
</svg></button>
<div id="modal-root-1" style="display:none"><div class="modal-1"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">Algo Wallets</h2><button id="wallet-connect-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button>
</div> <div class="flex-column">
<button id="WalletConnect" class="btn btn--connect-wallet">WalletConnect</button>

<button id="AlgoSigner" class="btn btn--connect-wallet">AlgoSigner</button>

<button id="myAlgoWallet" class="btn btn--connect-wallet">MyAlgo</button></div>
</div></div><div class="modal-body"></div></div></div>
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
<button class="btn btn--change-token" id="asaOpt">Opt-in to Token</button></div></div></div>
<div class="">
<div class="fees">
<div id="options-div" class="options-div" style="display:block">
<label class="options-label">Voting Options:</label>
<button class="btn btn--generate-link" id="options-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpenTwo()"><span class="fee-count__title">Review choices</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg></div>
<div id="modal-root-3" class="modal-root-3" style="display:none">
<div class="modal-topbar"><h2 class="modal-title">Vote Options</h2><button id="options-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button>
</div>
<button class="btn btn--generate-link options" id="candidatea">candidatea</button>
<button class="btn btn--generate-link options" id="candidateb">candidateb</button>
</div>
</div></div><button class="btn btn--generate-link"" id="vote" disabled>Vote</button> <br>
<div class="fees"><button id="check" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="btn btn--connect-wallet" disabled><span class="fee-count__title">Check Vote</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-bar-graph" viewBox="0 0 16 16">
<path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"/>
<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg></button></div>
<div id="modal-root" style="display:none"><div class="modal"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">Voting Data</h2><button id="div-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button></div><div class="modal-body">
<div class="swap-field"></div><div class="swap-field"><div class="swap-container"><div class="tallies-field">
<label class="tallies-label" id="textTallies-1"></label><p class="tallies-amount" id="textTallies-2"></p></div><button id="plotly-switch" class="swap-switch"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="18px" viewBox="0 0 20 20" width="18px" fill="#FFFFFF"><rect fill="none" height="20" width="20"/><path d="M11.72,8.28L10,7.5l1.72-0.78L12.5,5l0.78,1.72L15,7.5l-1.72,0.78L12.5,10L11.72,8.28z M3.5,12l0.78-1.72L6,9.5L4.28,8.72 L3.5,7L2.72,8.72L1,9.5l1.72,0.78L3.5,12z M7,8l0.94-2.06L10,5L7.94,4.06L7,2L6.06,4.06L4,5l2.06,0.94L7,8z M17.88,6.5l-5.61,6.31 L9,9.54l-6,6.01l1.06,1.06L9,11.67L12.33,15L19,7.5L17.88,6.5z"/></svg></button><div class="tallies-field"><label class="tallies-label" id="textTallies-3"></label><p class="tallies-amount" id="textTallies-4"></p></div></div><div id="plotly-container" style="display:none"><div id="voteChart"</div></div></span></div></div></div></div></div>
</div>`

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
  document.getElementById("WalletConnect").style.backgroundColor = "#323a58"
  document.getElementById("AlgoSigner").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("myAlgoWallet").style.backgroundColor = "var(--clr-bg)"

  Pipeline.pipeConnector = "WalletConnect"
  Pipeline.connect(wallet).then(data => alert(data))
}

document.getElementById("AlgoSigner").onclick = () => {

  document.getElementById("WalletConnect").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("AlgoSigner").style.backgroundColor = "#323a58"
  document.getElementById("myAlgoWallet").style.backgroundColor = "var(--clr-bg)"
  Pipeline.pipeConnector = "AlgoSigner"
  Pipeline.connect(wallet).then(data => alert(data))
}

document.getElementById("myAlgoWallet").onclick = () => {

  document.getElementById("WalletConnect").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("AlgoSigner").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("myAlgoWallet").style.backgroundColor = "#323a58"

  Pipeline.pipeConnector = "myAlgoWallet"
  Pipeline.connect(wallet).then(data => alert(data))
}

document.getElementById("optin").onclick = function () {
  let appId = document.getElementById("appId").value
  Pipeline.optIn(appId, ["register"]).then(data => alert("Transaction status: " + data))
}

document.getElementById("vote").onclick = function () {
  let appId = document.getElementById("appId").value
 document.getElementById("check").disabled = false
  Pipeline.getAppCreator(appId).then(
    data => {
      let appArgs = ["vote", candidate]
      let assetIndex = document.getElementById("asset").value
      Pipeline.appCallWithTxn(appId, appArgs, data, 1, "vote", assetIndex).then(data => alert("Transaction status: " + data))
    })
}

document.getElementById("toggle-css").onclick = toggleMode;
document.getElementById("wallet-connect").onclick = setOpenOne;
document.getElementById("info").onclick = setOpenThree;
document.getElementById("plotly-switch").onclick = setOpenSix;
document.getElementById("options-btn").onclick = setOpenTwo;
document.getElementById("div-close").onclick = close;
document.getElementById("options-close").onclick = close;
document.getElementById("info-close").onclick = close;
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
  document.getElementById("modal-root").className = "modal-root fade show";
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

function setOpenThree() {
  document.getElementById("modal-root-5").style.display = "block";
  document.getElementById("modal-root-5").className = "modal-root-5 show";

}

function setOpenSix() {
  let shown = showChart ? "block":"none"
  showChart = !showChart
  document.getElementById("plotly-container").style.display = shown;
}

function close() {
  Object.assign({ isOpen: false });
  document.getElementById("modal-root").style.display = "none";
  document.getElementById("modal-root-1").style.display = "none";
  document.getElementById("modal-root-3").style.display = "none";
  document.getElementById("modal-root-5").style.display = "none";
  document.getElementById("options-div").style.display = "block";
  document.getElementById("plotly-container").style.display = "none";
  
}

function toggleMode() {
  var element = document.body;
  element.classList.toggle("light");
}

function checkVote() {
  document.getElementById("check").onclick = setOpen;
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
      chartData[0].values = [atally,btally],
      chartData[0].labels = [window.voteConfig.a,window.voteConfig.b]
      Plotly.redraw('voteChart', chartData, layout);
      document.getElementById("textTallies-1").innerText = window.voteConfig.a + ": "
      document.getElementById("textTallies-2").innerText = atally
      document.getElementById("textTallies-3").innerText = window.voteConfig.b + ": "
      document.getElementById("textTallies-4").innerText = btally
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
  document.getElementById("candidatea").style.backgroundColor = "#323a58"
  document.getElementById("candidateb").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("options-btn").style.backgroundColor = "#262730"
  document.getElementById("vote").disabled = false
}

function setB (){
  candidate = "candidateb"
  document.getElementById("candidateb").style.backgroundColor = "#323a58"
  document.getElementById("candidatea").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("options-btn").style.backgroundColor = "#262730"
  document.getElementById("vote").disabled = false
}

var chartData = [{
  values: [50,50],
  labels: [window.voteConfig.a, window.voteConfig.b],
  type: 'pie',
  marker:{
    colors: ["#4842e9","#7773ef"]
  }
}];

var layout = {

  height: 3,
  width: 300,
  showlegend: false,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  paper_bgcolor: "rgba(0,0,0,0)",


};

Plotly.newPlot('voteChart', chartData, layout);