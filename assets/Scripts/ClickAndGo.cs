/**
 * ClickAndGoV3
 * Autor: Victor Purcallas Marchesi
 * Fecha:02/09/2013
 * Obtiene el Vector3 en donde se hace click con el raton
 * El objeto donde haces clic debe ser rigidbody
 * Se puede introducir desde el Inspector de Unity la posicion inicial del objeto en la escena
 *
 * Licencia:
 * This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.  See the
    GNU General Public License for more details. <http://www.gnu.org/licenses/&gt;.
 *
 **/
using UnityEngine;
using System.Collections;

public class ClickAndGo: MonoBehaviour {


	public Vector3 posicionInicial;  
	//Posicion inicial para introducir en el inspector.
	//Las variables publicas en unity pueden cambiarse desde el inspector
	bool inicio = true;
	private bool Mostrar = false;
	private bool pausa = false;
	private Transform camarapos;
	private int puntos;
	public GUIStyle MyStyle;
	public GUIStyle CONTINUARStyle;
	public GUIStyle REINICIARStyle;
	public GUIStyle SALIRStyle;


	//Solo estara True tras cargar la escena de la escenat
	
	void Start(){//Cuando inicia el programa
		posicionInicial = this.transform.position;
		camarapos = GameObject.FindGameObjectWithTag("MainCamera").transform;
		//Cambia la posicion a la posicion inicial
	}              
	void Update() {
		if (Input.GetMouseButton(0)) {

			RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
			
			if(hit.collider.tag != null)
			{


				MovimientoContinuoV2.posicion=hit.point;   
				//transform.position = posicionInicial;


				if(hit.collider.tag == "Enemy")
				{
					if(this.GetComponent<AudioSource>().isPlaying == false)
						this.GetComponent<AudioSource>().Play();

					Destroy(hit.collider.gameObject);
					puntos+=1;
				}
			}

		
	}
}





	}
