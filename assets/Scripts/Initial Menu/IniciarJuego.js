#pragma strict

import UnityEngine.SceneManagement;

function Start () {
	serialization.Save();
}

function OnMouseDown()
{

	cargar();

}

function SalirJuego()
{
	
	Application.Quit();
}

function cargar()
{

	yield WaitForSeconds (1f);
	if(serialization.savedGame.typeInit.Equals("Init")){
		SceneManager.LoadScene("level"+serialization.savedGame.currentLevel);

	}
	else if(serialization.savedGame.typeInit.Equals("Menu")){
		SceneManager.LoadScene("Menu");
	}
	else if(serialization.savedGame.typeInit.Equals("CI")){
		SceneManager.LoadScene("cambioImagen");
	}

}