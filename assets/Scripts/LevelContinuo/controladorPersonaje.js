public static var puntuacion:int = 0;
public var marcadorPuntos: TextMesh;

public var fuerzaSalto:float = 8f;
public var velocidad:float = 1f;
private var enSuelo:boolean = true;
private var dobleSalto:boolean = false;
private var corriendo:boolean = true;

public var comprobadorSuelo:Transform;
private var comprobador:float = 0.09;
public var mascaraSuelo: LayerMask;
//private var animator: Animator;


function Start () {
	//animator = GetComponent.<Animator>();
}

function FixedUpdate(){

	if(corriendo){
		GetComponent.<Rigidbody2D>().velocity = new Vector2(velocidad, GetComponent.<Rigidbody2D>().velocity.y);
	}
	//animator.SetFloat("velX", GetComponent.<Rigidbody2D>().velocity.x);
	enSuelo = GetComponent.<Physics2D>().OverlapCircle(comprobadorSuelo.position,comprobador,mascaraSuelo);
	//animator.SetBool("IsSobrePiso",enSuelo);
	if(enSuelo){
		dobleSalto = true;
	}

	//marcadorPuntos.text = ""+puntuacion;
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
}
