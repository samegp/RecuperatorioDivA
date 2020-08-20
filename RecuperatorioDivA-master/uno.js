/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorHombre = 0;
	let contadorMujer = 0;
	let acumuladorEdad = 0;
	let promedioEdad;
	let mayorpeso;

	// Ciclo de 5 y Validaciones
	for (let i = 0; i < 5; i++){

		nombre = prompt("por favor ingrese un nombre: ");
		while (nombre == "" || !isNaN(nombre)){

			nombre = prompt("Nombre incorrecto. Vuelva a ingresar nombre: ");
		}

		peso = parseInt(prompt("por favor ingrese peso: "));
		while(isNaN(peso) || peso <= 2){

			peso = (prompt("Peso inválido. Por favor reingrese peso: "));
		}

		sexo = prompt("ingrese sexo: ");
		while(sexo != "m" && sexo != "f"){

			sexo = prompt("Sexo inválido. Por favor reingrese nuevamente: ")
		}

		edad = parseInt(prompt("Ingrese edad: "));
		while(edad <= 0 || edad > 120 || isNaN(edad)){

			edad = parseInt(prompt("Error al ingresar edad. Reingrese edad: "));
		}

		// para el punto A
		if(sexo == "f"){
			contadorMujer++;
		}
		else{
			// para el punto C
			if( contadorHombre == 0 || peso > mayorpeso){
				mayorpeso = peso;
			}
			
			contadorHombre++;
		}

		//para el punto B
		acumuladorEdad += edad;
		
	}

	promedioEdad = acumuladorEdad / 5;

	document.write(`ingresaron ${contadorMujer} mujeres al hospital </br>`);
	document.write(`la edad promedio en total es de ${promedioEdad} </br>`);
	if(contadorHombre == 0){

		document.write("no se registro el ingreso de hombres al hospital.");

	}else{

		document.write(`el hombre con mayor peso ${mayorpeso}`);
	}

}
