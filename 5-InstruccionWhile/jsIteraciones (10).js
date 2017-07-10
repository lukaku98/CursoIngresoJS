function Mostrar()
{

	var numeros;
	var respuesta="si";
    var acumuladorneg=0;
	var acumuladorpos=0;
	var cantidadpos=0;
	var cantidadneg=0;

	while(respuesta=="si"||respuesta=="SI")
	{
		numero=parseInt(prompt("ingrese un numero"));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("error,ingrese un numero"));
		}
		if(numero>0)
		{
			acumuladorneg= acumuladorneg + numero;
		}
		else if(numero<0)
		{
			acumuladorpos=acumuladorpos + numero
		}
		else
		{
			
		}
	}




}//FIN DE LA FUNCIÓN