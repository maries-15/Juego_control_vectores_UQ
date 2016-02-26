public var  desing:GUISkin; //Skin general del juego
private var segundos:int = 10;

private var startTime:int;//Marca el inicia del tiempo desde se comienza a contabilizar
private var timer1:int;//LLeva registro del tempo segundo a segundo
private var total:int = 0;//Se usa para realizar la comparacion entre el tiempo actual con respecto al inicial

function Start () {
	startTime = Time.time;
}

function Update () {
	TimerStart();
}

function OnGUI(){ 
	GUI.skin = desing;

	var centeredStyle = GUI.skin.GetStyle("Label");
    centeredStyle.alignment = TextAnchor.UpperCenter;
	GUI.skin.label.fontSize=Screen.width/27;
	GUI.color=Color.white;
	GUI.Box(Rect (50,10,Screen.width - 100,(Screen.width/10)),"");
    GUI.Label(Rect (50,10,Screen.width - 100,(Screen.width/10)),"lo sentimos este nivel aun se encuentra en construccion, se redireccionara al siguiente juego en "+ segundos + " segundos");

}

 function TimerStart(){
 	
	timer1 = Time.time;  //Set current time
	total = timer1 - startTime;
	segundos = 6 - total;
	if(segundos == 0){ 
		SceneManager.LoadScene("Trivia");
	 }
 }