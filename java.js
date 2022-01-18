function CalcularEdad(){

    alert("Este es un programa para verificar si cumples los requisitos para entrar a Generation, si deseas continuar da click en Aceptar")

    var nombre = prompt("Cúal es tu nombre?");
    var edad = prompt("Cúal es tu edad?")

    var resultado = ("Bienvenido " +nombre+ ", veo que tienes: " +edad+ " años de edad");

    alert(resultado); 
}

CalcularEdad();