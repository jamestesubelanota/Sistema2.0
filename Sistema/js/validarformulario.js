function validar(){
var nombres, marca, accesorios, proveedor, telefono, cantidad, ubicacion, categoria, estado;
  nombres = document.getElementById('nombres').value;
  marca = document.getElementById('marca').value;
  accesorios = document.getElementById('accesorios').value;
  proveedor = document.getElementById('proveedor').value;
  telefono = document.getElementById('telefono').value;
  cantidad = document.getElementById('cantidad').value;
  ubicacion = document.getElementById('ubicacion').value;
  categoria = document.getElementById('categoria').value;
  estado = document.getElementById('estado').value;

  if(nombres === "" || marca ==="" || accesorios ==="" || telefono ==="" || cantidad ==="" || ubicacion ==="" || categoria ==="" || estado ===""){
    alert("Todos los campos son onligatorios!");
    return false;
  }
  else if()

}
