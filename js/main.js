class PRODUCTO {
  constructor(bebidas) {
    this.id = bebidas.id;
    this.bebida = bebidas.bebida;
    this.nombre = bebidas.nombre;
    this.marca = bebidas.marca;
    this.ml = bebidas.ml;
    this.precioUnitario = bebidas.precioUnitario;
    this.precioCaja = bebidas.precioCaja * 6;
    this.img = bebidas.img;
    this.vendido = false;
    this.cantidadUnitaria = 1;
    this.cantidadCaja = 1;
  }
  addCaja() {
    this.cantidadCaja ++;
  }
  addUnitaria() {
    this.cantidadUnitaria ++;
  }
  getTotalU() {
    return (this.cantidadUnitaria * this.precioUnitario)
  }
  getTotalC() {
    return (this.cantidadCaja * this.precioCaja)
  }
}
// eventos load y ready
window.addEventListener('load', () => {
  $('.header').html(` <button class="btnCarrito openbtn float-right" >
                        <img id='icon' src="images/shopping-cart.svg" >
                      </button>`)
  $('.header').append(` <div class="animacion">
                        </div>`)

  carritoToggle();
  guardarCarrito();

})
$(document).ready(() => {
  spinner();
  limpiarCarrito();
  comprar()
  // muestro productos con AJAX
  $.getJSON("data/productos.json", function(datos, status){
    mostrarProductos(datos);
    eventosForm(datos);
  })

})
