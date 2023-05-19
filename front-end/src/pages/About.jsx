import React from 'react';
import matmeh from '../mathmechs.jpg'
import git from '../github.png'

const About = () => {
    return (
        <div>
            <h1 style={{
                marginLeft: "3px",
                textAlign: "center",
            }}
            >
                О чем сайт
            </h1>
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
            <h1 style={{
                marginLeft: "3px",
                textAlign: "center",
            }}
            >
                Состав команды
            </h1>
            <table className="about_table">
                <tbody>
                    <tr className="about_tr">
                        <td className="about_td">
                            {/*<img src={matmeh} style={{width: "20%"}}/>*/}
                            <h2 style={{textAlign: "center"}}>Лидер команды</h2>
                            <h3 style={{marginLeft: "10px"}}>Кисиев Тимур</h3>
                            <a href="https://github.com/TimurKisiev11"><img src={git} style={{width: "20%"}}/></a>
                        </td>
                        <td className="about_td">
                            {/*<img src={matmeh} style={{width: "20%"}}/>*/}
                            <h2 style={{textAlign: "center"}}>Разработчик</h2>
                            <h3 style={{marginLeft: "10px"}}>Мажара Евгений</h3>
                            <a href="https://github.com/hyperdiamond0"><img src={git} style={{width: "20%"}}/></a>
                        </td>
                        <td className="about_td">
                            {/*<img src={matmeh} style={{width: "20%"}}/>*/}
                            <h2 style={{textAlign: "center"}}>Разработчик</h2>
                            <h3 style={{marginLeft: "10px"}}>Киселева Полина</h3>
                            <a><img src={git} style={{width: "20%"}}/></a>
                        </td>
                    </tr>
                    <tr className="about_tr">
                        <td className="about_td">
                            {/*<img src={matmeh} style={{width: "20%"}}/>*/}
                            <h2 style={{textAlign: "center"}}>Разработчик</h2>
                            <h3 style={{marginLeft: "10px"}}>Королев Артем</h3>
                            <a href="https://github.com/prostotema1"><img src={git} style={{width: "20%"}}/></a>
                        </td>
                        <td className="about_td">
                            {/*<img src={matmeh} style={{width: "20%"}}/>*/}
                            <h2 style={{textAlign: "center"}}>Разработчик</h2>
                            <h3 style={{marginLeft: "10px"}}>Сафин Айрат</h3>
                            <a href="https://github.com/PAiratEe"><img src={git} style={{width: "20%"}}/></a>
                        </td>
                        <td className="about_td">
                            {/*<img src={matmeh} style={{width: "20%"}}/>*/}
                            <h2 style={{textAlign: "center"}}>Разработчик</h2>
                            <h3 style={{marginLeft: "10px"}}>Федосеев Артем</h3>
                            <a href="https://github.com/temmchikf"><img src={git} style={{width: "20%"}}/></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default About;