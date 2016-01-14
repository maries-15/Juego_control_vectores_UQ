#pragma strict
	
	public var MyStyle:GUIStyle;
	public var CONTINUARStyle:GUIStyle;
	public var REINICIARStyle:GUIStyle;
	public var SALIRStyle:GUIStyle;
	public var Mostrar:boolean;
	public var level:String;
	public var herramienta:GameObject;
	
	
	
	

function Start () {

}

function Update () {	
}

function OnMouseDown()
{
		Mostrar = true;
		herramienta.SetActive(false);
		Time.timeScale = 0;
}

function OnTriggerEnter2D(col: Collider2D){
		
		
	}



function OnGUI(){
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
		
		//GUI.Label(new Rect(0,290,10,10),"Score: " + puntos,MyStyle);


			if(Mostrar == true)
			{
				if(GUI.Button(new Rect(160,30,125,75),"",CONTINUARStyle))
				{
					Time.timeScale = 1f;
					herramienta.SetActive(true);
					Mostrar = false;
					
					
					
				}
				
				if(GUI.Button(new Rect(160,130,125,75),"",REINICIARStyle))
				{
					Time.timeScale = 1;
					Application.LoadLevel("level"+level);
					herramienta.SetActive(true);
					Mostrar = false;
			
				}
				
			if(GUI.Button(new Rect(160,230,125,75),"",SALIRStyle))
				{
					Time.timeScale = 1;
					Application.LoadLevel("Menu");
					
				}
			}
				
		
	}