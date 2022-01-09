import React, { useState } from 'react'
import Web3 from 'web3';
import Button from '@material-ui/core/Button';

async function connectMeta(accounted, msged) {
    let ethereum = window.ethereum;

    try {
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	accounted(account);
    } catch {
	console.log("connect fail!");
	msged(<><p>Please install MetaMask and reload this page.</p></>);
    }
}

async function payMeta(sender, receiver, strEther, msged) {
    console.log(`payWithMetamask(receiver=${receiver}, sender=${sender}, strEther=${strEther})`)
    try {
	const params = {
	    from: sender,
	    to: receiver,
	    value: strEther,
	    gas: 39000
	};
        await window.ethereum.enable();
        window.web3 = new Web3(window.ethereum);	
	const sendHash = window.web3.eth.sendTransaction(params);
	console.log('txnHash is ' + sendHash);
    } catch(e) {
	console.log("payment fail!");
	console.log(e);
	msged(<p>Can't connect MetaMask. Please check MetaMask.</p>);	
    }

}

const weiValue = Web3.utils.toWei('0.05', 'ether');
export default function PayerEth() {
    const amount = weiValue;
    const receiver = '0xaFBD52FB1C13Ae06e5076a7159f0cE9dA73d6527';
    const [message, setMessage] = useState(<Button type="button" fullWidth variant="contained" color="primary" onClick={() => connectMeta(setAccount, setMessage)} >Connect MetaMask</Button>);
    const [account, setAccount] = useState("");
    if (account === "") {
	return (
	    <>
		{message}
		</>
	)
    } else {
	return (
		<>
		<Button type="button" fullWidth variant="contained" color="primary" onClick={() => payMeta(account, receiver, amount, setMessage)} >Mint your NFT For 0.05 ETH</Button>
		</>
	)

    }
}
