import React from 'react'
import './Services.css'

function Services(){
    return(
        <div>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h4 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Услуги</h4>
            </div>
            <div class="d-flex justify-content-center flex-column">
                <p class="container text-justify" style={{fontSize: 16, marginTop: 10}}>
                    ООО «ИНТЕРПРОММАШ» имеет возможность выполнения всех видов ремонтов (монтаж, демонтаж, наладку, техническое обслуживание, 
                    капитальные ремонты) механической части машин, механизмов, оборудования следующего типа:
                </p>
                <div class="container row align-self-center justify-content-center mb-4">
                    <div class="col-md-4 col-sm-6 mt-2"><img class="card-img-top" style={{height: '100%'}} src={require("../../content/images/products/services/services4.jpg")} alt="services4"/></div>
                    <div class="col-md-4 col-sm-6 mt-2"><img class="card-img-top" style={{height: '100%'}} src={require("../../content/images/products/services/services2.jpg")} alt="services2"/></div>
                    <div class="col-md-4 col-sm-6 mt-2"><img class="card-img-top" style={{height: '100%'}} src={require("../../content/images/products/services/services3.jpg")} alt="services3"/></div>
                </div>
            </div>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h5 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Горно-шахтное оборудование:</h5>
            </div>
            <ul>
                <li>Электровозы шахтные К-10, К-14</li>
                <li>Погрузочные машины ППН-3, ППН-1</li>
                <li>Буровые станки НКР-100М</li>
                <li>Пневмодвигателя П12-12, П4Ф4 (ППН3.04.040), П16-25, ДАР-14, ДАР-5</li>
            </ul>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h5 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Оборудование для:</h5>
            </div>
            <ul>
                <li>Добычи и транспортировки полезных ископаемых</li>
                <li>Дробления, сортировки, обогащения полезных ископаемых</li>
                <li>Конвейерное оборудование</li>
                <li>Оборудование окомкования руд и концентратов</li>
            </ul>
            <p class="container text-justify" style={{fontSize: 16, marginTop: 10}}>
                Также имеются цеха для восстановительных ремонтных работ и 
                изготовления всех новых комплектующих на весь вышеперечисленный ремонтный фонд.
            </p>
            <p class="container text-justify" style={{fontSize: 16, marginTop: 10}}>
                Технологические возможности предприятия:
            </p>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h4 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Механический участок</h4>
            </div>
            <ul>
                <li>Изготовление и ремонт узлов любой сложности (автомобильному, железнодорожному транспорту и горным машинам)</li>
                <li>Изготовление валов на все типы электродвигателей длинной до 3500мм и диаметром до 400мм</li>
                <li>Изготовление пальцев, осей, валов, шестерней, ползунов, шкивов, вал-шестерней, полумуфт, ведущих и ведомых ЭКГ 5 м³8 м³, 10 м³; ППН-3, К-10, К-14 и др.</li>
                <li>Изготовление осей, полумуфт, фланцев, корпусов подшипников, крышек, валиков, втулок, рычагов и других деталей машин и механизмов (весом до 5т)</li>
                <li>Фрезеровальные работы любой сложности</li>
                <li>Изготовление и восстановление редукторов, корпусов подшипников и других корпусных деталей</li>
            </ul>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h4 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Термический участок</h4>
            </div>
            <ul>
                <div>
                    <li>Термическая обработка (нормализация, улучшения, закалка, цементация) в электропечах</li>
                    <li>ТВЧ</li>
                </div>
            </ul>
            <div class="container d-flex col-md-12 pl-4 pr-4 mb-3">
                <img class="card-img-top" src={require("../../content/images/products/services/services5.jpg")} alt="services5"/>
            </div>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h4 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Наплавочно-восстановительный участок</h4>
            </div>
            <ul>
                <li>Ремонт узлов горно-шахтного оборудования, СБШ 250, дробилок КМДТ, КСД</li>
                <li>Ремонт и восстановление стрелы, рукояти, рамы гусеничной, кабины, поворотной платформы, редукторов и ковшей экскаваторов ЭКГ 5 м³, 8 м³, 10 м³</li>
                <li>Восстановление износа стрелочных переводов Р-65 (рамный рельс, крестовина)</li>
                <li>Восстановление валов, вал-шестерен, шестерен, муфт, зубчатых, натяжных и опорных колес любой сложности</li>
                <li>Наплавочно - восстановительные работы по узлам обжиговых машин Лурги-522 (тележки, боковины тележек, рамы тележек и т.д.)</li>
                <li>Наплавочно-восстановительные работы по узлам и деталям мельниц МГР, ММС, МШЦ (питатель, корпус мельницы, бутара, и т.д.)</li>
            </ul>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h6 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>
                    * Все восстановительные работы производятся материалами и на оборудовании предприятия. 
                    Имеем возможность выполнения работ выездными бригадами на территории заказчика.
                </h6>
            </div>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h4 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Железнодорожный участок</h4>
            </div>
            <ul>
                <li>Капитальный ремонт вагонных колесных пар (с заменой оси, колесных центров, корпусов букс, подшипников, балансиров)</li>
                <li>Капитальный ремонт тепловозных колесных пар (с заменой оси, шестерен, бандажей, венцов, зубчатых колес, подшипников, корпусов букс, колесных центров)</li>
                <li>Капитальный ремонт думпкаров</li>
                <li>Ремонт колесных пар Р7</li>
                <li>Ремонт барабанов</li>
                <li>Ремонт редукторов конвейеров 500, 650, 850, 1000</li>
                <li>Изготовление и поставка запчастей и комплектующих для подвижного состава</li>
                <li>Ремонт трехосных тележек УВЗ 11-А, двухосных 18-100, тяговых агрегатов П2У (М, ОП1А), тепловозов ТГМ-4, 6, ТЭМ-2, ТЭ10М, ЧМЭ-3</li>
                <li>Восстановление, ремонт ударно-тягового механизма (автосцепка, втулок цилиндрических, вал-эксцентриков, хомут тяговый, поглощающий аппарат)</li>
            </ul>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h4 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>Производственные участки предприятия оснащены:</h4>
            </div>
            <ul>
                <li>Аппаратами электродуговой, автоматической и полуавтоматической сварки, газо-резательными аппаратами и машинами</li>
                <li>Токарно-карусельными, токарно-винторезными станками (ДИП200, ДИП300, ДИП400), фрезерными станками, вертикально и радикально сверлильными станками, шлифовальными станками, зуборезными станками, строгальными станками</li>
            </ul>
            <div class="d-flex container justify-content-center  mb-4">
                <div class="col-md-6 col-sm-6 mt-2"><img class="card-img-top" style={{height: '100%'}} src={require("../../content/images/products/services/services6.png")} alt="services4"/></div>
                <div class="col-md-6 col-sm-6 mt-2"><img class="card-img-top" style={{height: '100%'}} src={require("../../content/images/products/services/services7.png")} alt="services2"/></div>
            </div>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h6 className="container" style={{paddingBottom: 10, paddingTop: 10, }}>
                    Персонал, прошедший квалифицированное обучение, 
                    качественно и в срок выполняет работы с применением сертифицированных материалов и технологий.
                </h6>
            </div>
        </div>
    )
}

export default Services;