import React from 'react'
import './About.css'

export class About extends React.PureComponent{
    render() {
        return (
            <div style={{width: '100%', backgroundColor: 'orange'}}>
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="5000">
                            <img src={require("../../content/images/image1.png")} class="d-block w-100" alt="1"/>
                            <div class="carousel-caption d-none d-md-block" style={{backgroundColor: '#00000065' }}>
                                <h3>КАЧЕСТВО ПРОВЕРЕННОЕ ПРАКТИКОЙ</h3>
                            </div>
                        </div>
                        <div class="carousel-item" data-interval="5000">
                            <img src={require("../../content/images/image2.png")} class="d-block w-100" alt="2"/>
                            <div class="carousel-caption d-none d-md-block" style={{backgroundColor: '#00000065' }}>
                                <h3>КАЧЕСТВО ПРОВЕРЕННОЕ ПРАКТИКОЙ</h3>
                            </div>
                        </div>
                        <div class="carousel-item"  data-interval="5000">
                            <img src={require("../../content/images/image3.png")} class="d-block w-100" alt="3"/>
                            <div class="carousel-caption d-none d-md-block" style={{backgroundColor: '#00000065' }}>
                                <h3>КАЧЕСТВО ПРОВЕРЕННОЕ ПРАКТИКОЙ</h3>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}