private var posInicialMano:Vector3; //Pocision inicial de la mano
private var aux:Vector3;// Pocision auxiliar para el movimiento de la mano
var puntos:int; // puntos que se han hecho
var Zancudo:GameObject; //objeto para instanciar los zancudos
var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo
var level:int;//nivel en el que va el jugador

//timer vars
var startTime:int;//Marca el inicia del tiempo desde se comienza a contabilizar
var timer1:int;//LLeva registro del tempo segundo a segundo
var total:int = 0;//Se usa para realizar la comparacion entre el tiempo actual con respecto al inicial
var timeout:int = 12;//tiempo limite que se tiene para jugar
var segundos:int = timeout;//lleva la cuenta regresiva que se muestra al usuario

var windowRect:Rect; //Frame en donde se informara al usuario que ha perdido
public var  desing:GUISkin; //Skin general del juego
var perdio = false; //Variable para controlar el momento en que el usuario pierde
private var ui:GameObject[]; //Objetos de la interfaz con tag ui

function Start()
{
		ui = GameObject.FindGameObjectsWithTag("ui");
		serialization.Save();
		loadLevel();
		windowRect = new Rect (Screen.width / 2 -220, Screen.height / 2 -100, 500, 100);
}

function OnMouseDrag()
{
	print("se presiono");
}

function Update ()
{
	if(Input.GetMouseButtonDown(0))
	{
		aux=Camera.main.ScreenToWorldPoint(Input.mousePosition);
		aux.x=0;
		
		//Se envia un rayo para detectar las colisiones
		var ray: Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit: RaycastHit;
	
		if(Physics.Raycast(ray,hit))
		{
			GetComponent.<AudioSource>().PlayOneShot(impact, 1);
			puntos+=1;
			verificarnivel(hit.rigidbody.gameObject);
			Destroy(hit.rigidbody.gameObject);
		}
	}
	if(Input.GetKeyDown(KeyCode.Space))//solo con fines de desarrollo
	{
		print("Mata un zancudo para saltar el nivel");
		puntos = 79;
		level = 3;
	}
	if(total <= timeout){
		TimerStart();
	}
}

function OnGUI()
{	
	if(!perdio){
	GameObject.Find("Points").GetComponent.<GUIText>().text = "Puntos: "+puntos;
	GameObject.Find("Timer").GetComponent.<GUIText>().text = ""+segundos;  
	}
	if (perdio == true) {
			windowRect = GUI.Window(0,windowRect,func,"Has Perdido \n");
			
	}
}


function verificarnivel(objectZancudo)
{
	if(puntos==10 && level==1)
	{
		changeLevel(24,20,objectZancudo);
	}
	if(puntos==30 && level==2)
	{
		changeLevel(40,50,objectZancudo);
	}
	if(puntos == 80 && level==3)
	{
		serialization.savedGame.level0 = {"subLevel":level, "puntos":puntos};
		serialization.SaveData(1,null,"CI");
		SceneManager.LoadScene("cambioImagen");
	}
}
//Metodo para instanciar los zancudos
function cargarZancudos(numero,objeto)
{
	var posInicial:Vector3;
	var n:int =numero;
	for(var i:int;i<n;i++)
	{
 		posInicial.z=Random.Range(-10,10);
 		posInicial.y=Random.Range(-4.1273,2.5173);
 		posInicial.x=-5;
		Instantiate(objeto,posInicial, this.transform.rotation);
	}
}

 function TimerStart(){
 	
	timer1 = Time.time;  //Set current time
	total = timer1 - startTime;
	segundos = timeout - total;
	if(segundos == 0){ 
		Debug.Log ("Perdiooo:");
		Time.timeScale = 0f;
		perdio = true;
		settingUi(!perdio);
	 }
 }

 function changeLevel(timeoutTemp, numberZancudos, objectZancudo){
	startTime = Time.time;
	timeout = timeoutTemp;
	segundos = timeout;
	cargarZancudos(numberZancudos,objectZancudo);
	level+=1;
	serialization.savedGame.level0 = {"subLevel":level, "puntos":puntos};
	serialization.SaveData(null, null, null);
 }

 function loadLevel(){
 	startTime = Time.time;
	posInicialMano=this.transform.position;
	aux=posInicialMano;
 	level = serialization.savedGame.level0["subLevel"];
 	puntos = serialization.savedGame.level0["puntos"];
 	var numberZancudos = 9;
 	if(level == 2){
 		numberZancudos = 20;
 		timeout = 24;
 	}
 	else if(level == 3){
 		numberZancudos = 50;
 		timeout = 40;
 	}
 	cargarZancudos(numberZancudos,Zancudo);
 }



 function func(){
 		GUI.skin = desing;	
				
		GUILayout.BeginHorizontal ();
		if (GUILayout.Button ("Reiniciar")) {

			
			Time.timeScale = 1f;
			settingUi(true);
			perdio = false;	
			loadLevel();
			
		}
		if (GUILayout.Button ("Salir")) {
			
			if(level == 0)
				SceneManager.LoadScene("menuInicial");
				//Application.LoadLevel("menuInicial");
			else
				SceneManager.LoadScene("Menu");
				//Application.LoadLevel("Menu");	
			//settingUi(true);
			
		}
		
		GUILayout.EndHorizontal ();
		
					
	}

	function settingUi(bol)
	{
		var bole:boolean;
		Debug.Log("Bole"+ bole);
		bole = bol;

		Debug.Log(level);
		//gameObject.renderer.enabled = bole;
		


		if(bole == false)
		{
		Time.timeScale = 0f;
	//		fondo.GetComponent(SpriteRenderer).color = Color.gray;
		}
		else
		{
		//	fondo.GetComponent(SpriteRenderer).color = Color.white;
			Time.timeScale = 1f;
		}

		for(var i=0;i<ui.Length;i++)
		{
			//Debug.Log(ui[i].name);
			//print (ui.Length);
			
			if(ui[i].GetComponent.<Renderer>() != null)
				ui[i].GetComponent.<Renderer>().enabled = bole;
			
				
			
			ui[i].SetActive(bole);


			if(ui[i].name.Equals("Zancudo"))	
				ui[i].SetActive(bole);
		}


	}	