/** * MovimientoContinuoV2 * Autor: Victor Purcallas * Fecha:02/09/2013 * * Continuamente mueve el objeto hacia el Vector3 “posicion” **/

using UnityEngine; 
using System.Collections; 
public class MovimientoContinuoV2 : MonoBehaviour {
	
	public static Vector3 posicion; //Posicion a la que el protagonista se movera 
	public float speed = 1000f; //velocidad
	
	void Update() { 
		posicion.z = 0;
		float step = speed * Time.deltaTime; //Marca la velocidad no en FPS sino en segundos 
		transform.position = Vector3.MoveTowards(transform.position, posicion, speed); //Se transforma la posicion 
	} }