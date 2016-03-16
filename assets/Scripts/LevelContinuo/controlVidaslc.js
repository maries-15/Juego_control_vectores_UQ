var vidasTextures:Texture2D[];
static var vidas:int = 3;

function Start () {

}

function Update () {
	if(vidas == 0){
		print("perdio");
	}
}

function OnGUI()
{
    GUI.DrawTexture(Rect(50, 50, 120, 40), vidasTextures[vidas]);
} 