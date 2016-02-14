#pragma strict

private var textura:GUITexture;
 //private var init:Color;

var timeLeft = 3;
var state = true;

function Start () {
	textura = this.GetComponent(GUITexture);
	//init = textura.color;
	
}

function Update () {
	timeLeft -= Time.deltaTime;
	//Debug.Log("Entro"+timeLeft);
	
		if(state == true)
		{
		Debug.Log("Entro");
			textura.color.r =  175;
			textura.color.g = 175;
			textura.color.b =  175;
			textura.color.a = 175;
			state = false;
		}
		if(state == false)
		{
			textura.color.r =  128;
			textura.color.g = 128;
			textura.color.b =  128;
			textura.color.a = 128;
		}
		
		timeLeft = 5;
	if(timeLeft == 0)
	{
		
	}
		
}