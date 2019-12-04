import React from 'react';

function Brand(props) {
	return (
		<div className="content" id="brand">
			<center>
				<h1>Feature Brands</h1>
			</center>
			<div className="logo">
				<ul>
					<li><img src={require ('../images/zalora.webp')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/borrowed.webp')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/cottonon.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/mango.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/keds.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/levis.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/puma.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/adidas.png')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/casio.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/river.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/guess.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/nike.jpg')} height="83" width="137" alt=""/></li>
					<li><img src={require ('../images/KANKEN.jpg')} height="83" width="137" alt=""/></li>
				</ul>
			</div>
		</div>
	);
}

export default Brand;