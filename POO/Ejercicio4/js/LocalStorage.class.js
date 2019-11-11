class LocalStorage {

    constructor() {}

    SaveCourseLocalStorage(curso) {

        let ArrayCourses = [];
        ArrayCourses = this.getCoursesLocalStorage();
        ArrayCourses.push(curso);

        //localStorage solamente acepta stringe   se convierte de objeto a String con JSON.stringify
        localStorage.setItem('courses', JSON.stringify(ArrayCourses))
    }

    getCoursesLocalStorage() {
        let cursosLS;

        if (localStorage.getItem('courses') === null) {
            cursosLS = [];
        } else {
            cursosLS = JSON.parse(localStorage.getItem('courses'))
        }
        return cursosLS;
    }

    deleiteCourseLS(cursoid) {
        let cursosLS;
        cursosLS = this.getCoursesLocalStorage();
        cursosLS.forEach(function(cursoLS, index) {
            if (cursoLS.id === cursoid) {
                //corta el vector, index desde donde estoy y 11 hasta donde quiero cortar
                cursosLS.splice(index, 1)
            }
        })

        // va a remplazar el valor de courses
        localStorage.setItem('courses', JSON.stringify(cursosLS))
    }

    vaciarLS() {

        if (this.getCoursesLocalStorage().length !== 0) {

            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Se vacio Carrito',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                position: 'top-end',
                type: 'error',
                title: 'Carrito vacio',
                showConfirmButton: false,
                timer: 1500
            })
        }

        localStorage.clear();
    }



}