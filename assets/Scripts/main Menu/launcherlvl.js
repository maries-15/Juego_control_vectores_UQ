public var num:int;
public var estado:boolean;
private var colorBlock:Color = new Color(0f,0f,0f,255f);
private var efectEnable:boolean;
var levelCurrent:int;

function Start (){
	levelCurrent = serialization.savedGame.currentLevel;
	print("level is: "+levelCurrent);
	Time.timeScale = 1.0f;
	if(num > levelCurrent){
		this.GetComponent(SpriteRenderer).color = colorBlock;
   	}
   	if(num == levelCurrent){
		var component: GameObject = GameObject.Find("efect"+num);
   		component.GetComponent(Renderer).enabled = true;
	}
	if(num != levelCurrent){
		component = GameObject.Find("Zancudo"+num);
   		Destroy(component);
	}
}

function Update() {
	
}

function changeEfectHalo(){
	
}

function OnMouseDown (){
	if(num == levelCurrent){
		SceneManager.LoadScene("cambioImagen");
	}		
}
 
function OnTriggerEnter2D(col: Collider2D){
	if(Input.GetMouseButton(0))
	{
		SceneManager.LoadScene("cambioImagen");
	}
}