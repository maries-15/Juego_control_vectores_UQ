public var num:int;
public var estado:boolean;
private var colorBlock:Color = new Color(0f,0f,0f,255f);
private var haloEnable:boolean;

function Start (){
	Time.timeScale = 1.0f;
	if(num > serialization.savedGame.currentLevel){
		this.GetComponent(SpriteRenderer).color = colorBlock;
   	}
   	yield changeEfectHalo();
}

function Update() {
	
}

function changeEfectHalo(){
	if(num == serialization.savedGame.currentLevel){
		var halo: Component = GetComponent("Halo"); 
		halo.GetType().GetProperty("enabled").SetValue(halo, haloEnable, null);
		if(haloEnable == true){
			haloEnable = false;
		}
		else haloEnable = true;
	}
	yield WaitForSeconds (1);
}

function OnMouseDown (){
	print(serialization.savedGame.currentLevel);
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