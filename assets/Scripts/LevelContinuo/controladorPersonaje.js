import UnityEngine;

public static var puntuacion:int = 0;
public static var tropezarTierra: boolean = false;
public static var time = 1f;
public var marcadorPuntos: TextMesh;

public var fuerzaSalto:float = 8f;
public var velocidad:float = 1f;
private var enSuelo:boolean = true;
private var dobleSalto:boolean = false;
private var corriendo:boolean = true;

public var comprobadorSuelo:Transform;
private var comprobador:float = 0.15;
public var mascaraSuelo: LayerMask;
private var animator: Animator;
static var vidas:int = 3;
public var  Mostrar:boolean = false;
public var  desing:GUISkin;
var windowRect:Rect;
public var vidasTextures:Texture2D[];
public var level:String;
var anim : Animator ;

function Start () {
	animator = GetComponent.<Animator>();
	Time.timeScale =  1f;
	vidas = 3;

}

function FixedUpdate(){
	this.transform.rotation.z = 0;
	if(corriendo){
		GetComponent.<Rigidbody2D>().velocity = new Vector2(velocidad, GetComponent.<Rigidbody2D>().velocity.y);
	}
	enSuelo = GetComponent.<Physics2D>().OverlapCircle(comprobadorSuelo.position,comprobador,mascaraSuelo);
	animator.SetBool("IsSobrePiso",enSuelo);
	if(enSuelo){
		dobleSalto = true;
	}
}

function Update () {
	if(Input.GetMouseButtonDown(0)){
		if(enSuelo || dobleSalto){
			GetComponent.<Rigidbody2D>().velocity = new Vector2(GetComponent.<Rigidbody2D>().velocity.x, fuerzaSalto);
			if(dobleSalto){
				dobleSalto = false;
			}
		}
	}

	if(vidas == 0){
		print("perdio");
		Mostrar = true;
		Time.timeScale = 0f;;
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == "zancudolc"){
		
		if(other.GetType() == UnityEngine.EdgeCollider2D){
			continueTrigger = false;
			var anim : Animator = other.gameObject.GetComponent(Animator) ;
			anim.SetBool("pisa",true);
			Destroy(other.gameObject);
		}
		//	Destroy();;

	}
}

function OnGUI()
{
    GUI.DrawTexture(Rect(50, 50, 120, 40), vidasTextures[vidas]);

    GUI.skin = desing;	
		if (Mostrar) {
			
			windowRect = GUI.Window(0,windowRect,func,"Has Perdido \n");
			windowRect = new Rect (Screen.width / 2 -220, Screen.height / 2 -100, 500, 100);
		}
} 


function func(){
 		
		
		GUILayout.BeginHorizontal ();
		if (GUILayout.Button ("Reiniciar")) {

					
			Mostrar = false;
			SceneManager.LoadScene("level"+level);
			Time.timeScale = 0f;;

		}
		if (GUILayout.Button ("Salir")) {
				
			Mostrar = false;
			SceneManager.LoadScene("menuInicial");
			Time.timeScale = 0f;;
			
		}

		GUILayout.EndHorizontal ();
		
						
	}
