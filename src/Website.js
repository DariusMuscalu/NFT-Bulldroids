import PayerEth from './PayerEth';
import Gif from  './Gif.gif';
import Ethereum from './ethereum.png';

const Webcontent = () => {
		return (
			<div> 
			<main>
				<div class="content-wrapper">
					<div class="text-content">
						<h1>PRESALE IS LIVE</h1>
						<h2 id="mint-nft">Mint your NFT now</h2>
						<p>20 max per wallet</p>
						<p id="show-price"><img src={Ethereum} alt="eth icon"/> <span id="ether-value"> 0.05</span> ETH</p>
						<div class="select-quantity">
							<button id="minus" class="quantity-btn">-</button>
							<button id="quantity" class="quantity-btn">1</button>
							<button id="plus" class="quantity-btn">+</button>
						</div>
						<p id="minted-goal"><span id="minted-number">1500</span> / 2000 Minted</p>
						<PayerEth/>
					</div>
					<div class="image-slider">
						<img src={Gif} alt="slider gif" width="500px" height="500px"/>
					</div>
				</div>
			</main>
		</div>
		)
}

export const Website = () => {
	return (
		<Webcontent/>
	)
}



