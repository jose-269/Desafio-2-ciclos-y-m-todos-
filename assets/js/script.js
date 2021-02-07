const botton = document.getElementById("button").addEventListener("click", validar = () =>{
    
    
    let rut = document.getElementById("rut").value;
    let nombre = document.getElementById("name").value;
    let apellidos = document.getElementById("last-name").value;
    let edad = document.getElementById("age").value;
    let eMail = document.getElementById("mail").value;
    let fecha = document.getElementById("date").value;
    let specialities = document.getElementById("specialities");
    let v_error = "0";
    const hora = document.getElementById("hora")
    
    
const validarRut = () => {
    let patronRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
    // let validarPatron = rut.match(patronRut)
    // alert(rut.match(patronRut));
    if (!(patronRut.test(rut) )) {
        alert("Debe ingresar un rut válido")
        v_error = "1";
        return false
    }
    
}
validarRut()

const validarNombre = () => {
    let patronNombre = /[a-zA-Z]/gim;

    if (!patronNombre.test(nombre) || nombre == null || /[0-9]/gim.test(nombre)){
        alert("El campo nombre debe ser solo letras")
        v_error = "1";
        return false
    }
    
}
validarNombre()

const validarApellidos = () => {
    let patronApellido =  /[a-zA-Z]/gim;

    if (!patronApellido.test(apellidos) || /[0-9]/gim.test(apellidos)){
        alert("El campo apellido debe ser válido")
        v_error = "1";
        return false
    }
}
validarApellidos()

const validarEdad = () => {
    const patronEdad = /[0-9]/gim;

    if(!patronEdad.test(edad) || edad == null) {
        alert("Debe ingresar su edad")
        v_error = "1";
    return false  
    }
}
validarEdad()

const validarMail = () => {
    const patronMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!(patronMail.test(eMail))) {
        alert("Debe ingresar un mail válido");
        v_error = "1";
        return false
    }
}
validarMail()

const selectEspecialidad = () => {
    let especialidad = specialities.value;  
   // alert(especialidad)
    return false
}
selectEspecialidad()

const validarFecha = () => {
    const patronFecha = /^\d{2}\/\d{2}\/\d{4}$/gim;

    if (!(patronFecha.test(fecha))) {
        alert("La fecha ingresada no es válida");
        v_error = "1";
        return false
    }
}
validarFecha()
const selectHora = () => {
    let horario = hora.value;
    // alert(horario);
    return false
}
selectHora()


const msjeFinal = () => {


    if (v_error == "0"){
    document.getElementById("mensaje").innerHTML = `${"Estimado(a)"} ${nombre} ${apellidos}, 
    ${" su hora para"} ${specialities.value} ${"ha sido reservada para el día"} ${fecha}
    ${"a las,"} ${hora.value}. ${"Además, se le envió un mensaje a su correo"} ${eMail}
    ${"con el detalle de su cita"} <br> ${"Gracias por preferirnos."}`;
    return false
} 
}

msjeFinal()
return false

})







