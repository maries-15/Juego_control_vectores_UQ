using UnityEngine;
using System.Collections;

public class Puntos : MonoBehaviour {

	private int puntos;
	private Transform thisTransform;
	private float posicion;
	public GUIStyle MyStyle;

	void Awake(){
		puntos = 0;
		thisTransform = transform;
		posicion = thisTransform.position.x + 5;
	}
	void OnGUI(){
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
		if(thisTransform.position.x > posicion)
		{
			posicion += 8;
			puntos += 1;
		}
		GUI.Label(new Rect(0,290,0,0),"Score: " + puntos,MyStyle);

	}
}
