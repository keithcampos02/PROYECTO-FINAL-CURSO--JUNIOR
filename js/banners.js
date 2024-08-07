export function MostarBanners(params) {
    

    let Banner1 = document.getElementById("Banner1").innerHTML= CrearBanner1();
    let Banner2 = document.getElementById("Banner2").innerHTML= CrearBanner2();
}



function CrearBanner1() {
    let html = `
    <section class="banner banner-tarjetas-uno " >
          <div class="container">
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
              veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
              inventore
              consequatur fugit.</p>
            <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
        </section>
    
    `
}

function CrearBanner2() {
    let html = `
    <section class="banner banner-tarjetas-dos " >
          <div class="container">
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
              veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
              inventore
              consequatur fugit.</p>
            <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
        </section>
    
    `
}