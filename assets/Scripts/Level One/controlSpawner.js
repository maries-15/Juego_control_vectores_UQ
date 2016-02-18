#pragma strict

import System.Collections;
import UnityEngine;

private var fin;


var Valdes : GameObject  ;
var terminados = 0;

private  var spawnTime : float = 3f;		// The amount of time between each spawn.
private var spawnInicio : float  = 5f;	// The amount of time before spawning starts.

public  var lineOne : ParticleSystem;
public  var lineTwo : ParticleSystem;
public 	var lineThree : ParticleSystem;

public var enemie : GameObject;	

private var  oleada = 20;

private var conEnemies = 0;

private var herramienta;

function Start () {


		serialization.Save();
		loadLevel();
		StartCoroutine (Spawn (lineOne));
		yield WaitForSeconds (Random.Range (spawnInicio, spawnTime));
		StartCoroutine (Spawn (lineTwo));
		yield WaitForSeconds (Random.Range (spawnInicio, spawnTime));
		StartCoroutine (Spawn (lineThree));


}

function Update () {

	if (terminados == 3) {
			print ("Ganaste ");
			terminados++;
			serialization.savedGame.level1 = {"subLevel":100, "puntos":clickAndGo.puntos, "Sprite": vidas.actualLife};
			serialization.SaveData(2,15,"CI");
			SceneManager.LoadScene("cambioImagen");
		
		}
}

function Spawn( line : ParticleSystem ) : IEnumerator
{
		if (conEnemies < 101) {


			var randTime = Random.Range (spawnInicio, spawnTime);
			yield WaitForSeconds (randTime);
			Instantiate (enemie, line.transform.position, transform.rotation);
			line.Play ();
			conEnemies++;
			verificarEnemigos ();
			StartCoroutine (Spawn (line));

		
		} 
		else
			terminados++;

}

 function verificarEnemigos()
{

	if (conEnemies == oleada) {

		oleada += 25;
		spawnTime = 4f;
		spawnInicio = 2f;
		gravityModifier (0.3f);
		serialization.savedGame.level1 = {"subLevel":oleada, "puntos":clickAndGo.puntos,"Sprite" : vidas.actualLife};
		serialization.SaveData(null, null, null);
		print("Grabo");
		//Time.timeScale = 0f;



	}
	if (conEnemies == oleada) {
		oleada += 25;
		spawnTime = 2f;
		spawnInicio = 1f;
		gravityModifier (0.3f);
		serialization.savedGame.level1 = {"subLevel":oleada, "puntos":clickAndGo.puntos,"Sprite" : vidas.actualLife};
		serialization.SaveData(null, null, null);
		print("Grabo");

	}
	if (conEnemies == oleada) {
		oleada += 30;
		spawnTime = 1f;
		spawnInicio = 0.3f;
		gravityModifier (0.3f);
		serialization.savedGame.level1 = {"subLevel":oleada, "puntos":clickAndGo.puntos, "Sprite" : vidas.actualLife};
		serialization.SaveData(null, null, null);
	}

}

function gravityModifier(gravity : float)
{
	lineOne.gravityModifier += gravity;
	lineTwo.gravityModifier += gravity;
	lineThree.gravityModifier += gravity;
}

 function loadLevel(){
 	
 	oleada = serialization.savedGame.level1["subLevel"];
	clickAndGo.puntos = serialization.savedGame.level1["puntos"];

	vidas.actualLife = serialization.savedGame.level1["Sprite"] ;


 }

