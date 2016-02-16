private var posInicialMano:Vector3; //Pocision inicial de la mano
private var aux:Vector3;// Pocision auxiliar para el movimiento de la mano
private var puntos:int; // puntos que se han hecho
var Zancudo:GameObject; //objeto para instanciar los zancudos
var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo
var level:int;//nivel en el que va el jugador

//timer vars
var startTime:int;//Marca el inicia del tiempo desde se comienza a contabilizar
var timer1:int;//LLeva registro del tempo segundo a segundo
var total:int = 0;//Se usa para realizar la comparacion entre el tiempo actual con respecto al inicial
var timeout:int = 12;//tiempo limite que se tiene para jugar
var segundos:int = timeout;//lleva la cuenta regresiva que se muestra al usuario

function Start()
{
	startTime = Time.time;
	posInicialMano=this.transform.position;
	aux=posInicialMano;
	loadLevel();
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
	GameObject.Find("Points").GetComponent.<GUIText>().text = "Puntos: "+puntos;
	GameObject.Find("Timer").GetComponent.<GUIText>().text = ""+segundos;  
}


function verificarnivel(objectZancudo)
{
	if(puntos==10 && level==1)
	{
		changeLevel(24,20,true,objectZancudo);
	}
	if(puntos==30 && level==2)
	{
		changeLevel(40,50,true,objectZancudo);
	}
	if(puntos == 80 && level==3)
	{
		serialization.SaveData(1,0,"CI",null);
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
	 }
 }

 function changeLevel(timeoutTemp, numberZancudos, options, objectZancudo){
	startTime = Time.time;
	timeout = timeoutTemp;
	segundos = timeout;
	cargarZancudos(numberZancudos,objectZancudo);
	level+=1;
	serialization.SaveData(null, level, null, null);
 }

 function loadLevel(){
 	level = parseInt(""+serialization.savedGame["subLevel"]);
 	var numberZancudos = 9;
 	puntos = 0;
 	if(level == 2){
 		numberZancudos = 20;
 		timeout = 24;
 		puntos = 10;
 	}
 	else if(level == 3){
 		numberZancudos = 50;
 		timeout = 40;
 		puntos = 30;
 	}
 	cargarZancudos(numberZancudos,Zancudo);
 }