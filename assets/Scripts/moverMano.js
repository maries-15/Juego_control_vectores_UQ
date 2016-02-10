private var posInicialMano:Vector3; //Pocision inicial de la mano
private var aux:Vector3;// Pocision auxiliar para el movimiento de la mano
private var puntos:int; // puntos que se han hecho
public var  desing:GUISkin;
var velocidadMano:int; // velocidad de la mano
var Zancudo:GameObject; //objeto para instanciar los zancudos
var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo
var MyStyle: GUIStyle; // Estilo del label que muetsra los puntos
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
	velocidadMano=4;
	cargarZancudos(9,Zancudo);
	level=1;
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
	if(total <= timeout){
		TimerStart();
	}
}

function OnGUI()
{	
	GameObject.Find("Points").GetComponent.<GUIText>().text = "Puntos: "+puntos;
	GameObject.Find("Timer").GetComponent.<GUIText>().text = ""+segundos;  
}


function verificarnivel(objeto)
{
	if(puntos==10 && level==1)
	{
		startTime = Time.time;
		timeout = 24;
		segundos = timeout;
		cargarZancudos(20,objeto);
		level+=1;
	}
	if(puntos==30 && level==2)
	{
		startTime = Time.time;
		timeout = 40;
		segundos = timeout;
		cargarZancudos(50,objeto);
		level+=1;
	}
	if(puntos == 80)
	{
		Application.LoadLevel("cambioImagen");
		serialization.SaveData(serialization.cont,"1");
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
	 print(total);
	if(segundos == 0){ 
		Debug.Log ("Perdiooo: ");
	 }
 }