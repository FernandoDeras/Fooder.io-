import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
var id = "";
const Recipe = () => {
    const [item, setItem] = useState();
    const { recipeId } = useParams();
    if (recipeId !== " ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`).then(res => res.json()).then(data => {
            setItem(data.meals[0]);
        })
    }
    if (item) {
        const strYoutube = item.strYoutube;
        const str = strYoutube.split("=");
        id = str[str.length - 1];
    }


    return (
        <> <Header></Header>
            {

                (!item) ? "" : <div className="content">
                    <div class="contenedor">
                        <img id="foto" src={item.strMealThumb} />
                        <div class="centrado">{item.strMeal}</div>
                        <div class="centrado2">{item.strArea} Food</div>
                        <div class="texto-encima">Category  {item.strCategory}</div>
                    </div>
                    <br /> <br />
                    <div class="row">
                        <div class="col">
                            <div className="NombresIngredientes">
                                <h2 className="strtitle">Ingredients <i class="fa fa-thumb-tack" aria-hidden="true"></i></h2><br />
                            </div>


                            <li className="animate__animated animate__bounceInDown">{item.strIngredient1} {item.strMeasure1}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient2} {item.strMeasure2}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient3} {item.strMeasure3}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient4} {item.strMeasure4}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient5} {item.strMeasure5}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient6} {item.strMeasure6}</li    >
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient7}  {item.strMeasure7}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient8} {item.strMeasure8}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient8} {item.strMeasure8}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient9} {item.strMeasure9}</li>
                            <li className="animate__animated animate__bounceInDown">{item.strIngredient10} {item.strMeasure10}</li>
                            <div className="video">
                                <iframe width="
                        100%" height="420" title="recipeVideo"
                                    src={`https://www.youtube.com/embed/${id}`}>
                                </iframe>
                            </div>
                        </div>
                        <div class="col">
                            <div className="NombresIngredientes">
                                <h2 className="strtitle">Instructions</h2><br />
                            </div>
                            <div className="instructions">

                                <h4>{item.strInstructions}</h4>
                            </div>
                        </div>
                    </div>
                    <br />

                    <Footer></Footer>
                </div>

            }

        </>
    )
}
export default Recipe