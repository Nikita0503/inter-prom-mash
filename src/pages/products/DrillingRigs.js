import React from 'react'
import './DrillingRigs.css'

function DrillingRigs(){
    return(
        <div>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>НКР100М</h4>
            </div>
            <div className="row ml-0 mr-0">
                <div class="card col-md-6 h-50">
                    <img class="card-img-top pt-2" src={require("../../content/images/products/drilling_rigs/nkr_100_m.png")} alt="nkr_100_m"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Станок буровой НКР100М</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <p class="container text-justify" style={{fontSize: 16, marginTop: 10}}>
                        Станки буровые НКР100М предназначены для бурения в подземных условиях скважин любого направления, глубиной до 50м (80м). 
                        Станки производят бурение в породах средней крепости и крепких с помощью пневмоударника. В породах малой крепости станки могут осуществлять вращательное бурение скважин, 
                        для чего пневмоударник заменяется соответствующей коронкой. Кроме того, станки могут применяться для бурения дегазационных и дренажных скважин, а также других работ.        
                    </p>
                </div>
            </div>
            <div class="border-left border-3 mt-3 mt-sm-3" style={{marginBottom: 15}}>
                <h5 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Технические характеристики</h5>
            </div>
            <table class="table">
                <thead class="thead nkr_100_ma">
                    <tr>
                        <td>Параметры</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Диаметр скважины, мм</td>
                        <td>105</td>
                    </tr>
                    <tr>
                        <td>Глубина бурения, м</td>
                        <td>50-80</td>
                    </tr>
                    <tr>
                        <td>Воздуха</td>
                        <td>0,5</td>
                    </tr>
                    <tr>
                        <td>Воды</td>
                        <td>1 ... 1,2</td>
                    </tr>
                    <tr>
                        <td>Расход воздуха, м3\мин</td>
                        <td>10-17</td>
                    </tr>
                    <tr>
                        <td>Расход воды, л\мин</td>
                        <td>10 … 12</td>
                    </tr>
                    <tr>
                        <td>Усилие подачи, кгс</td>
                        <td>600-1200</td>
                    </tr>
                    <tr>
                        <td>Габаритные размеры выработки, м<br/>- для горизонтального бурения<br/>- для вертикального бурения</td>
                        <td><br/>2,8х1,8<br/>2,8х2,8</td>
                    </tr>
                    <tr>
                        <td>Масса бурового станка (без комплекта штанг), кг</td>
                        <td>690-824, +50</td>
                    </tr>
                    <tr>
                        <td>Масса комплекта поставки, кг</td>
                        <td>1282-1686</td>
                    </tr>
                </tbody>
                </table>

        </div>
    )
}

export default DrillingRigs;