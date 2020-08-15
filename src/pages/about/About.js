import React from 'react'
import './About.css'


export class About extends React.PureComponent{
    render() {
        return (
            <div style={{width: '100%', marginBottom: 80}}>
                <div class="border-left border-3">
                    <h3 className="container" style={{marginTop: 20, paddingTop: 2, paddingBottom: 5}}>О нас</h3>
                </div>
                <div class="container">
                    <div class="row border-left border-3" style={{backgroundColor: '#B3F4B850'}}>
                        <img class="col-md-2 align-self-center"  src={require("../../content/images/coin_vybir_krainy.png")} alt="1"/>
                        <p class="container col-md-10 align-self-center text-justify" style={{fontSize: 18, marginTop: 20, color: '#36773B'}}>
                            По данным Госстата Украины были подведены итоги работы предприятий, ООО «ИнтерПромМаш» вошло в 100 лучших и находится в рейтинге надежных предприятий Украины. На основании результатов аналитики ООО «ИнтерПромМаш» получили Экспертную оценку «ВЫБОР СТРАНЫ» 2020, а также имеем право на использование маркировки «ВЫБОР СТРАНЫ» 2020. 
                        </p>
                    </div>
                </div>
                <p class="container text-justify" style={{fontSize: 17, marginTop: 10}}>
                    Общество с ограниченной ответственностью  «ИнтерПромМаш» направленное на производство и освоение нового горно-шахтного и обогатительного оборудования, а также запасных частей для горно-шахтного, угольного и металлургического комплексов Украины и стран СНГ.
                    Сегодня предприятие ООО «ИнтерПромМаш» производит мобильно и качественно интересующее Заказчика оборудование или запасные части при наличии технической документации, по чертежам Заказчика. 
                </p>
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner container">
                        <div class="carousel-item active" data-interval="4000">
                            <img src={require("../../content/images/image1.png")} class="d-block w-100" alt="1"/>
                            <div class="carousel-caption d-none d-md-block" style={{backgroundColor: '#00000065' }}>
                                <h3>КАЧЕСТВО ПРОВЕРЕННОЕ ПРАКТИКОЙ</h3>
                            </div>
                        </div>
                        <div class="carousel-item" data-interval="4000">
                            <img src={require("../../content/images/image2.png")} class="d-block w-100" alt="2"/>
                            <div class="carousel-caption d-none d-md-block" style={{backgroundColor: '#00000065' }}>
                                <h3>ПРОСТО И ПРОФЕССИОНАЛЬНО</h3>
                            </div>
                        </div>
                        <div class="carousel-item"  data-interval="4000">
                            <img src={require("../../content/images/image3.png")} class="d-block w-100" alt="3"/>
                            <div class="carousel-caption d-none d-md-block" style={{backgroundColor: '#00000065' }}>
                                <h3>СТАЛЬНАЯ НАДЕЖНОСТЬ</h3>
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
                <div>
                <div class="border-left border-3" style={{backgroundColor: '#B3F4B850'}}>
                <p class="container text-justify" style={{fontSize: 20, marginTop: 20, color: '#36773B', paddingTop: 10}}>
                    Горно-шахтное оборудование производства ООО «ИнтерПромМаш» отвечает высоким технологическим стандартам, подтверждено сертификатами качества и пользуется спросом у потребителей. 
                </p>
                <p class="container text-justify" style={{fontSize: 17, paddingBottom: 10}}>
                    На предприятии постоянно проводиться работа по совершенствованию конструкции и технологии изготовления.
                </p>
                </div>
                <div className="d-flex flex-row justify-content-between images-block" style={{marginTop: 20, marginBottom: 20}}>
                    <img src={require("../../content/images/image6.jpg")} class="rounded mx-auto image" alt="4"/>
                    <img src={require("../../content/images/image4.jpg")} class="rounded mx-auto image" alt="5"/>
                    <img src={require("../../content/images/image5.jpg")} class="rounded mx-auto image" alt="6"/>
                </div>
               
                <div class="border-left border-3">
                    <h4 className="container" style={{marginTop: 20, paddingTop: 2, paddingBottom: 5}}>Качество и индивидуальность</h4>
                </div>
                <p class="container text-justify" style={{fontSize: 17, marginBottom: 10}}>
                    Оборудование зарекомендовало себя качественным, сравнительно недорогим, простым и в то же время надежным в обслуживании, вследствие чего пользуется повышенным спросом и имеет множество положительных отзывов от потребителей.
                    Строго индивидуальный подход к каждому предприятию способствует более качественному решению технических вопросов и укреплению сотрудничества между нашими предприятиями. 
                </p>
                <div class="border-left border-3">
                    <h4 className="container" style={{marginTop: 20, paddingTop: 2, paddingBottom: 5}}>Совершенствование и надежность</h4>
                </div>
                <p class="container text-justify" style={{fontSize: 17, marginBottom: 10}}>
                    Мы постоянно работаем над расширением номенклатуры и повышением качества выпускаемого оборудования, способного максимально удовлетворять требованиям и ожиданиям потребителей. 
                    Мы надеемся, что продукция нашего предприятия заинтересует Вас, а данный сайт поможет Вам сориентироваться в спектре нашего оборудования, найти решения, что в конечном итоге принесет выгоду и пользу Вашему производству!
                </p>
                <div class="border-left border-3">
                    <h4 className="container" style={{marginTop: 20, paddingTop: 2, paddingBottom: 5}}>Комплексный подход</h4>
                </div>
                <p class="container text-justify" style={{fontSize: 17}}>
                    Мы предлагаем Вам, максимально удобные формы расчетов, консультации специалистов, гибкую ценовую политику, качество исполнения договоров и комплексный подход в решении Ваших производственных задач. 
                    Надеемся, что при формировании плана технического перевооружения предприятия Вы обратите внимание на возможности ООО «ИнтерПромМаш».
                </p>
               
                </div>
            </div>
        );
    }
}