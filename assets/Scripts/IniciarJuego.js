#pragma strict


function Start () {
	serialization.Save();
}

function OnMouseDown()
{
	Application.LoadLevel("cambioImagen");
}

function SalirJuego()
{
	Application.Quit();
}