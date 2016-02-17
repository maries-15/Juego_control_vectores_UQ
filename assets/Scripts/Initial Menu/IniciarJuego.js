#pragma strict

import UnityEngine.SceneManagement;

function Start () {
	serialization.Save();
}

function OnMouseDown()
{
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
function SalirJuego()
{
	Application.Quit();
}