import React from 'react'
import './Feedback.css'

export class Feedback extends React.PureComponent {
    render() {
        return (
            <div className="container" style={{marginBottom: 80}}>
                <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                    <h3 className="container" style={{paddingBottom: 10, paddingTop: 10}}>Обратная связь</h3>
                </div>
               
                <div class="border-left border-3 mt-3 mt-sm-0" style={{marginBottom: 15, backgroundColor: '#B3F4B850'}}>
                    <h4 className="container" style={{paddingBottom: 10, paddingTop: 10}}>Возникли вопросы? Напишите и мы обязательно Вам ответим!</h4>
                </div>

                <form class="container">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Ваше имя:</label>
                        <input type="text" class="form-control" id="formGroupInputName"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email:</label>
                        <input type="email" class="form-control" id="formGroupInputEmail"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Ваш вопрос:</label>
                        <textarea class="form-control" id="formGroupInputRequest" rows="10"></textarea>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn send">Отправить</button>
                    </div>
                </form>
            </div>
        );
    }
}