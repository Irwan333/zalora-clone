import React from 'react';

function Content(props) {
	return (
		<div className="content">
			<center><h1>New This Week</h1></center>
			<div className="produk">
				<div className="list-produk">
					<img src={require ('../images/deep.jpg')} alt="" height="300" width="322"/>
					<h4>All Under Rp. 188.000</h4>
					<p>Semua produk fashion untuk stylish anda di bawah Rp.188.000</p>
				</div>
				<div className="list-produk">
					<img src={require ('../images/dibawah.jpg')} alt="" height="300" width="322"/>
					<h4>All Under Rp. 249.000</h4>
					<p>emukan pilihan pakaian santai hingga formal disini</p>
				</div>
				<div className="list-produk">
					<img src={require ('../images/brands.jpg')} alt="" height="300" width="322"/>
					<h4>UP TO 70% OFF</h4>
					<p>Style paling populer untuk menemani hari-hari kasual Anda.</p>
				</div>
			</div>
		</div>
	);
}

export default Content;