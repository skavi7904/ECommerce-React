import React, {
	useState,
	useEffect,
} from "react";
import "./Shop.css"
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "../components/RatingStars";
import ShoppingCart from "../components/ShoppingCart";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const products = [
	{
        id:1,
        name:"Whirlpool 7.5 kg 5 Star Fully Automatic Top Load Washing Machine (Whitemagic Elite, 31370, Lint Filter, Grey)",
		rating: 4.3,
        price:17320,
        image:require("../images/product/pro1.png")
    },
    {
        id:2,
        name:"Godrej Qube 30 Litres Frost Free Single Door Refrigerator with Solid State Electronic Cooling (TEC QUBE 30L HS Q103, Black)",
        rating:4.0,
		price:7490,
        image:require("../images/product/pro2.png"),
    },
    {
        id:3,
        name:"Asus Vivobook Ryzen 5 (16 inches, 16GB, 512GB, Windows 11, MS Office 2021, 2K Display, AMD Radeon Graphics, Quiet Blue, M1603QA-MB511WS)",
        rating:4.9,
		price:52990,
        image:require("../images/product/pro3.png")
	},
    {
        id:4,
        name:"SAMSUNG Galaxy Tab S6 Lite Wi-Fi Android Tablet (10.4 Inch, 4GB RAM, 64GB ROM, Oxford Grey)",
        rating:4.7,
		price:28999,
        image:require("../images/product/pro4.png")
    },
    {
        id:5,
        name:"Mi 5A 100 cm (40 inch) Full HD LED Smart Android TV with Google Assistance (2022 model)",
        rating:4.5,
		price:21990,
        image:require("../images/product/pro5.png")
    },
    {
        id:6,
        name:"OnePlus 11 5G (16GB RAM, 256GB, Marble Odyssey)",
        rating:4.6,
		price:64999,
        image:require("../images/product/pro6.png")
    },
    {
        id:7,
        name:"boAt Nirvanaa 751 ANC Bluetooth Headphone with Mic (Google Assistant Enabled, Over Ear, Gunmetal Grey)",
        rating:4.0,
		price:3599,
        image:require("../images/product/pro7.png")
    },
    {
        id:8,
        name:"Fire-Boltt Quantum Smartwatch with Bluetooth Calling (32.5mm HD Display, IP67 Water Resistant, Sapphire Gold Strap)",
        rating:3.8,
		price:3999,
        image:require("../images/product/pro8.png")
    },
    {
        id:9,
        name:"Croma 1400W Bluetooth Party Speaker (Dynamic Bass Boost with Recording Function, Black)",
        rating:3.8,
		price:15490,
        image:require("../images/product/pro9.png")
    },
    {
        id:10,
        name:"Sandisk Cruzer Blade 32GB USB 2.0 Flash Drive (SDCZ50-032G-B35 | Red/Black)",
        rating:4.1,
		price:299,
        image:require("../images/product/pro10.png")
    },
    {
        id:11,
        name:"Noise ColorFit Brio Smartwatch with Activity Tracker (38.6mm LCD Display, IP68 Waterproof, Jet Black Strap)",
        rating:4.7,
		price:1799,
        image:require("../images/product/pro11.png")
    },
    {
        id:12,
        name:"Whirlpool Protton 240 Litres Frost Free Triple Door Refrigerator with 6th Sense ActiveFresh Technology (20807, Alpha Steel)",
        rating:4.6,
		price:26990,
        image:require("../images/product/pro12.png")
    },
    {
        id:13,
        name:"Lenovo Tab K10 Wi-Fi Android Tablet (10.3 Inch, 4GB RAM, 64GB ROM, Abyss Blue)",
        rating:4.8,
		price:16499,
        image:require("../images/product/pro13.png")
    },
    {
        id:14,
        name:"Croma 4 in 1 Convertible 1 Ton 3 Star Inverter Split AC with Dust Filter (2023 Model, Copper Condenser, CRLA012IND283251)",
        rating:4.8,
		price:27990,
        image:require("../images/product/pro14.png")
    },
    {
        id:15,
        name:"Apple iPhone 12 Mini (64GB, White)",
        rating:4.5,
		price:53990,
        image:require("../images/product/pro15.png")
    },
    {
        id:16,
        name:"Bosch 8 kg 5 Star Inverter Fully Automatic Front Load Washing Machine (Series 6, WAJ2846WIN, EcoSilence Drive, White)",
        rating:4.1,
		price:39320,
        image:require("../images/product/pro16.png")
    },

];

function Shop() {
	const [cartsVisibilty, setCartVisible] = useState(false);
	const [productsInCart, setProducts] = useState( JSON.parse( localStorage.getItem( "shopping-cart" ) ) || [] );
	useEffect(() => {
		localStorage.setItem( "shopping-cart", JSON.stringify(productsInCart));
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product, count: 1,
		};
		setProducts([ ...productsInCart, newProduct,]);
	};
	const onQuantityChange = ( productId, count ) => {
		setProducts((oldState) => {
			const productsIndex = oldState.findIndex((item) => item.id === productId);
			if (productsIndex !== -1) {
				oldState[productsIndex].count = count;
			}
			return [...oldState];
		});
	};
	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex = oldState.findIndex((item) => item.id === product.id);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};
	return (
		<div className="App">
			<ShoppingCart visibilty={cartsVisibilty} products={productsInCart} onClose={() => setCartVisible(false)}
				onQuantityChange={ onQuantityChange}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
			<img src="assests/img/logo.png" className="logo"/>
            <div>
                <ul id="navbar">
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/shop" className="active">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/account">Account</Link></li>
				</ul>
			</div>
			<button className="btn shopping-cart-btn" onClick={() => setCartVisible(true)}>
					<GiShoppingBag size={24} />
					{productsInCart.length > 0 && (
						<span className="product-count">{productsInCart.length}</span>
					)}
			</button>
			</div>
			<main>
				<section className="shop-banner">
					<h2 className="banner-head">#stayhome</h2>
					<p>Save more with coupons & up to 70% off</p>
				</section>
				<h2 className="name">Products</h2>
				<div className="products">
					{products.map((product) => (
						<div className="product" key={product.id}>
							<img className="product-image" src={product.image} alt={ product.image}/>
							<h4 className="product-name">{product.name}</h4>
							<RatingStars rating={
								product.rating }/>
							<p>{
								product.description
							}
							</p>
							<span className="product-price"> ₹ {product.price}</span>
							<div className="buttons">
								<button className="btn" onClick={() => addProductToCart(product)}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
		<section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="Your email address"/>
            <a href="signup.html"><button class="normal">Sign Up</button></a>
        </div>
    </section>
			</main>
			<Footer/>
		</div>
	);
}

export default Shop;