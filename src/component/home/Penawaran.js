import React from 'react';

function Penawaran(props) {
  return (
  	<div id="penawaran" className="content">
		<div className="top">
			<div className="top-left">
				<ul>
					<li>
						<i className="material-icons">loyalty</i>
						PRODUK ORIGINAL & TERJAMIN
					</li>
					<li>
						<i className="material-icons">assignment</i>
						RIBUAN FASHION BRAND
					</li>
					<li>
						<i className="material-icons">autorenew</i>
						GRATIS PENGEMBALIAN
					</li>
					<li>
						<i className="material-icons">help_outline</i>
						PERTANYAAN?
					</li>
				</ul>
			</div>
			<div className="top-right">
				<b>Download & dapatkan DISKON 22% </b>
				<i className="material-icons">phone_iphone</i>
			</div>
		</div>
		<div id="center" className="content">
			<div className="gambar">
				<div className="center-top">
					<div className="leftside">
						<div className="text-tlc">
							<h1>Everything Mush Go!</h1>
							<h1 className="text-banner">UP TO 70% OFF <br/> + EKSTRA 20% OFF</h1>
						</div>
						<div className="btn-left"><i className="material-icons md-48">arrow_left</i> SHOP WANITA</div>
					</div>

					<div className="rightside">
						<div className="text-brc">
							<div className="text">
								<div className="t-text">
									<div className="l-text">
										<h3>Tanpa Min. Pembelian Untuk Pelanggan Baru</h3>
									</div>
									<div className="r-text">
										<h3>Tanpa Min. Pembelian Untuk Pelanggan Baru</h3>
									</div>
								</div>
								<div className="diskon">Kode Voucher: TERBAIK20</div>
								<br/>
								<h3>Syarat dan Ketentuan Berlaku</h3>
							</div>
						</div>
						<div className="btn-right">SHOP PRIA <i className="material-icons md-48">arrow_right</i></div>
					</div>
				</div>

				<div className="center-bottom">
					<ul>
						<li> 
							<i className="material-icons">loyalty</i>
							PRODUK ORIGINAL & TERJAMIN
						</li>
						<li> 
							<i className="material-icons">assignment</i>
							RIBUAN FASHION BRAND
						</li>
						<li> 
							<i className="material-icons">autorenew</i>
							GRATIS PENGEMBALIAN
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	);
}

export default Penawaran;