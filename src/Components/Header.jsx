import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
function Header() {
    let navigate = useNavigate();
    return (
        <>
        <nav class="navbar navbar">
            <div class="container-fluid">
                <a className="navbar-brand">Fooder.io <i className="fa fa-cutlery" aria-hidden="true"></i></a>
                <form class="d-flex">
                    
                        <Button id="return" onClick={() => navigate(`/`)}>
                        <i class="fa fa-th" aria-hidden="true"></i>
                                </Button>
                </form>
            </div>
        </nav></>
    );
}
export default Header;