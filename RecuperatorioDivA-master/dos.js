/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let i;
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso = 0;
  let marcaLiquidoCaro;
  let liquidoCaro = 0;
  let marcaBarataSolidos;
  let precioBaratoSolidos = 0;
  let flagSolido = 0;
  let flagLiquido = 0;

  do{

    marca = prompt("por favor ingrese la marca del producto: ");
    while (marca == "" || !isNaN(marca)){

      marca = prompt("Nombre de marca inválido. Ingrese la marca del producto nuevamente: ");
    }
    precio = parseFloat(prompt("Ingrese el precio del producto: "));
    while(isNaN(precio) || precio < 0){

      precio = parseFloat(prompt("Esta ingresando un valor inválido. por favor reingrese precio: "));
    }
   peso = parseFloat(prompt("por favor ingrese el peso del producto (recuerde que debe ser en Kg): "));
    while(isNaN(peso) || peso < 0){

     peso = parseFloat(prompt("Error. por favor ingrese un peso válido: "));
    }
    tipo = prompt('por favor indique el tipo del producto: "s" para sólido o "l" para líquido): ');
    while(tipo != "s" && tipo != "l" ){

      tipo = prompt('Ingreso una opción inválida. por favor indique el tipo del producto: "s" para sólido o "l" para líquido): ');
    }
    
    if(tipo == "l"){
      
      //para el punto B
      if( flagLiquido == 0 || precio > liquidoCaro){
        liquidoCaro = precio;
        marcaLiquidoCaro = marca ;
        flagLiquido = 1;
      }
    }else{
      
      //Para el punto C
      if(flagSolido == 0 || precio < precioBaratoSolidos){
        precioBaratoSolidos = precio;
        marcaBarataSolidos = marca;
        flagSolido = 1;
      }
    }
    
    //Para el punto A
    acumuladorPeso += peso;

    i = prompt("desea ingresar otro articulo? (s/n): ");
    
  }

  while(i == "s"){

  }
  document.write(`el peso total de la compra fue de ${acumuladorPeso} kilos </br>`);
  if(flagLiquido == 0){
    document.write("no se ingresaron líquidos </br>");
  }else{
    document.write(`la marca del producto liquido mas caro es ${marcaLiquidoCaro} </br>`);
  }
  if(flagSolido == 0){
    document.write("no se ingresaron sólidos </br>");
  }else{
    document.write(`la marca del solido mas barato es de ${marcaBarataSolidos} </br>`);
  }

}
