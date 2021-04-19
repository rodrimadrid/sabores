let seleccionUnitario = [];
let seleccionCaja = [];
//provincias API
const APIPROVINCIAS = "https://apis.datos.gob.ar/georef/api/provincias"
//funcion para mostrar productos
function mostrarProductos(listado) {
  $("#contenedor").empty();
  $("#contenedor").addClass('card-columns')
  for (let dato of listado) {
    crearProducto(dato);
  }
  btnUnidad(listado);
  btnCaja(listado);
}
//funcion para mostrar productos seleccionados
function mostrarSeleccionU() {
  $('#carrito').empty();

  for (var dato of seleccionUnitario) {
    $("#carrito").append(`<div id='producto${dato.id}' class='carrito__producto'>
                            <h4>${dato.nombre}</h4>
                            <div class="producto__tabla">
                              <img style='height: 100px; width: 60px'src="${dato.img}" alt="product image">
                              <h6  class="carrito-h6">Cantidad: ${dato.cantidadUnitaria}<br><br>precio: $${parseInt((dato.cantidadUnitaria * dato.precioUnitario).toFixed(2))} </h6>
                              <a href="javascript:void(0)" id='${dato.id}' class='delete'>&times;</a>
                             </div>
                          </div>`)
  }
  localStorage.setItem('carritoU', JSON.stringify(seleccionUnitario));


  $('.delete').click((e) => { //evento para eliminar producto del carrito

    var removeU = seleccionUnitario.find(producto => producto.id == e.target.id);
    index = removeU.id
    if (removeU.cantidadUnitaria > 1) {
      removeU.cantidadUnitaria--;
      mostrarSeleccionU();
      precioFinal()
    } else {
      seleccionUnitario = seleccionUnitario.filter(function(i) {
        return i !== removeU
      });
      console.log(seleccionUnitario)
      $(`#producto${index}`).remove();
      precioFinal()
    }
  })
  precioFinal();
}

