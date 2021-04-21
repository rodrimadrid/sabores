//sumar prpoducto
function sumarU(){
$('.plusU').click((e)=>{
  let sumar = seleccionUnitario.find(producto => producto.id == e.target.id);
  sumar.cantidadUnitaria ++;
  mostrarSeleccionU();
  precioFinal()
})
}
//sumar prpoducto
function sumarC(){
$('.plusC').click((e)=>{
  let sumar = seleccionCaja.find(producto => producto.id == e.target.id);
  sumar.cantidadCaja ++;
  mostrarSeleccionC();
  precioFinal()
})
}
//eliminar producto del carrito
function eliminarU(){
  $('.deleteU').click((e) => {
    console.log(e.target.id)
    var removeU = seleccionUnitario.find(producto => producto.id == e.target.id);
    const indexU = seleccionUnitario.indexOf(removeU)
    console.log(indexU)
    if (removeU.cantidadUnitaria > 1) {
      removeU.cantidadUnitaria--;
      mostrarSeleccionU();
      precioFinal()
    } else {
      seleccionUnitario = seleccionUnitario.filter( (i)=> (i !== removeU) );
      mostrarSeleccionU();
      precioFinal()
    }
  })
}
//evento para eliminar producto del carrito2
function eliminarC(){
  $('.deleteC').click((e) => {
    e.preventDefault();
    var removeC = seleccionCaja.find(producto => producto.id == e.target.id);
    let indexC = seleccionCaja.indexOf(removeC);
    console.log(indexC);
    if (removeC.cantidadCaja == 1) {
      seleccionCaja = seleccionCaja.filter( (i)=> (i !== removeC) );
      console.log(seleccionCaja)
      mostrarSeleccionC();
      precioFinal()
    } else {
      removeC.cantidadCaja--;
      mostrarSeleccionC();
      precioFinal()
    }
  })
}
//boton para resetear carritos
function limpiarCarrito() {
  return $(".cleanbtn").click((e) => {
    $("div.carrito").empty();
    $(".precio-total").empty()
    seleccionUnitario = [];
    seleccionCaja = [];
    localStorage.clear()
  })
}
//Funcion para seleccionar productos por unidad
function btnUnidad(listado) {
  return $(".btn-unidad").click((e) => {
    let producto = seleccionUnitario.find(producto => producto.id == e.target.id);
    let seleccionado = listado.find(producto => producto.id == e.target.id);
    if (producto != undefined) {
      producto.cantidadUnitaria++;
    } else {
      let newProducto = new PRODUCTO(seleccionado);
      seleccionUnitario.push(newProducto);
      newProducto.cantidadCaja = 0;
    }
    $('.animacion').empty();
    mostrarSeleccionU();
    console.log(seleccionUnitario)

    $('.animacion').append(`
                              <img style='height: 120px; width: 100px'src="${seleccionado.img}" alt="product image">
                                <div class="producto__notif">
                                 <h6>${seleccionado.nombre}</h6><br>
                                 <p>precio: $${seleccionado.precioUnitario}<p>
                                </div>`)

    $('.animacion').animate({
        right: '15px'
      }, "slow")
      .delay(1500)
      .animate({
        right: '-45%'
      }, "slow")
  })
}
//funcion para seleccionar productos por caja
function btnCaja(listado) {
  return $(".btn-caja").click((e) => {
    let producto = seleccionCaja.find(producto => producto.id == e.target.id);
    let seleccionado = listado.find(producto => producto.id == e.target.id);
    if (producto != undefined) {
      producto.cantidadCaja++;
    } else {
      let newProducto = new PRODUCTO(seleccionado);
      seleccionCaja.push(newProducto);
      newProducto.cantidadUnitaria = 0;
    }
    $('.animacion').empty();
    mostrarSeleccionC();
    console.log(seleccionCaja)
    $('.animacion').append(`
                              <img style='height: 120px; width: 100px'src="${seleccionado.img}" alt="product image">
                                <div class="producto__notif">
                                 <h6>${seleccionado.nombre}</h6><br>
                                 <p>precio: $${seleccionado.precioCaja * 6} <p>
                                </div>`)
    $('.animacion').animate({
        right: '15px'
      }, "slow")
      .delay(1500)
      .animate({
        right: '-45%'
      }, "slow")
  })
}
//suma total de compra
function precioFinal() {

  $(".precio-total").empty()
  $(".precio-total").append(`
                                <span>Precio total: $${(sumaFinalU() + sumaFinalC()).toFixed(2)} </span>
                              `)



}

function sumaFinalU() {
  let precioFinalU = 0
  for (var precio of seleccionUnitario) {
    let precioTotal = precio.cantidadUnitaria * precio.precioUnitario
    precioFinalU += precioTotal
  }
  return precioFinalU
}

function sumaFinalC() {
  let precioFinalC = 0
  for (var precio of seleccionCaja) {
    let precioTotal = precio.cantidadCaja * precio.precioCaja
    precioFinalC += precioTotal
  }
  return precioFinalC
}
