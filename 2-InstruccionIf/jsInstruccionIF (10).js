function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor((Math.random()*10)+1);

	if(nota >=9)
	{
		alert("excelente" + nota);
	}
	else
	{
		if(nota >=4)
		{
			alert("aprobo" + nota);
		}
		else
		{
			alert("la proxima sera" + nota);
		}
	}
	
	


}//FIN DE LA FUNCIÓN