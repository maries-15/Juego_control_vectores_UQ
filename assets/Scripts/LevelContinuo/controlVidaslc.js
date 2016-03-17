var vidasTextures:Texture2D[];
static var vidas:int = 3;
public var  Mostrar:boolean = false;
public var level:String;
public var  desing:GUISkin;
var windowRect:Rect;


function Start () {

}

function Update () {
	if(vidas == 0){
		print("perdio");
		Mostrar = true;
		time = 0f;;
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


		}
		if (GUILayout.Button ("Salir")) {
				
			Mostrar = false;
			SceneManager.LoadScene("menuInicial");

			
		}

		GUILayout.EndHorizontal ();
		
						
	}