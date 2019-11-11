class Carrito {


  //instancia de la clase
  constructor() {
    this.LS = new LocalStorage();
  }

  ShowLocalStorageCar() {

    let cursosLS = this.LS.getCoursesLocalStorage();

    //para cada valor dentro de courses vas a hacer la funcion....
    cursosLS.forEach(function (curso) {
      const row = document.createElement('tr');

      row.innerHTML = `
      <td><img src="${curso.imagen}" width=100></td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>
      <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
      </td>
      `
      listaCursos.appendChild(row);
    });

    console.log(cursosLS)

  }


  readDataCourse(curso, listaCursos) {
    const dataCourse = {
      //propiedad ( caracteristica del objeto)
      //para asignar un valor a una propiedad no se usa = se usa :
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').textContent, // textContent sirve para traer valores que no son input
      precio: curso.querySelector('.precio span').textContent,
      id: curso.querySelector('a').getAttribute('data-id')
    }

    console.log(dataCourse);

    this.addCourseCar(dataCourse, listaCursos);

  }

  addCourseCar(dataCourse, listaCursos) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td><img src="${dataCourse.imagen}" width=100></td>
    <td>${dataCourse.titulo}</td>
    <td>${dataCourse.precio}</td>
    <td>
    <a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</a>
    </td>
    `
    listaCursos.appendChild(row);
    this.LS.SaveCourseLocalStorage(dataCourse);


    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Se agrego curso',
      showConfirmButton: false,
      timer: 1500
    })
  }

  deleiteCourseCarrito(event) {
    event.preventDefault();
    let curso, cursoId;
    if (event.target.classList.contains('borrar-curso')) {
      curso = event.target.parentElement.parentElement;
      cursoId = curso.querySelector('a').getAttribute('data-id');
      // event.target.parentElement.parentElement.remove();
      this.LS.deleiteCourseLS(cursoId);
      curso.remove();
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Se elimino el curso',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }


  vaciarCarrito(listaCursos) {
    // Forma lenta
    // listaCursos.innerHTML="";

    // Forma Rapida

    while (listaCursos.firstChild) {
      listaCursos.removeChild(listaCursos.firstChild);
    }
    
    this.LS.vaciarLS();


    
  }

}