import React from 'react';
import {Link} from 'react-router-dom'

const FormPencarian = () => {
    return (
        <div className="container content-search">
            <div className="row">
                <div className="col-lg-9 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="">Tipe Driver</label>
                                <select name="" className='form-control' id="">
                                <option value="">Dengan Sopir</option>
                                <option value="">Tanpa Sopir (Lepas Kunci)</option>
                                </select>
                            </div>
                            <div className="form-group col px-2">
                                <label htmlFor="">Tanggal</label>
                                <input type="date" name="" className='form-control' id="" />
                            </div>
                            <div className="form-group col px-2">
                                <label htmlFor="">Waktu Jemput/Ambil</label>
                                <input type="time" className='form-control' name="" id="" />
                            </div>
                            <div className="form-group col px-2">
                                <label htmlFor="">Tipe Driver</label>
                                <select name="" className='form-control' id="">
                                <option value="">Dengan Sopir</option>
                                <option value="">Tanpa Sopir (Lepas Kunci)</option>
                                </select>
                            </div>
                            <div className='col mt-3'>
                            <Link to={'/cari'}>
                                <button type='submit' className='btn btn-success'>Cari Mobil</button>
                            </Link>

                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default FormPencarian