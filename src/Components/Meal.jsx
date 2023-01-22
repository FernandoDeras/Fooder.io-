import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
const Meal = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState();
    const [show, setShow] = useState(false);
    const [item, setItem] = useState("");
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setItem(data.meals);
            setShow(true);
        })
    }, [url])

    const searchRecipe = (evt) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
    return (
        <><head>
   <title>Titulo</title>
        </head>
     
        <nav class="navbar navbar">
            <div class="container-fluid">
                <a class="navbar-brand">Fooder.io <i class="fa fa-cutlery" aria-hidden="true"></i></a>
                <form class="d-flex">
                    <Button id="return" onClick={() => navigate(`/contact`)}>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </Button>
                    <div className="searchBox">
                        <input type="search" className="search-bar" onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} />
                    </div>
                </form>
            </div>
        </nav><div className="main">

                <div className="heading">
                    <h1 className="animate__animated animate__flip">Busca tu comida</h1>
                    <h4>¿Qué se te antoja preparar hoy?</h4>
                </div>

                <div className="container">
                    {show ? <MealItem data={item} /> : "No encontrado"}
                </div>
                <div className="indexContainer">
                    <ReacipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>

            </div>
            <Footer></Footer>
        </>


    )
}
export default Meal;