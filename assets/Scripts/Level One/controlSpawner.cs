using UnityEngine;
using System.Collections;

public class controlSpawner : MonoBehaviour {

//	private bool ter1=false;
	private float fin;
	public GameObject Valdes ;
	private vidas svidas ;
	public int terminados = 0;

	private float spawnTime = 3f;		// The amount of time between each spawn.
	private float spawnInicio = 5f;	// The amount of time before spawning starts.

	public ParticleSystem lineOne;
	public ParticleSystem lineTwo;
	public ParticleSystem lineThree;

	public GameObject enemie;	

	public static int oleada1 = 40;
	public static int oleada2 = 30;
	public static int oleada3 = 100;

	private int conEnemies = 0;

	// Use this for initialization
	void Start () {
		
		svidas = Valdes.GetComponent("Vidas") as vidas;
		StartCoroutine (Spawn (lineOne));
		StartCoroutine (Spawn (lineTwo));
		StartCoroutine (Spawn (lineThree));

	}
	
	// Update is called once per frame
	void Update () {
		//ter1 == true && ter2==true && ter3 ==true
	if (terminados == 3) {
			print ("Ganaste ");
			terminados++;
		
		}


	}

	IEnumerator Spawn(ParticleSystem line)
	{
		if (conEnemies < 101) {


			float randTime = Random.Range (spawnInicio, spawnTime);
			yield return new WaitForSeconds (randTime);
			Instantiate (enemie, line.transform.position, transform.rotation);
			line.Play ();
			conEnemies++;
			verificarEnemigos ();
			StartCoroutine (Spawn (line));


		} else
			terminados++;

	}

	public void verificarEnemigos()
	{

		if (conEnemies == oleada1) {


			spawnTime = 4f;
			spawnInicio = 2f;
			gravityModifier (0.3f);
			//Time.timeScale = 0f;
			//serialization.SaveData(null, level, null, null);


		}
		if (conEnemies == oleada2) {
			spawnTime = 2f;
			spawnInicio = 1f;
			gravityModifier (0.3f);
			//serialization.SaveData(null, level, null, null);

		}
		if (conEnemies == oleada3) {
			spawnTime = 1f;
			spawnInicio = 0.3f;
			gravityModifier (0.3f);
			//serialization.SaveData(null, level, null, null);
		}

	}

	public void gravityModifier(float gravity)
	{
		lineOne.gravityModifier = gravity;
		lineTwo.gravityModifier = gravity;
		lineThree.gravityModifier = gravity;
	}

}
