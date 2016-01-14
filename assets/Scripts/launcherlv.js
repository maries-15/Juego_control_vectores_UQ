public static var num:int;
public static var estado:boolean;
function OnMouseDown () {

	//num = loadMsj.level;
	//estado = loadMsj.imagen;
		
		if(estado == false )
			Application.LoadLevel("level"+num);
		else if(estado == true && num != 0)
			Application.LoadLevel("level"+(num+1));
		else if(estado == true && num == 0)
			Application.LoadLevel("Menu");	
 
	//Application.LoadLevel("level"+num);
 
 }