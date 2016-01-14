using UnityEngine;
using System.Collections;

public class vidas : MonoBehaviour {
	public int vida;
	public GameObject vida1 ;
	public GameObject vida2 ;
	public GameObject vida3 ;
	public GUIStyle CONTINUARStyle;
	public GUIStyle REINICIARStyle;
	public GUIStyle SALIRStyle;
	public bool Mostrar = false;

	public GameObject Herramienta ;
	private Component Mover;
	private ClickAndGo click;


	// Use this for initialization
	void Start () {
		Mover = Herramienta.GetComponent<ClickAndGo>();

	}
	
	// Update is called once per frame
	void Update () {

		if (vida >3){ 
			vida = 3; 
		} 
		 
		if (vida == 2){ 
			vida3.SetActive(false);
		} 
		if (vida == 1){ 
			vida2.SetActive(false);
		} 
		if (vida == 0){ 
			
			//(Mover as MonoBehaviour).enabled = false;
			Time.timeScale =  0f;
			vida1.SetActive(false);
			Herramienta.SetActive(false);
			Mostrar = true;
			OnGUI();
		} 
	}
	
	void OnTriggerEnter2D(Collider2D col){
		if(col.tag == "Enemy")
		{
			vida-=1;
			Update();
		}
		//if (col.tag == "Obstacle") {
		//	Time.timeScale = 0;
		//	Herramienta.SetActive(false);
		//	pausa=true;
		//	Mostrar = true;
		//}
	}
 

	void OnGUI(){
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
		if(Mostrar == true)
		{


			if(GUI.Button(new Rect(80,100,150,100),"",REINICIARStyle))
			{
					Mostrar = false;
					Time.timeScale = 1f;
					Application.LoadLevel("level1");
					vida = 3;
			}

			if(GUI.Button(new Rect(260,100,150,100),"",SALIRStyle))
			{
				Application.LoadLevel("Menu");
				
			}
		}
	}
}
