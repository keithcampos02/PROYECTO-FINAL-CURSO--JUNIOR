
import { ObtenerDatosApiRick } from "./servicios_config.js"

export async function MostrarCard() {
    const Datos = await ObtenerDatosApiRick()

    if (Datos) {

        let navbar = document.getElementById("Noticias").innerHTML = CrearNavbar(Datos);
       
    }

    //




}


const CrearTarjetaNoticias=(Datos)=>  {

  let html= ""


  Datos.forEach(element => {
      html += `

   <section class=" banner  col-lg-4 ">
        <div class="card h-100">
          <img src="${element.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.id}</p>
            <a href="#" class="btn btn-primary">Más información <i class="fas fa-angle-double-right"></i></a>
          </div>
        </div>
      </section>

  `
  });

   

  return html
}