import React from 'react'
import DrillingRigs from './DrillingRigs';
import './Products.css'

export class Products extends React.PureComponent{
    render() {
        return (
            <div className="mt-3" style={{marginBottom: 80}}>
                <div class="row">
                    <div class="col-md-3">
                        <div class="nav flex-column nav-pills product" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active " id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Буровые станки</a>
                            <a class="nav-link " id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Запасные части к горношахтному оборудованию</a>
                            <a class="nav-link " id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Пневмодвигателя</a>
                            <a class="nav-link " id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected="false">Погрузочные машины</a>
                            <a class="nav-link " id="v-pills-5-tab" data-toggle="pill" href="#v-pills-5" role="tab" aria-controls="v-pills-5" aria-selected="false">Услуги</a>
                            <a class="nav-link " id="v-pills-6-tab" data-toggle="pill" href="#v-pills-6" role="tab" aria-controls="v-pills-6" aria-selected="false">Шахтные электровозы</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                                <DrillingRigs/>
                            </div>
                            <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                                2
                            </div>
                            <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                                3
                            </div>
                            <div class="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab">
                                4
                            </div>
                            <div class="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab">
                                5
                            </div>
                            <div class="tab-pane fade" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-6-tab">
                                6
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}