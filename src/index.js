import "./styles.css";

import Pipeline from "@pipeline-ui-2/pipeline";

import Plotly from 'plotly.js-dist'

var candidate = ""

var showChart = true

//uncomment to test window.voteConfig
window.voteConfig = {title: "Got Snacks?", asaIndex: 547989587, appId: 547990100, a: "want snacks", b: "Do not want snacks"}

document.getElementById("vote-root").innerHTML = `
<br>
<div id="votediv" class="swap-form" align="center"><div class="flexible-h1"><h1 class="bolierplate-h1">ALGO</h1><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Capa_1" width="70" height="70" viewBox="0 0 510 510"><linearGradient id="lg1"><stop offset="0" stop-color="rgb(124 124 238)"></stop><stop offset="1" stop-color="rgb(210 210 249)"></stop></linearGradient><linearGradient id="SVGID_1_" x1="126.402" x2="395.506" y1="126.402" y2="395.506" gradientUnits="userSpaceOnUse" xlink:href="#lg1"></linearGradient><linearGradient id="SVGID_2_" x1="430.795" x2="65.132" y1="430.795" y2="65.132" gradientUnits="userSpaceOnUse" xlink:href="#lg1"></linearGradient><linearGradient id="lg2"><stop offset="0" stop-color="#4c8df1" stop-opacity="0"></stop><stop offset="0.563" stop-color="#466cc8" stop-opacity="0.563"></stop><stop offset="1" stop-color="#4256ac"></stop></linearGradient><linearGradient id="SVGID_3_" x1="277.483" x2="101.109" y1="331.872" y2="244.184" gradientUnits="userSpaceOnUse" xlink:href="#lg2"></linearGradient><linearGradient id="SVGID_4_" x1="418.698" x2="277.698" y1="400.245" y2="332.245" gradientUnits="userSpaceOnUse" xlink:href="#lg2"></linearGradient><linearGradient id="lg3"><stop offset="0" stop-color="#e3e5e4"></stop><stop offset="1" stop-color="#cbd0e4"></stop></linearGradient><linearGradient id="SVGID_5_" x1="250.536" x2="327.067" y1="408.464" y2="484.995" gradientUnits="userSpaceOnUse" xlink:href="#lg3"></linearGradient><linearGradient id="SVGID_6_" x1="292.254" x2="241.588" y1="436.058" y2="321.392" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cbd0e4" stop-opacity="0"></stop><stop offset="1" stop-color="#6a7d83"></stop></linearGradient><linearGradient id="SVGID_7_" x1="207.983" x2="375.569" y1="208.017" y2="375.603" gradientUnits="userSpaceOnUse" xlink:href="#lg3"></linearGradient><linearGradient id="SVGID_8_" x1="326.249" x2="136.247" y1="297.751" y2="107.748" gradientUnits="userSpaceOnUse" xlink:href="#lg3"></linearGradient><path fill="url(#SVGID_1_)" d="M445.539 255c0-7.504-.439-14.904-1.286-22.18-1.09-9.356 2.617-18.633 9.698-24.845l29.15-25.574c9.894-8.68 12.117-23.215 5.271-34.456L457.195 96.76c-6.846-11.241-20.782-15.934-33.033-11.125l-36.338 14.262c-8.795 3.452-18.68 2.243-26.515-3.036a190.21 190.21 0 00-26.614-14.976c-8.558-3.947-14.703-11.754-16.326-21.037l-6.717-38.422C309.385 9.46 298.128 0 284.966 0h-59.932c-13.162 0-24.419 9.46-26.685 22.425l-6.717 38.422c-1.623 9.283-7.768 17.091-16.326 21.037a190.21 190.21 0 00-26.614 14.976c-7.836 5.278-17.721 6.487-26.515 3.036L85.838 85.634c-12.252-4.808-26.187-.115-33.033 11.125l-31.176 51.185c-6.846 11.241-4.623 25.776 5.271 34.456l29.15 25.574c7.081 6.212 10.788 15.489 9.698 24.845a191.76 191.76 0 000 44.36c1.09 9.356-2.617 18.633-9.698 24.845L26.9 327.598c-9.894 8.68-12.117 23.215-5.271 34.456l31.176 51.185c6.846 11.241 20.782 15.934 33.033 11.125l36.338-14.262c8.795-3.452 18.68-2.242 26.515 3.036a190.21 190.21 0 0026.614 14.976c8.558 3.947 14.703 11.754 16.326 21.037l6.717 38.422C200.615 500.54 211.872 506 225.034 506h59.932c13.162 0 24.419-5.46 26.685-18.425l6.717-38.422c1.623-9.283 7.768-17.091 16.326-21.037a190.21 190.21 0 0026.614-14.976c7.836-5.278 17.721-6.487 26.515-3.036l36.338 14.262c12.252 4.809 26.187.115 33.033-11.125l31.176-51.185c6.846-11.241 4.623-25.776-5.271-34.456l-29.15-25.574c-7.081-6.212-10.788-15.489-9.698-24.845A191.11 191.11 0 00445.539 255z"></path><circle cx="255" cy="255" r="155.751" fill="url(#SVGID_2_)"></circle><path fill="url(#SVGID_3_)" d="M284.966 510c13.162 0 24.419-9.46 26.685-22.425l6.717-38.422c1.623-9.283 7.768-17.091 16.326-21.037a190.21 190.21 0 0026.614-14.976c7.836-5.278 17.721-6.487 26.515-3.036l36.338 14.262c12.252 4.809 26.187.115 33.033-11.125l31.176-51.185c6.846-11.241 4.623-25.776-5.271-34.456l-29.15-25.574c-7.081-6.212-10.788-15.489-9.698-24.845.508-4.362.85-8.774 1.058-13.221l-95.998-95.998a129.034 129.034 0 00-19.782-17.453c-5.799-4.143-13.861.054-13.861 7.181v84.713a28.832 28.832 0 01-10.645 22.357c-1.257-1.208-111.767-111.526-112.688-112.64-2.764-3.342-7.893-2.452-11.935.439-32.6 23.323-51.818 59.527-51.741 102.678.066 37.151 13.861 70.537 39.073 93.911l27.6 27.698 1 64.446c0 15.516-.657 31.002 2.015 46.286C200.615 500.54 211.872 510 225.034 510z"></path><path fill="url(#SVGID_4_)" d="M488.37 362.05l-31.17 51.19c-6.85 11.24-20.79 15.93-33.04 11.13l-36.34-14.27c-8.79-3.45-18.68-2.24-26.51 3.04a190.615 190.615 0 01-26.62 14.98c-8.55 3.94-14.7 11.75-16.32 21.03l-6.72 38.43c-2.27 12.96-13.52 19.42-26.68 19.42h-59.94c-6.58 0-12.68-2.36-17.42-6.35-2.42-2.03-4.48-1.48-6.07-4.25 3.99 2.3 8.61 3.6 13.49 3.6h59.94c13.16 0 24.41-9.46 26.68-22.42 1.33-7.64 2.34-15.34 3.01-23.06s1.01-15.48 1.01-23.23v-73.17c40.28-21.65 67.67-64.19 67.67-113.12 0-32.85-12.34-62.82-32.65-85.52 3.01 2.68 5.88 5.51 8.62 8.48l96 96c-.21 4.45-.55 8.86-1.06 13.22-1.09 9.36 2.62 18.63 9.7 24.85l29.15 25.57c9.89 8.68 12.12 23.21 5.27 34.45z"></path><path fill="url(#SVGID_5_)" d="M311.651 487.575a268.77 268.77 0 004.015-46.286V335.333H194.333v105.956a268.77 268.77 0 004.015 46.286C200.615 500.54 211.872 510 225.034 510h59.932c13.162 0 24.419-9.46 26.685-22.425z"></path><path fill="url(#SVGID_6_)" d="M194.333 368.158l117.613 117.613a268.731 268.731 0 003.72-44.482V335.333H194.333z"></path><path fill="url(#SVGID_7_)" d="M383.34 255c0 70.88-57.459 128.339-128.339 128.34S126.786 326.114 126.66 255.234c-.077-43.151 21.141-81.355 53.741-104.678 5.826-4.168 13.928-.028 13.928 7.135v84.71a28.84 28.84 0 0014.418 24.974l31.833 18.38a28.837 28.837 0 0028.839 0l31.833-18.38a28.837 28.837 0 0014.418-24.974v-84.713c0-7.126 8.062-11.323 13.861-7.181 32.58 23.277 53.809 61.408 53.809 104.493z"></path><path fill="url(#SVGID_8_)" d="M160.023 265.81a45.143 45.143 0 0022.571 39.095l49.833 28.773a45.144 45.144 0 0045.146 0l49.833-28.773a45.143 45.143 0 0022.571-39.095V168.7a129.086 129.086 0 00-20.446-18.192c-5.799-4.143-13.861.054-13.861 7.181v84.713a28.84 28.84 0 01-14.418 24.974l-31.833 18.38a28.837 28.837 0 01-28.839 0l-31.833-18.38a28.837 28.837 0 01-14.418-24.974v-84.71c0-7.164-8.102-11.303-13.928-7.135a129.056 129.056 0 00-20.379 18.142v97.111z"></path></svg><h1 class="bolierplate-h1-2">VOTE</h1></div>
<div><h1 id="voteTitle-2"></h1></div>
<br>
<div class="fees-1"><div class="flex">
<div class="footer__menu"><button id="info" class="footer__item" data-bs-toggle="root-modal-5" data-bs-target="#exampleModal" onclick="setOpenThree()"><svg viewBox="0 0 16 16" fill="current-color" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 7.99984C15.9999 12.4182 12.4182 15.9999 7.99984 15.9999C3.58151 15.9999 -0.000244141 12.4182 -0.000244141 7.99984C-0.000244141 3.58151 3.58151 -0.000244141 7.99984 -0.000244141C12.4182 -0.000244141 15.9999 3.58151 15.9999 7.99984ZM10.2626 4.12777C10.6803 4.54337 10.9743 5.06685 11.1119 5.63981C11.2977 6.40624 11.1933 7.21434 10.8187 7.90834C10.444 8.60233 9.82578 9.13307 9.08305 9.39825C8.91905 9.45665 8.80305 9.60225 8.80305 9.77585V10.4015C8.80305 10.6141 8.71859 10.8179 8.56826 10.9683C8.41793 11.1186 8.21404 11.2031 8.00144 11.2031C7.78884 11.2031 7.58494 11.1186 7.43461 10.9683C7.28428 10.8179 7.19983 10.6141 7.19983 10.4015V8.79024C7.20256 8.57987 7.28806 8.37905 7.43779 8.23126C7.58749 8.0835 7.78937 8.00065 7.9997 8.00063H7.99424C8.87825 8.00063 9.59665 7.28223 9.59665 6.40062C9.58709 5.98173 9.41391 5.58323 9.1142 5.29043C8.81449 4.99762 8.41205 4.83379 7.99305 4.834C7.57406 4.83421 7.17179 4.99844 6.87237 5.29154C6.57295 5.58464 6.40017 5.98332 6.39102 6.40222C6.38942 6.84302 6.03102 7.20062 5.58941 7.20062C5.39196 7.19941 5.20206 7.12464 5.05679 6.9909C4.91152 6.85717 4.82132 6.67409 4.8038 6.47742L4.7998 6.35982C4.81341 4.35659 6.65662 2.81098 8.74624 3.28618C9.3199 3.42081 9.84487 3.71218 10.2626 4.12777ZM8.79984 12.7999C8.79984 13.2417 8.44167 13.5999 7.99984 13.5999C7.558 13.5999 7.19983 13.2417 7.19983 12.7999C7.19983 12.358 7.558 11.9999 7.99984 11.9999C8.44167 11.9999 8.79984 12.358 8.79984 12.7999Z" fill="current-color"></path></svg></button><div class=""><div id="modal-root-5" style="display: none;" class="modal fade show"><ul class=""><div class="modal"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">How it works</h2><button id="info-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button></div><div class="modal-body"><p>With AlgoVote, Algorand DAOs can manage governance sessions with a simple, embeddable voting module. DAO managers can customize and deploy their voting smart contracts through the AlgoVote configurator, then DAO members can use their existing DAO tokens to vote when governace periods are open. All voting responses are recorded on-chain, forevor.</p><p>AlgoVote works with both permissioned and permisionless voting. Limit votes to one token per voter, or allow for general voting responses from the entire community.</p><p>AlgoVote was built by HEADLINE INC. This voting Dapp is an extension of the PIPELINE SDK.</p></div></div></div></ul></div></div><button id="toggle-css" target="_blank" rel="noreferrer" class="footer__item"><svg id="sun" style="display:block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg><svg id="moon" style="display:none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg></button></div></div><div id="modal-root-4" style="display:none"><div class="modal"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">How it works</h2><button class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button></div><div class="modal-body"><p>With SwapLink, 2 peers can swap Algorand assets (Algos, ASAs and NFTs) directly and without slippage.</p><p>SwapLink uses layer 1 atomic swaps - an Algorand capability that allows to swap safely without smart contracts. Both parties can verify both transfers when signing with their wallet.</p><p>The complete swap is encoded in a link - SwapLink doesn't lock tokens or store any data - and submitted directly to the network by the receiving party.</p><p>Note that this means that nothing is executed when the link is generated: The swap, fees deduction, balance and opt-in checks for both parties find place when the receiver submits the transactions.</p></div></div></div></div><button id="wallet-connect" class="btn btn--connect-wallet" data-bs-toggle="modal-1" data-bs-target="#exampleModal" onclick="setOpenOne()"><span class="fee-count__title">Connect Wallet</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet" viewBox="0 0 16 16">
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
<div class="swap-switch"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="2 2 20 20" width="22px" fill="current-color"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></div>
<div class="swap-field">
<label class="swap-field__label label">Voting Token</label>
<input class="input input--amount" disabled placeholder="asset id" type="number" id="asset"></input>
<div class="swap-field__btns">
<button class="btn btn--change-token" id="asaOpt">Opt-in to Token</button></div></div></div>
<div class="">
<div class="fees">
<div id="options-div" class="options-div" style="display:block">
<span id="log" class="jsx-4236559370 badge">Voting Options</span>
<button class="btn btn--generate-link" id="options-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpenTwo()"><span class="fee-count__title">Review choices</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg></div>
<div id="modal-root-3" class="modal-root-3" style="display:none">
<div class="modal-topbar"><h2 id="voteTitle" class="modal-title">Vote Options</h2><button id="options-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button>
</div>
<button class="btn btn--generate-link options" id="candidatea">candidatea</button>
<button class="btn btn--generate-link options" id="candidateb">candidateb</button>
</div>
</div></div><button class="btn btn--generate-link"" id="vote" disabled>Vote</button> <br>
<div class="fees"><button id="check" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="btn btn--connect-wallet" disabled><span class="fee-count__title">Check Vote</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="current-color" class="bi bi-file-bar-graph" viewBox="0 0 16 16">
<path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"/>
<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg></button></div>
<div id="modal-root" style="display:none"><div class="modal"><div class="modal-content modal-content-size"><div class="modal-topbar"><h2 class="modal-title">Voting Data</h2><button id="div-close" class="modal-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75732 7.75732L16.2426 16.2426"></path><path d="M7.75739 16.2426L16.2427 7.75732"></path></svg></button></div><div class="modal-body">
<div class="swap-field"></div><div class="swap-field"><div class="swap-container"><div class="tallies-field">
<label class="tallies-label" id="textTallies-1"></label><p class="input input--amount" id="textTallies-2"></p></div><button id="plotly-switch" class="swap-switch"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="18px" viewBox="0 0 20 20" width="18px" fill="current-color"><rect fill="none" height="20" width="20"/><path d="M11.72,8.28L10,7.5l1.72-0.78L12.5,5l0.78,1.72L15,7.5l-1.72,0.78L12.5,10L11.72,8.28z M3.5,12l0.78-1.72L6,9.5L4.28,8.72 L3.5,7L2.72,8.72L1,9.5l1.72,0.78L3.5,12z M7,8l0.94-2.06L10,5L7.94,4.06L7,2L6.06,4.06L4,5l2.06,0.94L7,8z M17.88,6.5l-5.61,6.31 L9,9.54l-6,6.01l1.06,1.06L9,11.67L12.33,15L19,7.5L17.88,6.5z"/></svg></button><div class="tallies-field"><label class="tallies-label" id="textTallies-3"></label><p class="input input--amount" id="textTallies-4"></p></div></div><div id="plotly-container" style="display:none"><div id="voteChart"</div></div></span></div></div></div></div></div>
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
  document.getElementById("WalletConnect").style.backgroundColor = "var(--bg-color-after)"
  document.getElementById("WalletConnect").style.color = "var(--clr-text-5)"
  document.getElementById("myAlgoWallet").style.color = "var(--clr-text-7)"
  document.getElementById("AlgoSigner").style.color = "var(--clr-text-7)"
  document.getElementById("AlgoSigner").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("myAlgoWallet").style.backgroundColor = "var(--clr-bg)"

  Pipeline.pipeConnector = "WalletConnect"
  Pipeline.connect(wallet).then(data => {log(data);close()} )
}

document.getElementById("AlgoSigner").onclick = () => {

  document.getElementById("WalletConnect").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("AlgoSigner").style.backgroundColor = "var(--bg-color-after)"
  document.getElementById("myAlgoWallet").style.color = "var(--clr-text-7)"
  document.getElementById("WalletConnect").style.color = "var(--clr-text-7)"
  document.getElementById("AlgoSigner").style.color = "var(--clr-text-5)"
  document.getElementById("myAlgoWallet").style.backgroundColor = "var(--clr-bg)"
  Pipeline.pipeConnector = "AlgoSigner"
  Pipeline.connect(wallet).then(data => {log(data);close()} )
}

document.getElementById("myAlgoWallet").onclick = () => {

  document.getElementById("WalletConnect").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("AlgoSigner").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("myAlgoWallet").style.backgroundColor = "var(--bg-color-after)"
  document.getElementById("myAlgoWallet").style.color = "var(--clr-text-5)"
  document.getElementById("WalletConnect").style.color = "var(--clr-text-7)"
  document.getElementById("AlgoSigner").style.color = "var(--clr-text-7)"

  Pipeline.pipeConnector = "myAlgoWallet"
  Pipeline.connect(wallet).then(data => {log(data);close()} )
}

document.getElementById("optin").onclick = function () {
  let appId = document.getElementById("appId").value
  Pipeline.optIn(appId, ["register"]).then(data => log("Transaction status: " + data))
}

document.getElementById("vote").onclick = function () {
  let appId = document.getElementById("appId").value
 document.getElementById("check").disabled = false
  Pipeline.getAppCreator(appId).then(
    data => {
      let appArgs = ["vote", candidate]
      let assetIndex = document.getElementById("asset").value
      Pipeline.appCallWithTxn(appId, appArgs, data, 1, "vote", assetIndex).then(data => log("Transaction status: " + data))
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

var dark = true
function toggleMode() {
  dark = !dark
  if (dark) {
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";

  } else {
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
  }
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
      document.getElementById("textTallies-1").innerText = window.voteConfig.a
      document.getElementById("textTallies-2").innerText = atally
      document.getElementById("textTallies-3").innerText = window.voteConfig.b
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
  document.getElementById("candidatea").style.backgroundColor = "var(--bg-color-after)"
  document.getElementById("candidatea").style.color = "var(--clr-text-5)"
  document.getElementById("candidateb").style.color = "var(--clr-text-7)"
  document.getElementById("candidateb").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("options-btn").style.backgroundColor = "var(--clr-text-3)"
  document.getElementById("vote").disabled = false
}

function setB (){
  candidate = "candidateb"
  document.getElementById("candidateb").style.backgroundColor = "var(--bg-color-after)"
  document.getElementById("candidateb").style.color = "var(--clr-text-5)"
  document.getElementById("candidatea").style.backgroundColor = "var(--clr-bg)"
  document.getElementById("candidatea").style.color = "var(--clr-text-7)"
  document.getElementById("options-btn").style.backgroundColor = "var(--clr-text-3)"
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

function log (data){
  document.getElementById("log").innerText = data

}

Plotly.newPlot('voteChart', chartData, layout);