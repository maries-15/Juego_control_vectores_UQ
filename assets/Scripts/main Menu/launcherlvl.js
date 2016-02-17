public var num:int;
public var estado:boolean;
private var colorBlock:Color = new Color(0f,0f,0f,255f);

function Start (){
	Time.timeScale = 1.0f;
	if(num > serialization.savedGame.currentLevel){
		this.GetComponent(SpriteRenderer).color = colorBlock;
   	}
}

function OnMouseDown (){
	if(num == serialization.savedGame.currentLevel){
		SceneManager.LoadScene("cambioImagen");
	}		
}
 
function OnTriggerEnter2D(col: Collider2D){

	if(Input.GetMouseButton(0))
	{
		SceneManager.LoadScene("cambioImagen");
	}
}