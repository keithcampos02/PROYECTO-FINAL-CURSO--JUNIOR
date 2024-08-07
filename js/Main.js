import { MostrarHTML } from "/js/global.js"
import {ObtenerDatosDeConfiguracion} from "/js/servicios_config"
///Componentes ->
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
    ObtenerDatosDeConfiguracion()
})

