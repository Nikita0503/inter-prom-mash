import React from 'react'
import './MineElectricLocomotives.css'

function MineElectricLocomotives(){
    return(
        <div>
            <div class="list-group list-group-md-horizontal" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-toggle="list" href="#mine_electric_locomotives_1" role="tab">K-14</a>
                <a class="list-group-item list-group-item-action" data-toggle="list" href="#mine_electric_locomotives_2" role="tab">K-10</a>
            </div>
            <div class="tab-content">
                <div class="tab-pane active" id="mine_electric_locomotives_1" role="tabpanel"><K_14/></div>
                <div class="tab-pane" id="mine_electric_locomotives_2" role="tabpanel"><K_10/></div>
            </div>
        </div>
    )
}

function K_14(){
    return(
        <div>
            <div class="border-left border-3 mt-3" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Электровоз контактный К-14</h4>
            </div>
            <div className="row ml-0 mr-0">
                <div class="card col-md-12">
                    <img class="card-img-top" src={require("../../content/images/products/mine_electric_locomotives/k_14.jpg")} alt="k_14"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Электровоз контактный К-14</p>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Предназначен для транспортирования составов по подземным выработкам шахт и рудников с уклоном до 0,005 и радиусами закругления рельсовых путей не менее 18 м., 
                        в которых действующими правилами безопасности разрешена эксплуатация контактных электровозов. 
                    </p>
                </div>
            </div>
            <div class="border-left border-3 mt-2 mt-sm-2" style={{marginBottom: 15}}>
                <h5 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Технические характеристики</h5>
            </div>
            <table class="table">
                <thead class="thead pneumatic_motors">
                    <tr>
                        <td>Параметры</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Жесткая база, мм</td>
                        <td>1700</td>
                    </tr>
                    <tr>
                        <td>Номинальное напряжение на токоприемнике, В</td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td>Скорость при часовом режим, км/ч</td>
                        <td>12,8</td>
                    </tr>
                    <tr>
                        <td>Мощность электродвигателей в часовом режиме, кВт</td>
                        <td>2х45</td>
                    </tr>
                    <tr>
                        <td>Тяговое усилие в часовом режиме, кН</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Ширина колеи, мм</td>
                        <td>750, 900</td>
                    </tr>
                    <tr>
                        <td>Клиренс (дорожный просвет), мм</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Наружный диаметр бандажа, мм</td>
                        <td>680</td>
                    </tr>
                    <tr>
                        <td>Производительность компрессора, л/мин</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>Рабочее давление воздуха в пневмосистеме, МПа</td>
                        <td>0,45</td>
                    </tr>
                    <tr>
                        <td>Размеры, м</td>
                        <td>5210 x 1350 x 1650</td>
                    </tr>
                    <tr>
                        <td>Вес, кг</td>
                        <td>14000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function K_10(){
    return(
        <div>
            <div class="border-left border-3 mt-3" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Электровоз контактный К-10</h4>
            </div>
            <div className="row ml-0 mr-0">
                <div class="card col-md-12">
                    <img class="card-img-top" src={require("../../content/images/products/mine_electric_locomotives/k_10.png")} alt="k_10"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Электровоз контактный К-10</p>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Предназначен для транспортирования составов по подземным выработкам шахт и рудников с уклоном до 0,005 и радиусами закругления рельсовых путей не менее 12 м., 
                        в которых действующими правилами безопасности разрешена эксплуатация контактных электровозов.
                    </p>
                </div>
            </div>
            <div class="border-left border-3 mt-2 mt-sm-2" style={{marginBottom: 15}}>
                <h5 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Технические характеристики</h5>
            </div>
            <table class="table">
                <thead class="thead pneumatic_motors">
                    <tr>
                        <td>Параметры</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Номинальное напряжение на токоприемнике, В</td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td>Скорость при часовом режиме, км/ч</td>
                        <td>12,2</td>
                    </tr>
                    <tr>
                        <td>Мощность электродвигателей в часовом режиме, кВт</td>
                        <td>2х33</td>
                    </tr>
                    <tr>
                        <td>Тяговое усилие в часовом режиме, кН</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Ширина колеи, м</td>
                        <td>600/750/900</td>
                    </tr>
                    <tr>
                        <td>Жесткая база, м</td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td>Клиренс (дорожный просвет), мм</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>Наружный диаметр бандажа, мм</td>
                        <td>680</td>
                    </tr>
                    <tr>
                        <td>Производительность компрессора, л/мин</td>
                        <td>460</td>
                    </tr>
                    <tr>
                        <td>Рабочее давление воздуха в пневмосистеме, МПа</td>
                        <td>0,45</td>
                    </tr>
                    <tr>
                        <td>Размеры, м</td>
                        <td>4920 x 1350 x 165</td>
                    </tr>
                    <tr>
                        <td>Вес, кг</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MineElectricLocomotives;
