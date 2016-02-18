import System.IO;

private var material1:Texture2D;
var icon:Texture2D;
var impact : AudioClip;
var conversaciones:String[];
var img:Sprite;
var archivo;
var cont: int;

function Start () 
{
	cont = serialization.savedGame.image+1;
	leerArchivo();
	img = Resources.Load(""+cont, Sprite);
	this.GetComponent(SpriteRenderer).sprite = img;
}

function Update () {}

function OnGUI(){ 

	if(GUI.Button(Rect(Screen.width - Screen.width/8,Screen.height - Screen.height/5,Screen.width/13,Screen.height/6),icon))
	{
		if(!conversaciones[cont].Equals("")){
			cont = cont+1;
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
	    GUI.Label(Rect (50,10,Screen.width - 100,(Screen.width/10)),""+conversaciones[cont-1]);
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
		serialization.SaveData(0,cont,"Init");
		SceneManager.LoadScene("level0");
	}
	else if(cont==14)
	{
		serialization.SaveData(null,cont,"Menu");
		SceneManager.LoadScene("Menu");
	}
	else if(cont==21)
	{
		serialization.SaveData(1,cont,"Init");
		SceneManager.LoadScene("level1");
	}
	else if(cont==23)
	{
		serialization.SaveData(null,cont,"Menu");
		SceneManager.LoadScene("Menu");
	}
	else if(cont==31)
	{
		serialization.SaveData(2,cont,"Init");
		SceneManager.LoadScene("level2");
	}
	else if(cont==34)
	{
		serialization.SaveData(null,cont,"Menu");
		SceneManager.LoadScene("Menu");
	}
}

function leerArchivo()
{
	var conversacionesFileText = Resources.Load("conversaciones") as TextAsset;
	conversaciones  = conversacionesFileText.text.Split("\n"[0]);

}