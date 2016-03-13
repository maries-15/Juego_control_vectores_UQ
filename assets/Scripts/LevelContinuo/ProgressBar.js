var progress : float = 0;
var pos : Vector2;
var size : Vector2;
var sizeZancudo : Vector2;
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
var zancudo : Texture2D;
var nino: Texture2D;
var lavadero: GameObject;
var distance:float;


function Start(){
	distance = 200;
	var cam = Camera.main;
	var height:float = 2f * cam.orthographicSize;
	var width:float = height * cam.aspect;
	var screenPos: Vector3 = cam.WorldToScreenPoint(lavadero.transform.position);
	pos = new Vector2(20,20);
	size = sizeZancudo = new Vector2(screenPos.x - 50,20);
}


function OnGUI()
{
    GUI.DrawTexture(Rect(pos.x, pos.y, size.x, size.y), progressBarEmpty);
    GUI.DrawTexture(Rect(pos.x, pos.y, size.x * Mathf.Clamp01(progress), size.y), progressBarFull);
    GUI.DrawTexture(Rect((size.x * Mathf.Clamp01(progress)) - 30, pos.y, 40, sizeZancudo.y), zancudo);
    GUI.DrawTexture(Rect((size.x * Mathf.Clamp01(progress)) + 30, pos.y, 40, sizeZancudo.y), nino);

} 


function Update()
{
    progress = (this.transform.position.x)/distance;
}