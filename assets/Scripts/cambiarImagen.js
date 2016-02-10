import System.Collections.Generic; 
import System.Runtime.Serialization.Formatters.Binary; 
import System.IO;

private var material1:Texture2D;
var icon:Texture2D;
var impact : AudioClip;
var conversaciones:String[];
var img:Sprite;
var archivo;

function Start () 
{
	serialization.cont = serialization.cont+1;
	leerArchivo();
	img = Resources.Load(""+serialization.cont, Sprite);
	this.GetComponent(SpriteRenderer).sprite = img;
}

function Update () {}

function OnGUI(){ 

	if(GUI.Button(Rect(Screen.width - Screen.width/8,Screen.height - Screen.height/5,Screen.width/13,Screen.height/6),icon))
	{
		if(!conversaciones[serialization.cont].Equals("")){
			serialization.cont = serialization.cont+1;
			efectos();
			img = Resources.Load(""+serialization.cont, Sprite);
			this.GetComponent(SpriteRenderer).sprite = img;
		}		
	}
	if(!conversaciones[serialization.cont].Equals(""))
	{
		var centeredStyle = GUI.skin.GetStyle("Label");
	    centeredStyle.alignment = TextAnchor.UpperCenter;
		GUI.skin.label.fontSize=Screen.width/27;
		GUI.color=Color.white;
		GUI.Box(Rect (50,10,Screen.width - 100,(Screen.width/10)),"");
	    GUI.Label(Rect (50,10,Screen.width - 100,(Screen.width/10)),""+conversaciones[serialization.cont-1]);
	}
}

function efectos()
{
	if(serialization.cont==4)
	{
		GetComponent.<AudioSource>().PlayOneShot(impact,1);
	}
	else if(serialization.cont==12)
	{
		serialization.SaveData(serialization.cont,null);
		Application.LoadLevel("level0");
	}
	else if(serialization.cont==14)
	{
		Application.LoadLevel("Menu");
	}
	else if(serialization.cont==21)
	{
		Application.LoadLevel("level1");
	}
	else if(serialization.cont==24)
	{
		Application.LoadLevel("level2");
	}
}

function leerArchivo()
{
	var conversacionesFileText = Resources.Load("conversaciones") as TextAsset;
	conversaciones  = conversacionesFileText.text.Split("\n"[0]);

}