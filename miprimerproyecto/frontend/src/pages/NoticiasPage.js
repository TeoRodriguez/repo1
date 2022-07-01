import "../styles/components/pages/NoticiasPage.css"
import React from "react";
const NoticiasPage = (props) => {
    return (
     <main className="holder">
        <h2>Noticias de Hoy</h2>
        <div className="noticias">
            <img src="Img/choque-palermo-patricellijpg.webp" width="200px" height="150px" alt=""/>
            <div className="info">
                <h4>Choque en Palermo</h4>
                <p>La justicia dictó prisión preventiva y un embargo de 300 millones de pesos para el empresario Roberto
                    Juan Patricelli (57), quien está imputado por "homicidio simple con dolo eventual y lesiones graves
                    y leves" por el choque que protagonizó en el barrio porteño de Palermo, en el que murieron un joven
                    de 20 años y una adolescente de 15.</p>
            </div>
        </div>

        <div className="noticias">
            <img src="Img/di-maria.jpg" width="200px" height="150px" alt=""/>
            <div className="info">
                <h4>Di maria deja el PSG</h4>
                <p>Angel Di María se va del Paris Saint Germain después de siete temporadas con el club.

                    El contrato del atacante argentino está a punto de vencer y los campeones de Francia anunciaron su
                    partida el viernes por la noche.

                    “Angel Di María ha dejado una marca permanente en la historia del club", dijo el presidente del PSG,
                    Nasser Al-Khelaifi.</p>
            </div>
        </div>
        <div className="noticias">
            <img src="Img/62894a0430338-horizontal-pieza-noticia_940_612!.jpg" width="200px" height="150px" alt=""/>
            <div className="info">
                <h4>La mitad del peronismo mendocino faltó al encuentro de Wado y Sagasti</h4>
                <p>El encuentro organizado por los camporistas Wado de Pedro y Anabel Fernández Sagasti en Mendoza para
                    darle volumen al proyecto presidencial del ministro del Interior, coincidió con una crisis en el
                    peronismo mendocino.

                    Alrededor de la mitad de los dirigentes más importantes de esa fuerza, que resisten el liderazgo de
                    la senadora cristinista, evitaron mostrarse en el auditorio Angel Bustelo de la capital mendocina.
                </p>
            </div>
        </div>

        </main>
    )
}
export default NoticiasPage;