function mostrarSeleccionC() {
  $('#carrito2').empty();
  for (var dato of seleccionCaja) {
    $("#carrito2").append(`<div id='producto${dato.id}' class='carrito__producto'>
                            <h4>${dato.nombre}</h4>
                            <div class="producto__tabla">
                              <img style='height: 100px; width: 60px'src="${dato.img}" alt="product image">
                              <h6  class="carrito-h6">Cantidad: ${dato.cantidadCaja}<br><br>precio: $${parseInt((dato.cantidadCaja * dato.precioCaja).toFixed(2))} </h6>
                              <a href="javascript:void(0)" id='${dato.id}' class='delete'>&times;</a>
                             </div>
                          </div>`)
  }
  localStorage.setItem('carritoC', JSON.stringify(seleccionCaja));

  $('.delete').click((e) => { //evento para eliminar producto del carrito
    e.preventDefault();
    var removeC = seleccionCaja.find(producto => producto.id == e.target.id);
    index = removeC.id
    if (removeC.cantidadCaja > 1) {
      removeC.cantidadCaja--;
      mostrarSeleccionC();
      precioFinal()
    } else {
      seleccionCaja = seleccionCaja.filter(function(i) {
        return i !== removeC
      });
      console.log(seleccionCaja)
      $(`#producto${index}`).remove();
      precioFinal()
    }
  })
  precioFinal()
}
//funcion para crear productos
function crearProducto(dato) {
  $("#contenedor").append(
    `<div class="card" >
                            <img class="card-img-top" style="width: 100%; height: 32.6em" src="${dato.img}" alt="Card image">
                            <div class="card-body">
                              <h4 class="card-title">${dato.marca}</h4>
                              <p class="card-text"><b>${dato.nombre} - ${dato.ml}ml</b> <br>
                              Unidad $${dato.precioUnitario} <br>Unidad x Caja $${dato.precioCaja}</p>
                              <button id='${dato.id}' class="btn btn-primary btn-unidad">Agregar Unidad</button>
                              <button id='${dato.id}' class="btn btn-primary btn-caja">Agregar caja</button>
                            </div>
                          </div>`
  )
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
// boton para realizar compra
function comprar(){
  $('#btnCompra').click((e)=>{
    $('#contenedor').empty()
    $('#contenedor').css('column-count', '1')
    if ((seleccionUnitario.length == 0) && (seleccionCaja.length == 0)) {
      $("#contenedor").append(`
                              <div class='not-found'>
                                <h2 style='color: black'>NO AGREGASTE PRODUCTOS</h2>
                              </div>`)
    }else {
    $("#contenedor").append(`
                              <form id='formCompra'>
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label for="inputNombre">Nombre</label>
                                  <input type="text" class="form-control" id="inputNombre">
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="inputApellido">Apellido</label>
                                  <input type="text" class="form-control" id="inputApellido">
                                </div>
                                </div>
                                <div class="form-group">
                                  <label for="email">E-mail</label>
                                  <input type="email" class="form-control" id="email" placeholder="Juankpo@ejemplo.com">
                                </div>
                                <div class="form-group">
                                  <label for="inputDireccion">Direccion</label>
                                  <input type="text" class="form-control" id="inputADireccion" placeholder="Calle, n°, Entre calles ">
                                </div>
                                <div class="form-row">
                                  <div class="form-group col-md-6">
                                    <label for="selectCiudad">Ciudad</label>
                                    <select id="selectCiudad" class="form-control">
                                      <option selected>Elegi tu Ciudad</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                  <div class="form-group col-md-6">
                                    <label for="selectMuni">Municipio</label>
                                    <select id="selectMuni" class="form-control">
                                      <option selected>Elegi tu Municipio</option>
                                      <option>...</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                      Quiero recibir las promociones
                                    </label>
                                  </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Enviar</button>
                              </form>
                            `)
                            $.get(APIPROVINCIAS, function(datos){
                              $('#selectCiudad').empty()
                              for (const provincia of datos.provincias) {
                                $('#selectCiudad').append(`<option value='${provincia.id}'>${provincia.nombre}</option>`)
                              }
                            })
                            $('#selectCiudad').change((e)=>{
                              var apiMuni =  `https://apis.datos.gob.ar/georef/api/municipios?provincia=${$(e.target).val()}&campos=id,nombre&max=100`
                              $.get(apiMuni, function(datos){
                                $('#selectMuni').empty()
                                for (const municipio of datos.municipios) {
                                  $('#selectMuni').append(`<option value='${municipio.id}'>${municipio.nombre}</option>`)
                                }
                              })
                            })
                            scroll()
      }
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
$('buybtn').click((e) => {
  sumaFinal()
})
// spinner
function spinner() {
  $(".header").html(`<div class='spinner-border' role='status>'
                      <span class='sr-only>Loading...</span>'
                      </div>`);
}
// sidebar // CARRITO
function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}



function animar() { //animacion del logo
  $("img.rounded-circle").toggleClass('sabores');
}
//FORMULARIO DE BUSQUEDA
function eventosForm(listado) {
  $(".myform").submit((e) => {
    e.preventDefault();
    let busqueda = $(e.target).children().children('input.first').val()
    console.log(busqueda);
    let encontrados = listado.filter(producto => (producto.marca.toLowerCase().includes(busqueda.toLowerCase())) || (producto.nombre.toLowerCase().includes(busqueda.toLowerCase())))
    console.log(encontrados)
    console.log(encontrados.length)
    if (encontrados.length == 0) {
      $('#contenedor').empty();
      $("#contenedor").removeClass('card-columns')
      $('#contenedor').css('column-count', '0')
      $('#contenedor').append(`
                                <div class='not-found'>
                                  <h2 style='color: black'>NO ENCONTRAMOS TU PRODUCTO</h2>
                                </div>
                              `)
    } else {
      mostrarProductos(encontrados);

    }
    animar();
  })
  $(":reset").click((e) => {
    mostrarProductos(listado)
    animar();
  })
  //filtrado por selected
  $('.filtrar').change((e) => {
    animar()
    let option = $(e.target).val();
    console.log(option)

    let filtrados = listado.filter(producto => (producto.marca == option))
    mostrarProductos(filtrados)
  })

}

//localStorage
function guardarCarrito() {
  if (localStorage.getItem('carritoU')) {
    seleccionUnitario = JSON.parse(localStorage.getItem('carritoU'));
    mostrarSeleccionU();
  }
  if (localStorage.getItem('carritoC')) {
    seleccionCaja = JSON.parse(localStorage.getItem('carritoC'));
    mostrarSeleccionC();
  }
}
//Carrito
function carritoToggle() {
  $('.btnCarrito').click((e) => {
    var carritoWidth = $('#mySidebar').css("width");
    if (carritoWidth == '0px') {
      openNav();
      $('#contenedor').css('column-count', '2')
    } else {
      closeNav();
      $('#contenedor').css('column-count', '3')
      $(":reset").trigger('click')
    }
  })
}
//scroll animado
function scroll(){
return    $('html, body').animate({
            scrollTop: $('#formCompra').offset().top}, 2000);
}
