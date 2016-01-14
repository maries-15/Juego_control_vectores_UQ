using UnityEngine;
using System.Collections;

public class Spawner : MonoBehaviour
{
	public float spawnTime = 0;		// The amount of time between each spawn.
	public float spawnInicio ;		// The amount of time before spawning starts.
	public GameObject[] enemies;	// Array of enemy prefabs.
	private vidas svidas;	
	public GameObject Valdes;

	Component script;
	private int c = 1;
	float l = 3f;
	public static int oleada1 = 11;
	public static int oleada2 = 21;
	public static int oleada3 = 31 ;
	public GameObject controlfinal;
	private controlSpawner controlSpawner;


	void Start ()
	{ 
		svidas = Valdes.GetComponent<vidas> ();
		controlSpawner = controlfinal.GetComponent<controlSpawner> ();
		spawnTime = Random.Range (2.3f, l);
		//print (spawnTime);
		// Start calling the Spawn function repeatedly after a delay .
		InvokeRepeating("Spawn", spawnInicio, spawnTime);


	}

	void Update () {

				
	}
	void Spawn ()
	{

			// Instantiate a random enemy.
			int enemyIndex = Random.Range(0, enemies.Length);
			
			Instantiate(enemies[enemyIndex], transform.position, transform.rotation);
			
			// Play the spawning effect from all of the particle systems.
			foreach(ParticleSystem p in GetComponentsInChildren<ParticleSystem>())
			{
				p.Play();
			}
			c++;

		verificarEnemigos ();

	}

	public void verificarEnemigos()
	{
		if (c > oleada1) {
			CancelInvoke ();
			l=2.3f;
			spawnTime = Random.Range (1.5f, l);
			print (spawnTime);
			InvokeRepeating("Spawn", spawnInicio, spawnTime);

		}
		if (c > oleada2) {
			CancelInvoke ();
			l=1.5f;
			spawnTime = Random.Range (0.5f, l);
			print (spawnTime);
			InvokeRepeating("Spawn", spawnInicio, spawnTime);
		}
		if (c == oleada3) {
			CancelInvoke();
			controlSpawner.terminados +=1;
			c++;
		}

	}
}
