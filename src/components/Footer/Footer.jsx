import React from 'react';
import FeatherIcon from 'feather-icons-react';

const Footer = () => {
    return (
        <>
            <footer className="footer my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mt-3">
                        <div className="">
                            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p>binarcarrental@gmail.com</p>
                            <p>081-233-334-808</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <span>
                            <strong>Our services</strong>
                        </span>
                        <ul className="mt-2">
                            <li className="mb-2"><a href="#why">Why Us?</a></li>
                            <li className="mb-2"><a href="#testimonial">Testimonial</a></li>
                            <li className="mb-2"><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-3">
                        <span>
                            <strong>Connect with us</strong>
                        </span>
                        <div className="d-flex flex-row bd-highlight mb-3 mt-3">
                            <div className="p-1">
                            
                                <button className="btn btn-primary p-2"> <FeatherIcon icon="facebook" /> </button>
                            </div>
                            <div className="p-1">
                                <button className="btn btn-primary p-2"> <FeatherIcon icon="instagram" /></button>
                            </div>
                            <div className="p-1">
                                <button className="btn btn-primary p-2"><FeatherIcon icon="twitter" /> </button>
                            </div>
                            <div className="p-1">
                                <button className="btn btn-primary p-2"> <FeatherIcon icon="mail" /></button>
                            </div>
                            <div className="p-1">
                                <button className="btn btn-primary p-2"> <FeatherIcon icon="twitch" /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3 footer-copyright">
                        <p>Copyright Binar 2022</p>
                        <img src="assets/img/logo.png" className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            </footer>
        </>
    )
}
export default Footer