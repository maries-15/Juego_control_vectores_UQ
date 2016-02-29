import System.IO;

private var material1:Texture2D;
var icon:Texture2D;
var impact : AudioClip;
var conversaciones:String[];
var img:Sprite;
var archivo;
var cont: int;
public var  desing:GUISkin; //Skin general del juego

private var imagesRepeated: Hashtable = {"6":"5", "14":"12","16":"15","18":"17",
	"21":"12","23":"12","25":"24","26":"4","27":"4","29":"28","31":"12","32":"22",
	"33":"22","34":"12","36":"35","38":"37","40":"39","41":"12"};

function Start () 
{
	
	cont = serialization.savedGame.image+1;
	leerArchivo();
	var imageRty = verifyImage(cont);
	if(imageRty != null){
		img = Resources.Load(""+imageRty, Sprite);
	}
	else{
		img = Resources.Load(""+cont, Sprite);
	}
	this.GetComponent(SpriteRenderer).sprite = img;
}

function verifyImage(pos){
	if(imagesRepeated[""+pos] != null){
		return imagesRepeated[""+pos];
	}
}

function Update () {}

function OnGUI(){ 
	GUI.skin = desing;
	if(GUI.Button(Rect(Screen.width - Screen.width/8,Screen.height - Screen.height/5,Screen.width/13,Screen.height/6),icon))
	{
		if(!conversaciones[cont-1].Equals("cargando")){
			cont = cont+1;
			efectos();
			var posicionRendered:String;
			var imageRendered = verifyImage(cont);
			print(imageRendered);
			if(imageRendered != null){
				posicionRendered = imageRendered;
			}
			else{
				posicionRendered = ""+cont;
			}
			img = Resources.Load(posicionRendered, Sprite);
			this.GetComponent(SpriteRenderer).sprite = img;
		}		
	}
	if(!conversaciones[cont-1].Equals("cargando"))
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
	else if(cont==41)
	{
		serialization.SaveData(null,cont,"Menu");
		SceneManager.LoadScene("SceneLavaderoEC");
	}
}

function leerArchivo()
{
	var conversacionesFileText = Resources.Load("conversaciones") as TextAsset;
	conversaciones  = conversacionesFileText.text.Split("\n"[0]);

}