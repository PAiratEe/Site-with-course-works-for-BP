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
                marginLeft: "3px",
                textAlign: "center",
                fontSize: "21px"
            }}
            >
                Приложение для всех курсовых работ со всех кафедр, в котором легко можно было бы найти темы и научного руководителя для соответствующего курса.
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