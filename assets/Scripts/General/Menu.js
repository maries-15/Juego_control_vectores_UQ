#pragma strict
	

	
	public var Mostrar:boolean;
	public var level:int;
	public var herramienta:GameObject;//pez
	public var posicionInicial:Vector3;	
	public var windowRect:Rect;
	public var  desing:GUISkin;
	private var fondo:GameObject;
	private var ui:GameObject[];
	private var allAudioSources : AudioSource[];
	
	
	
	

function Start () {
	 allAudioSources = FindObjectsOfType(AudioSource) as AudioSource[];

	if(level!=2)
		posicionInicial = herramienta.transform.position;
		
	
	
	ui = GameObject.FindGameObjectsWithTag("ui");
	fondo = GameObject.Find("Fondo");

}



function Update () {

}

function OnTriggerEnter2D(col: Collider2D){

		//Debug.Log("Colision");
		if (col.tag == "Player" ) {
		
		
			Mostrar = true;
			settingUi(false);
			if(level!=2)
			{
				herramienta.GetComponent(movimientoContinuo).posicion = posicionInicial;
			}	
			
		//	Debug.Log("Entro");
			

		}
		
	}
	
function OnMouseDown()
{
	Debug.Log("MouseDown");
	allAudioSources = FindObjectsOfType(AudioSource) as AudioSource[];
	settingUi(false);
	Mostrar = true;
	
	
	
}
		

function func(){	

	
		if (GUILayout.Button ("Continuar")) {
			
			settingUi(true);
			Mostrar = false;
			
				}
				
		if (GUILayout.Button ("Reiniciar")) {
			Mostrar = false;
			SceneManager.LoadScene("level"+level);
			settingUi(true);
			
		
			
		}
		if (GUILayout.Button ("Salir")) {
			Mostrar = false;
			//if(level == 0)
			SceneManager.LoadScene("menuInicial");
			//else
			//SceneManager.LoadScene("Menu");	
			settingUi(true);
			
		}
		
						
	}

function OnGUI(){

	GUI.skin = desing;
	
	if (Mostrar) {

			windowRect = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 400, 400);
			windowRect = GUI.Window(0,windowRect,func,"PAUSA \n");
			
			
		}
		
	}

function settingUi(bol)
{
	var bole:boolean;
	//Debug.Log("Bole"+ bole);
	bole = bol;

	Debug.Log(level);
	//gameObject.renderer.enabled = bole;
	
	if(level == 0)
	{
		gameObject.GetComponent.<GUITexture>().enabled = bole;
	}
	
	if(level == 2 || level == 1 )
	{
		//	gameObject.renderer.enabled = bole;
		herramienta.GetComponent(movimientoContinuo).posicion = posicionInicial;
		
	}	
	herramienta.SetActive(bole);
	if(bole == false)
	{
		Time.timeScale = 0f;
		fondo.GetComponent(SpriteRenderer).color = Color.gray;
	}
	else
	{
		fondo.GetComponent(SpriteRenderer).color = Color.white;
		Time.timeScale = 1f;
	}

	for(var i=0;i<ui.Length;i++)
	{
		Debug.Log(ui[i].name);
	
		
		if(ui[i].GetComponent.<Renderer>() != null)
			ui[i].GetComponent.<Renderer>().enabled = bole;
		
			
		if(ui[i].name.Equals("Points")||ui[i].name.Equals("Canvas_menu"))	
			ui[i].SetActive(bole);
		
			
		
		
	}
	
	
	if(allAudioSources.Length>0)
	{	
		for(var audioS : AudioSource in allAudioSources) {
        	 audioS.enabled = bole;
     	}
	}
}	
	