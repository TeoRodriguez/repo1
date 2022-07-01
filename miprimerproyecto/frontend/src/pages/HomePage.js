import "../styles/components/pages/HomePage.css"
import React from "react";
const HomePage = (props) => {
    return (
        <div>

            <main className="holder">
                <div>
                    <img src="img/No-se-olviden.jpg " width="1000px" />


                </div>

                <div className="columna">
                    <section class="Bienvenidos">
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit laboriosam natus praesentium
                            consequatur facilis voluptas! Repellat, exercitationem unde! Cupiditate quibusdam labore vel
                            voluptatum facere porro eum adipisci odio aspernatur!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam minus praesentium veritatis,
                            suscipit ea, sapiente harum distinctio laudantium sed minima rem obcaecati maxime! Perferendis
                            fugiat consequatur qui cumque libero.</p>
                    </section>
                    <section className="testimonios">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita"> Simplemente periodismo extraordinario </span>
                            <span className="autor"> Joaquin Ortiz de Ocampo</span>
                        </div>
                    </section>

                </div>







            </main>
        












        </div>
    )

}
export default HomePage;