import React from 'react';
import matmeh from '../mathmechs.jpg'

const About = () => {
    return (
        <div>
            <h1>О чем сайт</h1>
            <div style={{
                marginLeft: "3px",
                textAlign: "center"
            }}
            >
                Приложение для всех курсовых работ со всех кафедр, в котором легко можно было бы найти темы и научного руководителя для соответствующего курса.
            </div>
            <h1>В ролях</h1>
            <table id="about_table">
                <tbody>
                    <tr id="about_tr">
                        <td id="about_td">
                            <img src={matmeh} style={{width: "20%"}}/>
                            <div>Конченый идиот</div>
                        </td>
                        <td id="about_td">
                            <img src={matmeh} style={{width: "20%"}}/>
                            <div>Самый сексуальный мужик в мире</div>
                        </td>
                        <td id="about_td">
                            <img src={matmeh} style={{width: "20%"}}/>
                            <div>Горячая чикса</div>
                        </td>
                    </tr>
                    <tr id="about_tr">
                        <td id="about_td">
                            <img src={matmeh} style={{width: "20%"}}/>
                            <div>Злодей британец</div>
                        </td>
                        <td id="about_td">
                            <img src={matmeh} style={{width: "20%"}}/>
                            <div>Так себе шутник</div>
                        </td>
                        <td id="about_td">
                            <img src={matmeh} style={{width: "20%"}}/>
                            <div>Пубертатная язва</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default About;