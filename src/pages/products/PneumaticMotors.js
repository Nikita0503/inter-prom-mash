import React from 'react'
import './PneumaticMotors.css'

function PneumaticMotors(){
    return(
        <div>
            <P_12_12/>
            <P_16_25/>
            <DAR_14/>
            <DAR_5/>
        </div>
    )
}

function P_12_12(){
    return(
        <div>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Пневмодвигатель П 12-12 (Пневмомотор П 12-12)</h4>
            </div>
            <div className="row ml-0 mr-0">
                <div class="card col-md-12">
                    <img class="card-img-top" src={require("../../content/images/products/pneumatic_motors/P_12_12.PNG")} alt="P_12_12_1"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Пневмодвигатель П 12-12</p>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Пневмомотор П12-12 (пневмодвигатель П12-12) применяется на породопогрузочных машинах ППН1, ППН3 в качестве привода породопогрузочной машины.
                        Использование пневмомоторов П12-12 на породопогрузочных машинах в стволах шахт и рудников обусловлено высокой влажностью, взрывоопасной средой в которой работает породопогрузочная машина и невозможность использования других типов двигателей в данных условиях. 
                        Пневмомотор П12-12 используется в составе породопогрузочной машины ППН1, ППН3 в качестве взрывобезопасного привода, работающего от сжатого воздуха. Пнемомотор П12-12 обеспечивает работу породопогрузочных машин по подъему руды, угля на поверхность из ствола шахты или рудника. 
                        Использование пневмомотора П12-12 для приведения породопогрузочных машин обусловлено требованиями искробезопасности и взрывобезопасности при проведении работ в стволах шахт и рудников.
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
                        <td>Номинальное давление сжатого воздуха на входе в пневмомотор, МПа (кгс/cm2 )</td>
                        <td>0,5</td>
                    </tr>
                    <tr>
                        <td>Мощность, кВт</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Номинальная частота вращения выходного вала, с-1</td>
                        <td>12,5</td>
                    </tr>
                    <tr>
                        <td>Номинальный удельный расход свободного воздуха, м3• ч-1•кВт-1</td>
                        <td>1,02</td>
                    </tr>
                    <tr>
                        <td>Условный проход присоединительной арматуры, мм </td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Габаритные размеры, мм, не более</td>
                        <td>410х425х383</td>
                    </tr>
                    <tr>
                        <td>Масса, кг, не более</td>
                        <td>105</td>
                    </tr>
                    <tr>
                        <td>Уровень звука при работе на номинальном режиме, дБА, не более</td>
                        <td>98</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function P_16_25(){
    return(
        <div>
            <div class="border-left border-3 mt-8 mt-sm-5" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Поршневой пневмомотор П16-25</h4>
            </div>
            <div className="row d-flex justify-content-around container ml-0">
                <div class="row card col-md-4 h-50">
                    <img class="card-img-top" src={require("../../content/images/products/pneumatic_motors/P16_25_3.PNG")} alt="P16_25"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Поршневой пневмомотор П16-25</p>
                    </div>
                </div>
                <div className="col-md-8 mt-md-0 mt-sm-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Поршневой пневмомотор П16-25 (ПКШ.01.150) предназначен для привода породопогрузочных машин ППН3 в шахтах угольной и горной промышленности, 
                        черной и цветной металлургии при температуре окружающей среды от 5 до 50°С и относительной влажности до 97 при 35°С. 
                        Пневмомотор П16-25 фланцем крепится к рабочим органам породопогрузочной машины. 
                        Пневмомотор приводится в действие краном, установленным на машине. 
                        Глушение шума осуществляется воздушными рукавами, отводящими выхлопной воздух от рабочей зоны оператора.
                    </p>
                </div>
            </div>
            <div class="border-left border-3 mt-4 mt-sm-4" style={{marginBottom: 15}}>
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
                        <td>Тип исполнения пневмомотора</td>
                        <td>поршневой быстроходный</td>
                    </tr>
                    <tr>
                        <td>Давление, (МПа)</td>
                        <td>0,5</td>
                    </tr>
                    <tr>
                        <td>Мощность, (кВТ)</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>Частота вращения, (об/сек) 	</td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>Расход воздуха, (м3/мин)</td>
                        <td>20,8</td>
                    </tr>
                    <tr>
                        <td>Присоединительный размер, (мм)</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Габариты (ДхШхВ). мм</td>
                        <td>450х450х400</td>
                    </tr>
                    <tr>
                        <td>Масса, (кг)</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function DAR_14(){
    return(
        <div>
            <div class="border-left border-3 mt-8 mt-sm-5" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Пневмомотор  ДАР-14 (ДАР-14М)</h4>
            </div>
            <div className="row d-flex justify-content-around container ml-0">
                <div class="row card col-md-4 h-50">
                    <img class="card-img-top" src={require("../../content/images/products/pneumatic_motors/DAR_14.PNG")} alt="DAR_14"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Пневмомотор  ДАР-14 (ДАР-14М)</p>
                    </div>
                </div>
                <div className="col-md-8 mt-md-0 mt-sm-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Пневмомотор ДАР-14 - аксиально-поршневой, с профильным диском многократного действия, реверсивный, нерегулируемый, с двухсторонними поршнями, 
                        предназначен для привода шахтных погрузочных и погрузочно-транспортных машин, бурильных установок, проходческих вагонов, лебедок и других агрегатов и механизмов. 
                        Пневмомотор состоит из двух комплектных полублоков, ротора с профильным диском, пяти поршней, двух крышек и коробок для подвода и отвода воздуха. 
                        Детали пневмомотора изготовлены из высокопрочного алюминиевого сплава, стали и чугуна. Сжатый воздух через систему каналов подается в рабочие камеры и перемещает поршни, 
                        обеспечивая работу мотора.  Установка пневмомотора на приводах фланцевая по диаметру 240h8, 
                        передача крутящего момента производится при помощи внутренних шлиц с размерами D-6-26Н11х32H8х6D9 ГОСТ 1139-80, подвод сжатого воздуха к пусковой коробке с отверстиями с резьбой G1 3/4-В.
                    </p>
                </div>
            </div>
            <div class="border-left border-3 mt-3 mt-sm-3" style={{marginBottom: 15}}>
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
                        <td>Номинальное давление, МПа</td>
                        <td>0,4</td>
                    </tr>
                    <tr>
                        <td>Номинальная мощность, кВт</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Удельный расход воздуха (м3/мин) / кВт</td>
                        <td>1,29</td>
                    </tr>
                    <tr>
                        <td>Номинальная частота вращения, с-1</td>
                        <td>6,3</td>
                    </tr>
                    <tr>
                        <td>Крутящий момент страгивания, н•м</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Габаритные размеры, мм <br/>длина<br/>ширина<br/>высота</td>
                        <td><br/>290<br/>265<br/>265</td>
                    </tr>
                    <tr>
                        <td>Масса, (кг)</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function DAR_5(){
    return(
        <div>
            <div class="border-left border-3 mt-8 mt-sm-5" style={{marginBottom: 15}}>
                <h4 className="container" style={{paddingTop: 2, paddingBottom: 5}}>Пневмомотор  ДАР-5 (ДАР-5Б)</h4>
            </div>
            <div className="row d-flex justify-content-around container ml-0">
                <div class="row card col-md-4 h-50">
                    <img class="card-img-top" src={require("../../content/images/products/pneumatic_motors/DAR_5.PNG")} alt="DAR_5"/>
                    <div class="dropdown-divider"></div>
                    <div class="card-body">
                        <p class="card-text text-center">Пневмомотор ДАР-5 (ДАР-5Б)</p>
                    </div>
                </div>
                <div className="col-md-8 mt-md-0 mt-sm-3">
                    <p class="text-justify" style={{fontSize: 16}}>
                        Пневмомотор ДАР-5 - аксиально-поршневой, с профильным диском многократного действия, реверсивный, нерегулируемый, с двухсторонними поршнями, 
                        предназначен для привода горных машин и механизмов. Пневмомотор состоит из двух комплектных полублоков, ротора с профильным диском, четырех поршней и двух крышек. 
                        Детали пневмомотора изготовлены из высокопрочного алюминиевого сплава, стали и чугуна.
                        Сжатый воздух через систему каналов подается в рабочие камеры и перемещает поршни, обеспечивая работу мотора. 
                        Установка пневмомотора на приводах фланцевая по диаметру 125f9, передача крутящего момента осуществляется при помощи шлицевого вала, 
                        с размерами шлицов D-6х21х25е8х5d11 ГОСТ 1139-80, подвод сжатого воздуха к отверстиям с резьбой G1-B
                    </p>
                </div>
            </div>
            <div class="border-left border-3 mt-3 mt-sm-3" style={{marginBottom: 15}}>
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
                        <td>Номинальное давление, МПа</td>
                        <td>0,4</td>
                    </tr>
                    <tr>
                        <td>Номинальная мощность, кВт</td>
                        <td>3,2</td>
                    </tr>
                    <tr>
                        <td>Удельный расход воздуха (м3/мин) / кВт</td>
                        <td>1,29</td>
                    </tr>
                    <tr>
                        <td>Номинальная частота вращения, с-1</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Крутящий момент страгивания, н•м</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Габаритные размеры, мм <br/>длина<br/>ширина<br/>высота</td>
                        <td><br/>240<br/>160<br/>200</td>
                    </tr>
                    <tr>
                        <td>Масса, (кг)</td>
                        <td>19</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PneumaticMotors;