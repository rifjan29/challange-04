import React from 'react';
import Img from '../../assets/img/img_car.jpg';

const Content = () => {
    return (
        <>
            <section className="section-header position-relative">
                <div className="container">
                    <div className="row header-content">
                        <div className="col-lg-7 py-5 align-self-center">
                            <h1 className="pb-2">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil  kualitas <br/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
                            <button type="submit" className="btn btn-success">Mulai Sewa Mobil</button>
                        </div>
                        <div className="col-lg-5 position-absolute bottom-0 end-0 p-0">
                            <img src={Img} className="d-lg-block d-none w-100" alt="agag"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content