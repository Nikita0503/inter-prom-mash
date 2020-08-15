import React from 'react'
import './SpareParts.css'

function SpareParts(){
    return(
        <div>
            <div class="border-left border-3" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h4 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Запасные части к горно-шахтному оборудованию</h4>
            </div>
            <p class="container text-justify" style={{fontSize: 16, marginTop: 10}}>
                ООО «ИНТЕРПРОММАШ» обладает квалифицированным персоналом и необходимым оборудованием для производства и поставки механической части машин, 
                механизмов, оборудования следующего типа:     
            </p>
            <div class="border-left border-3" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h5 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Запасные части к горно-шахтному оборудованию:</h5>
            </div>
            <ul>
                <li>Запасные части к электровозам шахтным К-10, К-14</li>
                <li>Запасные части к вагонеткам ВГ 4,5</li>
                <li>Колесные пары электровозов, толкателей, конвейерные, тепловозов</li>
                <li>Запасные части к породопогрузочным машинам ППН-3, ППН-1</li>
                <li>Запасные части к экскаватору ЭКГ-5</li>
                <li>Запасные части к дробилкам</li>
                <li>Буровые коронки КНШ Ø36, КНШ Ø41, КНШ Ø45, КНШ Ø105, КНШ Ø110</li>
                <li>Буровая сталь</li>
                <li>Перфораторы</li>
                <li>Пневмоударники П-110</li>
                <li>Буровые штанги на СБУ-100 </li>
                <li>Долотья</li>
            </ul>
            <div class="border-left border-3" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h5 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Запасные части к оборудованию для:</h5>
            </div>
            <ul>
                <li>Добычи и транспортировки полезных ископаемых</li>
                <li>Дробления, сортировки, обогащения полезных ископаемых</li>
                <li>Конвейерное оборудование</li>
                <li>Оборудование окомкования руд и концентратов</li>
            </ul>
            <div class="row d-flex justify-content-center" style={{marginTop: 50}}>
                <div class="col-md-4 col-sm-6 mt-1"><img class="card-img-top" src={require("../../content/images/products/spare_parts/spare_parts6.png")} alt="spare_part_6"/></div>
                <div class="col-md-4 col-sm-6 mt-1 d-flex align-items-center"><img class="card-img-top" src={require("../../content/images/products/spare_parts/spare_parts8.png")} alt="spare_part_8"/></div>
                <div class="col-md-4 col-sm-6 mt-1"><img class="card-img-top" src={require("../../content/images/products/spare_parts/spare_parts4.png")} alt="spare_part_4"/></div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-5 col-sm-6 mt-1"><img class="card-img-top" src={require("../../content/images/products/spare_parts/spare_parts5.png")} alt="spare_part_5"/></div>
                    <div class="col-md-5 col-sm-6 mt-1"><img class="card-img-top" src={require("../../content/images/products/spare_parts/spare_parts7.png")} alt="spare_part_7"/></div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7 col-sm-6 mt-1"><img class="card-img-top" src={require("../../content/images/products/spare_parts/spare_parts3.jpg")} alt="spare_part_3"/></div>
                    <div class="col-md-4 col-sm-6 mt-1"><img class="card-img-top" style={{height: '100%'}} src={require("../../content/images/products/spare_parts/spare_parts1.jpg")} alt="spare_part_1"/></div>
                </div>
                <div class="col-md-10 col-sm-11 mt-1"><img class="card-img-top" src={require("../../content/images/products/spare_parts/spare_parts2.png")} alt="spare_part_2"/></div>
            </div>
        </div>
    )
}

export default SpareParts;