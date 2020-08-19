import React from 'react'
import './Contacts.css'

export class Contacts extends React.PureComponent{
    render() {
        return (
        <div className="mt-3" style={{marginBottom: 80}}>
            <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                <h3 className="container" style={{paddingBottom: 10, paddingTop: 10}}>Контакты</h3>
            </div>
            <div class="row d-flex justify-content-between align-self-center">
                <div class="col-md-6 mt-1">
                    <div class="d-flex flex-row align-items-center" style={{height: 40}}>
                        <div class="d-flex justify-content-center" style={{width: 50}}>
                            <img style={{width: 30, height: '100%', marginRight: 10}} src={require("../../content/images/contacts/phone_ic.png")} alt="place_1"/>
                        </div>
                        <div class="d-flex flex-column">
                            <text class="text-justify" style={{fontSize: 18, marginTop: 0}}>
                                +38 (067) 569-24-52
                            </text>
                            <text class="text-justify" style={{fontSize: 18, marginTop: 0}}>
                                +38 (066) 820-86-65
                            </text>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-1">
                    <div class="d-flex flex-row justify-content-end align-items-center" style={{height: 40}}>
                        <p class="text-justify" style={{fontSize: 18, marginTop: 15}}>
                            interprommas@gmail.com
                        </p>
                        <div class="d-flex justify-content-center" style={{width: 70}}>
                            <img style={{width: 40, height: '100%', marginLeft: 5, backgroundColor: '#B3F4B850'}} src={require("../../content/images/contacts/email_ic.png")} alt="place_1"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-left border-3 mt-3 mt-sm-0">
                <h4 className="container" style={{marginTop: 20, paddingTop: 6, paddingBottom: 8, backgroundColor: '#B3F4B850'}}>Юридический адресс</h4>
            </div>
            <div class="mt-3">
                <img class="border border-success" style={{width: '100%'}} src={require("../../content/images/contacts/place_2.PNG")} alt="place_2"/>
            </div>
            <div class="d-flex justify-content-end align-items-center" style={{marginTop: 3}}>
                <a class="text-right" style={{fontSize: 18}}
                    href="https://www.google.com.ua/maps/place/ул.+Петра+Дегтяренко,+35,+Киев,+02000/@50.5217199,30.4647886,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4d261fdd92f1b:0xef8a86986f62da56!8m2!3d50.5217165!4d30.4669773?hl=ru">
                    04201, г. Киев, ул. Семьи Кульженко
                </a>
                <img style={{width: 15, height: '100%', marginLeft: 10, marginRight: 5}} src={require("../../content/images/contacts/google_maps_ic.png")} alt="google_map_ic"/>
            </div>

            <div class="border-left border-3 mt-3 mt-sm-0">
                <h4 className="container" style={{marginTop: 20, paddingTop: 6, paddingBottom: 8, backgroundColor: '#B3F4B850'}}>Адресс производства</h4>
            </div>
            <div class="mt-3">
                <img class="border border-success" style={{width: '100%'}} src={require("../../content/images/contacts/place_1.PNG")} alt="place_1"/>
            </div>
            <div class="d-flex justify-content-end align-items-center" style={{marginTop: 3}}>
                <a class="text-right" style={{fontSize: 18}} 
                    href="https://www.google.com.ua/maps/place/Конституционная+ул.,+Кривой+Рог,+Днепропетровская+область,+50000/@48.0345306,33.469502,17z/data=!3m1!4b1!4m5!3m4!1s0x40dae18467430bc9:0x89ed9c8c96644f60!8m2!3d48.034527!4d33.4716907?hl=ru">
                    50015, г. Кривой Рог, ул. Конституционная
                </a>
                <img style={{width: 15, height: '100%', marginLeft: 10, marginRight: 5}} src={require("../../content/images/contacts/google_maps_ic.png")} alt="google_map_ic"/>
            </div>
            
        </div>)
    }
}