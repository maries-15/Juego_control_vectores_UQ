import System.IO;

private var material1:Texture2D;
var icon:Texture2D;
static var cont:int = 0;
var impact : AudioClip;
var conversaciones = new Array ();
var img:Sprite;
var archivo;

function Start () 
{
	cont++;
	leerArchivo();
	img = Resources.Load(""+cont, Sprite);
	this.GetComponent(SpriteRenderer).sprite = img;
}

function Update () {
}

function OnGUI(){

	if(GUI.Button(Rect(Screen.width - Screen.width/8,Screen.height - Screen.height/5,Screen.width/13,Screen.height/6),icon))
	{
		if(!conversaciones[cont].Equals("")){
			cont++;
			efectos();
			img = Resources.Load(""+cont, Sprite);
			this.GetComponent(SpriteRenderer).sprite = img;
		}
	}
	if(!conversaciones[cont].Equals(""))
	{
		var centeredStyle = GUI.skin.GetStyle("Label");
	    centeredStyle.alignment = TextAnchor.UpperCenter;
		GUI.skin.label.fontSize=Screen.width/27;
		GUI.color=Color.white;
		GUI.Box(Rect (50,10,Screen.width - 100,(Screen.width/10)),"");
	    GUI.Label(Rect (50,10,Screen.width - 100,(Screen.width/10)),""+conversaciones[cont]);
	}
}

function efectos()
{
	if(cont==4)
	{
		GetComponent.<AudioSource>().PlayOneShot(impact,1);
	}
	else if(cont==12)
	{
		Application.LoadLevel("level0");
	}
	else if(cont==14)
	{
		Application.LoadLevel("Menu");
	}
	else if(cont==21)
	{
		Application.LoadLevel("level1");
	}
	else if(cont==24)
	{
		Application.LoadLevel("level2");
	}
}

function leerArchivo()
{
	conversaciones.Push ("0");
	var sw = new File.OpenText("Assets/Resources/conversaciones.txt");
	var input:String = "";
    while (true) {
        input = sw.ReadLine();
        conversaciones.Push (input);
        if (input == null) { break; }
    }
    sw.Close();
}