var progress : float = 0;
var pos : Vector2;
var size : Vector2;
var sizeZancudo : Vector2;
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
var zancudo : Texture2D;
var nino: Texture2D;
var lavaderol : Texture2D;
var pausa: GameObject;
var distance:float;


function Start(){

	distance = 160;
	var cam = Camera.main;
	var screenPos: Vector3 = cam.WorldToScreenPoint(pausa.transform.position);
	pos = new Vector2(50,20);
	size = sizeZancudo = new Vector2((screenPos.x/1.3),20);
}


function OnGUI()
{
    GUI.DrawTexture(Rect(pos.x, pos.y, size.x, size.y), progressBarEmpty);
    GUI.DrawTexture(Rect(pos.x, pos.y, size.x * Mathf.Clamp01(progress), size.y), progressBarFull);
    GUI.DrawTexture(Rect((size.x * Mathf.Clamp01(progress)) - 30, pos.y, 40, sizeZancudo.y), zancudo);
    GUI.DrawTexture(Rect((size.x * Mathf.Clamp01(progress)) + 30, pos.y, 40, sizeZancudo.y), nino);
    GUI.DrawTexture(Rect(size.x + 50, size.y - 10, 40, 40), lavaderol);

} 


function Update()
{

    if(Input.GetKeyDown(KeyCode.Space))//solo con fines de desarrollo
    {
       progress = 2;
    }
    if(progress > 1){
    	serialization.SaveData(3,null,"CI");
    	SceneManager.LoadScene("Trivia");
    }
    progress = (this.transform.position.x)/distance;


}