#pragma strict

import UnityEngine.SceneManagement;

function Start () {
	serialization.Save();
}

function OnMouseDown()
{
	SceneManager.LoadScene("cambioImagen");
}

function SalirJuego()
{
	Application.Quit();
}