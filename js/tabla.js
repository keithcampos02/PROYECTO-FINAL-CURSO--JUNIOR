export function Mostrartabla() {
    let table = document.getElementById ("Tabla").innerHTML = Creartabla ()
}


function Creartabla() {
    let html = `
    
    <section class="tabla ">
          <div class="container">

            <!-- b4-form-inline
          b4-form-group -->
            <h2>Tabla Datos</h2>
            <table class="table table-striped table-inverse table-responsive container col-6 text-white" >


            <thead class="thead-inverse">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>asas</td>
                  <td>asas</td>
                 
                </tr>
                 
              </tbody>



            
            </table>
          </div>  
    </section>
    
    
    `

    return html
}