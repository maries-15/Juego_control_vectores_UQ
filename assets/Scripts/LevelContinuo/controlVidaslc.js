var vidasSprites:Sprite[];
static var vidas:int = 3;
private var update :boolean = false;
private var mostrar:boolean =  false;
public var  desing:GUISkin;
public var level:String;
var windowRect:Rect;


function Start () {

}

function Update () {
	if(vidas >= 0){
		if(this.GetComponent(SpriteRenderer).sprite.name != vidasSprites[vidas].name){
			this.GetComponent(SpriteRenderer).sprite = vidasSprites[vidas];
		}
	}
	else{
		print("perdio");
		mostrar = true;
	}
	
}

function OnGUI(){
		GUI.skin = desing;	
		if (mostrar) {
			windowRect = GUI.Window(0,windowRect,func,"Has Perdido \n");
			windowRect = new Rect (Screen.width / 2 -220, Screen.height / 2 -100, 500, 100);
		}
	
}

function func(){
 		
				
		GUILayout.BeginHorizontal ();
		if (GUILayout.Button ("Reiniciar")) {

			Time.timeScale = 1f;
			mostrar = false;
			SceneManager.LoadScene("level"+level);
//			settingUi(true);
//			mostrado = false;
			
		}
		if (GUILayout.Button ("Salir")) {
			mostrar = false;
		
			SceneManager.LoadScene("menuInicial");
			
		//	settingUi(true);
			
		}
		
		GUILayout.EndHorizontal ();
		
						
	}