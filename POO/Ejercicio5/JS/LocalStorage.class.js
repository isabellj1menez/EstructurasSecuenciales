class LocalStorage {

    constructor() {}

    SaveContactLocalStorage(contacto) {

        let ArrayCourses = [];
        ArrayCourses = this.getCoursesLocalStorage();
        ArrayCourses.push(contacto);

        localStorage.setItem('courses', JSON.stringify(ArrayCourses))
    }
}