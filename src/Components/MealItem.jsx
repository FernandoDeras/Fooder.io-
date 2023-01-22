import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import 'animate.css';
const MealItem = ({ data }) => {
    console.log(data);
    let navigate = useNavigate();
    return (
        <>
            {
                (!data) ? "No encontrado, danos tus sugerencias para añadir "  : data.map(item => {
                    return (
                        <>
                            < Card className="animate__animated animate__jackInTheBox card" key={item.idMeal} >
                                <img src={item.strMealThumb} alt="" />
                                <h3>{item.strMeal} </h3>
                                <Button className="button" onClick={() => navigate(`/${item.idMeal}`)}>
                                 Ver Receta
                                </Button>
                                
                            </Card>


                        </>
                    )
                })
            }

        </>
    )
}
export default MealItem;