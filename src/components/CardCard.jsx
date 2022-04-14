import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import {FiUsers, FiSettings, FiCalendar} from 'react-icons/fi'

const baseURL = "https://rent-cars-api.herokuapp.com/admin/car";
const CardCard = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getCars = async () => {
            const { data: res } = await axios.get(baseURL);
            setCars(res)
        }
        getCars()
    },[])
    const handleGoToDetail = (id) => {
        navigate(`/${id}`)
    };
    return (
        <div className="container-fluid my-5 pt-5">
                {cars.map((car) => {
                    return (
                        <Card sx={{ maxWidth: 350,marginRight:2,padding:1, display: "inline-grid" }}>
                            <CardMedia
                                component="img"
                                alt="cars"
                                height="200"
                                image={car.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {car.name} / {car.category}
                                </Typography>
                                <Typography gutterBottom variant="h5" color="div">
                                    Rp.{car.price} / Hari
                                </Typography>
                                <Typography gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Typography>
                                <Typography gutterBottom>
                                    <FiUsers/>4 Orang
                                </Typography>
                                <Typography gutterBottom>
                                    <FiSettings/>Manual 
                                </Typography>
                                <Typography gutterBottom>
                                    <FiCalendar/>Tahun 2020 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" sx= {{ m: 1, width: '100%' }} color="success" onClick={() => handleGoToDetail(car.id)} >Pilih Mobil </Button>
                            </CardActions>
                        </Card>);
                })}
        </div>
    )
}
export default CardCard;