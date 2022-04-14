import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import {FiUsers, FiSettings, FiCalendar} from 'react-icons/fi'

const baseURL = "https://rent-cars-api.herokuapp.com/admin/car";
const DetailComponent = () => {
    const { id } = useParams();
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const getCars = async () => {
            const { data: res } = await axios.get(baseURL+'/'+id);
            setCars(res)
        }
        getCars()
    },[ id ])
    return (
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-8">
                <Card>
                    <p>Tentang Paket</p>
                    <p>Include</p>
                    <Typography color="text.secondary">
                        <ul>
                            <li>
                                <span>
                                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                                </span>
                            </li>
                            <li>
                                <span>
                                    Sudah termasuk bensin selama 12 jam
                                </span>
                            </li>
                            <li>
                                <span>
                                    Sudah termasuk Tiket Wisata
                                </span>
                            </li>
                            <li>
                                <span>
                                    Sudah termasuk pajak
                                </span>
                            </li>
                        </ul>
                    </Typography>
                    

                    <p>Exclude</p>
                    <Typography color="text.secondary">
                        <ul>
                            <li>
                                <span>
                                Tidak termasuk biaya makan sopir Rp 75.000/hari
                                </span>
                            </li>
                            <li>
                                <span>
                                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                </span>
                            </li>
                            <li>
                                <span>
                                Tidak termasuk akomodasi penginapan
                                </span>
                            </li>
                        </ul>
                    </Typography>

                    <p>Refund, Reschedule, Overtime</p>
                    <Typography color="text.secondary">
                        <ul>
                            <li>
                                <span>
                                Tidak termasuk biaya makan sopir Rp 75.000/hari
                                </span>
                            </li>
                            <li>
                                <span>
                                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                </span>
                            </li>
                            <li>
                                <span>
                                Tidak termasuk akomodasi penginapan
                                </span>
                            </li>
                            <li>
                                <span>
                                Tidak termasuk biaya makan sopir Rp 75.000/hari
                                </span>
                            </li>
                            <li>
                                <span>
                                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                </span>
                            </li>
                            <li>
                                <span>
                                Tidak termasuk akomodasi penginapan
                                </span>
                            </li>
                            <li>
                                <span>
                                Tidak termasuk biaya makan sopir Rp 75.000/hari
                                </span>
                            </li>
                            <li>
                                <span>
                                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                                </span>
                            </li>
                            <li>
                                <span>
                                Tidak termasuk akomodasi penginapan
                                </span>
                            </li>
                        </ul>
                    </Typography>
                    
                </Card>
                <CardActions>
                        <Button variant="contained" sx= {{ m: 1, width: '40%' }} color="success">Lanjutkan Pembayaran</Button>
                </CardActions>
            </div>
            <div className="col-lg-4">
                <Card sx={{ maxWidth: 400, margin: 3 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={cars.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                        { cars.name } / { cars.category }
                        </Typography>
                        <Typography gutterBottom>
                            <FiUsers/> 4 Orang
                            <FiSettings/> Manual
                            <FiCalendar/> Tahun 2020
                        </Typography>
                        <Typography gutterBottom variant="h5">
                        Total : { cars.price }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" sx= {{ m: 1, width: '100%' }} color="success">Lanjutkan Pembayaran</Button>
                    </CardActions>
                </Card>
            </div>
            </div>
           
        </div>
    )
}
 
export default DetailComponent