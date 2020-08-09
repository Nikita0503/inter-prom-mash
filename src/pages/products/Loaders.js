import React from 'react'
import './Loaders.css'


function Loaders(){
    return(
        <div>
            <div class="list-group list-group-md-horizontal" id="myList" role="tablist">
                <a class="list-group-item list-group-item-action active" data-toggle="list" href="#loaders_1" role="tab">ПКШ</a>
                <a class="list-group-item list-group-item-action" data-toggle="list" href="#loaders_2" role="tab">ППН3</a>
                <a class="list-group-item list-group-item-action" data-toggle="list" href="#loaders_3" role="tab">ППН-1С</a>
            </div>
            <div class="tab-content">
                <div class="tab-pane active" id="loaders_1" role="tabpanel"><PKSH/></div>
                <div class="tab-pane" id="loaders_2" role="tabpanel"><PPN3/></div>
                <div class="tab-pane" id="loaders_3" role="tabpanel"><PPN_1C/></div>
            </div>
        </div>
    )
}

function PKSH(){
    return(
        <div>
            <div class="border-left border-3 mt-3" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>ПКШ-погрузчик ковшевой шахтный</h4>
            </div>
            <div className="row ml-0 mr-0">
                <div class="card col-md-12">
                    <img class="card-img-top" src={require("../../content/images/products/loaders/pksh.jpg")} alt="pksh"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Погрузчик ковшевой шахтный</p>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        ПКШ предназначен для механизации погрузки горной массы при проведении и очистке водоотливных каналов и траншей, 
                        расположенных вдоль рельсового пути, и при очистке горных выработок от просыпей. 
                        Погрузчик может эксплуатироваться в горизонтальных горных выработках шириной не менее 2,5 м, оборудованных рельсовой колеей 600, 
                        750 или 900 мм с внутренним радиусом закругления не менее 15 м, а также пневмомагистралью не менее Ду 50 и шахтной осветительной сетью напряжением 360В.    
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
                        <td>Производительность рабочего цикла, сек</td>
                        <td>32-36</td>
                    </tr>
                    <tr>
                        <td>Вместимость ковшей, м³ <br/>- погрузочного <br/>- для проходки канавок</td>
                        <td><br/>0,115<br/>0,05</td>
                    </tr>
                    <tr>
                        <td>Наибольшая ширина захвата, м <br/>- от оси колеи вправо <br/>- от оси колеи влево</td>
                        <td><br/>1,7<br/>1,7</td>
                    </tr>
                    <tr>
                        <td>Высота разгрузки не более, мм</td>
                        <td>1550</td>
                    </tr>
                    <tr>
                        <td>Расход воздуха при давлении в сети 0,5 МПа, м³\мин</td>
                        <td>до 29</td>
                    </tr>
                    <tr>
                        <td>Габаритные размеры в транспортном положении (ШхВхД), м</td>
                        <td>1,2х1,65х4,1</td>
                    </tr>
                    <tr>
                        <td>Масса с ковшом вместимостью 0,05 м³, т</td>
                        <td>7,35</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function PPN3(){
    return(
        <div>
            <div class="border-left border-3 mt-3" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Машина погрузочная шахтная ППН3</h4>
            </div>
            <div className="row ml-0 mr-0">
                <div class="card col-md-12">
                    <img class="card-img-top" src={require("../../content/images/products/loaders/ppn3.jpg")} alt="ppn3"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Машина погрузочная шахтная</p>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Машина погрузочная шахтная ППН3  предназначена для погрузки взорванной горной массы любой крепости и абразивности в вагонетки, 
                        на конвейер или другие транспортные средства при проходке горизонтальных горных выработок на разрабатываемых подземных месторождениях, 
                        полезных ископаемых и строительстве подземных сооружений. Машина производит погрузку горной массы с крупностью кусков до 600 мм в выработках высотой не менее 
                        2,85 м от головки рельса. Погрузка производится с рельсового пути, по которому перемещается машина. Машина состоит из следующих основных узлов 
                        — механизма передвижения, поворотной платформы, механизма подъема, рабочего органа, пульта управления, механизма поворота и системы орошения. 
                        Погрузочная машина ППН3  периодического действия с нижним захватом горной массы, прямой погрузки, с колесно-рельсовым механизмом передвижения, 
                        тросовой стабилизацией рабочего органа и пневматическим приводом. Машина довольно проста по конструкции, удобна в управлении и обслуживании, 
                        производительна и надежна в работе. Для снижения утомляемости оператора машина оборудована глушителем шума и антивибрационной подножкой. 
                        ППН3 — предназначена для погрузки взорванной горной массы в вагонетки или другие транспортные средства при проходке горных выработок и строительстве 
                        подземных сооружений.
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
                        <td>Производительность, м3/мин</td>
                        <td>1,8</td>
                    </tr>
                    <tr>
                        <td>Колея, мм</td>
                        <td>600, 750, 900</td>
                    </tr>
                    <tr>
                        <td>Давление сжатого воздуха ,МПа</td>
                        <td>0,4 … 0,7</td>
                    </tr>
                    <tr>
                        <td>Мощность пневмомоторов, кВт</td>
                        <td>39,8</td>
                    </tr>
                    <tr>
                        <td>Удельный расход воздуха, м3/мин</td>
                        <td>26,0*</td>
                    </tr>
                    <tr>
                        <td>Вместимость ковша, м3</td>
                        <td>0,55</td>
                    </tr>
                    <tr>
                        <td>Ширина захвата, мм</td>
                        <td>3200</td>
                    </tr>
                    <tr>
                        <td>Высота загрузки, мм</td>
                        <td>1650</td>
                    </tr>
                    <tr>
                        <td>Габаритные размеры, мм</td>
                        <td>3200х1500х1800</td>
                    </tr>
                    <tr>
                        <td>Высота транспортная, наибольшая, мм</td>
                        <td>2800</td>
                    </tr>
                    <tr>
                        <td>Масса, т</td>
                        <td>6,8</td>
                    </tr>
                    <tr>
                        <td></td><td><p class="text-right">* при давлении сжатого воздуха МПа 0,5</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function PPN_1C(){
    return(
        <div>
            <div class="border-left border-3 mt-3" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>ППН-1С (НК-1)</h4>
            </div>
            <div className="row ml-0 mr-0">
                <div class="card col-md-12">
                    <img class="card-img-top" src={require("../../content/images/products/loaders/ppn_1c.PNG")} alt="pksh"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">ППН-1С (НК-1)</p>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Машина погрузочная шахтная ППН-1С (НК-1) предназначена для погрузки взорванной горной массы любой крепости и абразивности в вагонетки, 
                        на конвейер или другие транспортные средства при проходке горизонтальных горных выработок на разрабатываемых подземных месторождениях полезных ископаемых 
                        и строительстве подземных сооружений. Машина может грузить горную массу с крупностью кусков до 300 мм в выработках высотой не менее 2,3 м от головки рельса. 
                        Погрузка производится с рельсового пути, по которому перемещается машина. Основными узлами являются: ходовая часть, поворотная платформа, редуктор подъема, 
                        рабочий орган, корпус с установленным на нем пультом управления, механизм поворота и система орошения. Машина приводится в действие двумя пневмомоторами. 
                        Погрузочная машина ППН1 (НК-1) проста по конструкции, удобна в управлении и обслуживании, надежна в работе.
                        Погрузочная машина ППН-1С(НК-1) прямой погрузки, пневматическая, на колесном ходу, состоит из ковшового погрузочного органа 1 с рукоятью 4; 
                        ходовой тележки 7 с лебедкой для подъема ковша, установленный в корпусе машины 3 поворотной платформы 6; двух пневматических двигателей 2 и пульта управления 5. 
                        Машина предназначена для погрузки в вагонетки разрушенной и разрыхленной взрывом горной породы (сухой и влажной) с крупностью кусков до 300 мм. 
                        Машина производит погрузку с рельсового пути. Привод машины осуществляется двумя пневматическими двигателями мощностью 9 кВт каждый.
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
                        <td>Производительность, м3/мин</td>
                        <td>1,25*</td>
                    </tr>
                    <tr>
                        <td>Привод</td>
                        <td>пневматический</td>
                    </tr>
                    <tr>
                        <td>Колея, мм</td>
                        <td>500, 600, 750, 900</td>
                    </tr>
                    <tr>
                        <td>Давление сжатого воздуха, МПа</td>
                        <td>0,4 ... 0,7</td>
                    </tr>
                    <tr>
                        <td>Мощность пневмомоторов,	кВт</td>
                        <td>22*</td>
                    </tr>
                    <tr>
                        <td>Удельный расход воздуха, м3/мин</td>
                        <td>19,5*</td>
                    </tr>
                    <tr>
                        <td>Вместимость ковша, м3</td>
                        <td>0,25</td>
                    </tr>
                    <tr>
                        <td>Ширина захвата, мм</td>
                        <td>2200</td>
                    </tr>
                    <tr>
                        <td>Высота загрузки, мм</td>
                        <td>1300</td>
                    </tr>
                    <tr>
                        <td>Габаритные размеры, мм</td>
                        <td>2270х1150х1500</td>
                    </tr>
                    <tr>
                        <td>Высота транспортная, наибольшая, мм</td>
                        <td>2250</td>
                    </tr>
                    <tr>
                        <td>Масса, т</td>
                        <td>3,8</td>
                    </tr>
                    <tr>
                        <td></td><td><p class="text-right">* при давлении сжатого воздуха МПа 0,5</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Loaders;