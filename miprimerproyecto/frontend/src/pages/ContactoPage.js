import React from "react";
const ContactoPage = (props) => {
    return (
        <div>
            <div className="contenedor">
                <h2>Contacto Rapido </h2>
                <form className="formulario">
                    <p> 
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""   />
                    </p>
                    <p> 
                        <label for="email">Email</label>
                        <input type="text" name=""   />
                    </p>
                    <p> 
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""   />
                    </p>
                    <p> 
                        <label for="mensaje"> Mensaje </label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicacion</h2>
                <p> Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 4470038321</li>
                    <li>Email: NoticiasReales@gmail.com</li>
                    <li>Facebook: NoticiasRealesHoy</li>
                    <li>Twitter: NoticiasReales.gg</li>
                </ul>
            </div>



        </div>
    )

}
export default ContactoPage;