import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand">
            Inter Prom Mash
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "flex-end"}}>
            <ul class="navbar-nav">
                <li className="nav-item">
                    <NavLink 
                        className="nav-link"
                        to="/"
                        exact>
                        О нас
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link"
                        to="/products">
                        Продукция
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link"
                        to="/contacts">
                        Контакты
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link"
                        to="/feedback">
                        Обратная связь
                    </NavLink>
                </li>
            </ul>
            
        </div>
    </nav>
)
