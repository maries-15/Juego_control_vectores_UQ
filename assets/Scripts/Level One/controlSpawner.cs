using UnityEngine;
using System.Collections;

public class controlSpawner : MonoBehaviour {

	private bool ter1=false;
	private float fin;
	public GameObject Valdes;
	private vidas svidas;
	public int terminados = 0;

	// Use this for initialization
	void Start () {
		svidas = Valdes.GetComponent<vidas>();

	}
	
	// Update is called once per frame
	void Update () {
		//ter1 == true && ter2==true && ter3 ==true
	if (terminados == 3) {

			fin = Time.time + 5;
			terminados++;
		
		}

		if (terminados > 3) {
			float finalizar= fin - Time.time;
			if(finalizar<0)
			{
				svidas.Mostrar = true;
			}
		}
	}
}
