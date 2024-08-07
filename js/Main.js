import { ObtenerDatosApiRick } from "./servicios_config.js"
import { MostrarHTML } from "/js/global.js"
import {ObtenerDatosDeConfiguracion} from "/js/servicios_config.js"
import { MostrarCard } from "/js/card.js"
///Componentes ->
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
    ObtenerDatosDeConfiguracion()
    ObtenerDatosApiRick()
    MostrarCard()
})

