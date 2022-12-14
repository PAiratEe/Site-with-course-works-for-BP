import React from 'react';
import matmeh from '../mathmechs.jpg'

const About = () => {
    return (
        <div>
            <h1>О чем сайт</h1>
            <div style={{
                marginLeft: "10px",
                textAlign: "left"
            }}
            >
                Наш сайт предназначен для студентов Математико-механического факультета.
                На нём собрана различная информация о преподавателях, кафедрах и темах курсовых работах.
            </div> <br></br>
            <div style={{
                marginLeft: "10px",
                textAlign: "left"
            }}>
                Пользователь может:
                <div style={{
                    marginLeft: "20px",
                    textAlign: "left"
                }}>
                <ul type="disc">
                    <li>Зарегистрироваться</li>
                    <li>Авторизоваться</li>
                    <li>Добавлять курсовые</li>
                    <li>Просматривать список преподавателей, список их курсовых</li>
                    <li>Просматривать список кафедр, список их курсовых</li>
                </ul>
                </div>
            </div>

            <h1>Перспективы развития проекта</h1>
            <div style={{
                marginLeft: "10px",
                textAlign: "left"
            }}>
                <div>Добавление тэгов</div>
            </div>

            <h1>Команда разработчиков</h1>
            <div style={{
                marginLeft: "30px",
                textAlign: "left"
            }}>
                <ul type="square">
                    <li>Королёв Артём</li>
                    <li>Сафин Айрат</li>
                    <li>Кисиев Тимур</li>
                    <li>Мажара Евгений</li>
                    <li>Плотникова Майя</li>
                    <li>Федосеев Артём</li>
                </ul>
            </div>

        </div>
    )
};

export default About;