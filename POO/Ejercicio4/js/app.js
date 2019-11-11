const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito')
const objectCar = new Carrito();


EventListener();

function EventListener() {
  cursos.addEventListener('click', GetCourse);
  carrito.addEventListener('click',DeleteCourse);
  vaciarCarrito.addEventListener('click',vaciarCarritoCursos)
  document.addEventListener('DOMContentLoaded',ShowCourseCar);
}

function ShowCourseCar(){
  objectCar.ShowLocalStorageCar();

}

function DeleteCourse(event){
  objectCar.deleiteCourseCarrito(event);
}

function GetCourse(event) {
  // console.log(event);
  //Sirve para eliminar los eventos por default en las etiquetas html
  event.preventDefault();
  //si el elemento objetivo en su lista de classes contiene agregar carrito 
  if (event.target.classList.contains('agregar-carrito')) {
    // console.log(event);

    let Courses = event.target.parentElement.parentElement;
    // console.log(Courses);
    let objectCar = new Carrito();
    //Se convarte por un parametro
    objectCar.readDataCourse(Courses, listaCursos);

  }
}


function vaciarCarritoCursos(){
  objectCar.vaciarCarrito(listaCursos)
}



