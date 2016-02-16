using UnityEngine;
using System.Collections;

public class Spawner : MonoBehaviour
{
	private float spawnTime = 3f;		// The amount of time between each spawn.
	private float spawnInicio = 5f;	// The amount of time before spawning starts.
	public GameObject enemie;	// Array of enemy prefabs.
//	private vidas svidas;	
	public GameObject Valdes;


	//Component script;
	private int c = 1;
	float l = 3f;
	public static int oleada1 = 11;
	public static int oleada2 = 21;
	public static int oleada3 = 31 ;
	public GameObject controlfinal;
	private controlSpawner controlSpawner;
	private ParticleSystem oleadas;


	void Start ()
	{ 
		Time.timeScale =  1f;
		controlSpawner = controlfinal.GetComponent<controlSpawner> ();
		oleadas = GetComponentInChildren<ParticleSystem> ();
		Invoke("Spawn", Random.Range (0.5f, 4f));



	}

	void Update () {

				
	}

	void Spawn()
	{
		if (c < 31) {
			float randTime = Random.Range (spawnInicio, spawnTime);

			Instantiate(enemie, transform.position, transform.rotation);

//			// Play the spawning effect from all of the particle systems.
//			foreach(ParticleSystem p in GetComponentsInChildren<ParticleSystem>())
//			{
//				p.Play();
//
//			}
			oleadas.Play();
			c++;
			verificarEnemigos ();
			Invoke("Spawn", randTime);
		}

	}

//	void Spawn ()
//	{
//
//			// Instantiate a random enemy.
//			Instantiate(enemie, transform.position, transform.rotation);
//			
//
//			
//			// Play the spawning effect from all of the particle systems.
//			foreach(ParticleSystem p in GetComponentsInChildren<ParticleSystem>())
//			{
//				p.Play();
//				print ("Entro");
//			}
//			c++;
//
//		verificarEnemigos ();
//
//	}

	public void verificarEnemigos()
	{

		if (c == oleada1) {
			

			spawnTime = 4f;
			spawnInicio = 2f;
			oleadas.gravityModifier = 0.3f;


		}
		if (c == oleada2) {
			spawnTime = 2f;
			spawnInicio = 1f;
			oleadas.gravityModifier = 0.5f;
		}
		if (c == oleada3) {
			spawnTime = 1f;
			spawnInicio = 0.3f;
			oleadas.gravityModifier = 0.7f;
		}

	}
}
