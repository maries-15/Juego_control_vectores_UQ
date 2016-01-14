using UnityEngine;
using System.Collections;

public class Inicio_Final : MonoBehaviour {

	private bool Mostrar = false;
	public bool MostrarFinal = false;
	private Transform thisTransform;
	public GUIStyle PLAYStyle;
	public GUIStyle EXITStyle;
	public GUIStyle RETRYStyle;
	public AudioClip audiofinal;
	private AudioSource thisAudio;
	// Use this for initialization
	void Awake () {
		thisTransform = transform;
		//Time.timeScale = 0f;
		thisAudio = this.GetComponent<AudioSource>();
	}
	/**
	void OnGUI(){
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
		if(Mostrar == false)
		{
			if(GUI.Button(new Rect(80,100,150,100),"",PLAYStyle))
			{
				Mostrar = true;
				Time.timeScale = 1f;
			}
			if(GUI.Button(new Rect(260,100,150,100),"",EXITStyle))
			{
				Application.Quit();
			}
		}
//		if(thisTransform.position.y < -6.5f || MostrarFinal == true )
//		{
//			if(Time.timeScale == 1f)
//			{
//				thisAudio.clip = audiofinal;
//				thisAudio.Play();
//			}
//			Time.timeScale = 0f;
//			if(GUI.Button(new Rect(80,100,150,100),"",RETRYStyle))
//			{
//				Application.LoadLevel(0);
//			}
//			if(GUI.Button(new Rect(260,100,150,100),"",EXITStyle))
//			{
//				Application.Quit();
//			}
//		}

	}
	*/
}
