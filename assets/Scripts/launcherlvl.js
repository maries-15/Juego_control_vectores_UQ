public var num:int;
public var estado:boolean;


function Start (){
	Time.timeScale = 1.0f;
}

function OnMouseDown (){

		//loadMsj.level =  num;
		//loadMsj.imagen = estado;
		Application.LoadLevel("cambioImagen");
 }
 
function OnTriggerEnter2D(col: Collider2D){
 
	if(Input.GetMouseButton(0))
	{
		//loadMsj.level =  num;
		//loadMsj.imagen = estado;
		Application.LoadLevel("cambioImagen");
	
	}
}