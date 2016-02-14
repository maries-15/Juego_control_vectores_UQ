
public static var posicion:Vector3; //Posicion a la que el protagonista se movera 
public var  speed:float = 1000f; //velocidad
	
	function Update() { 
	
	if(transform.position != posicion )
	{
	
		posicion.z = 0;
		var  step:float = speed * Time.deltaTime; //Marca la velocidad no en FPS sino en segundos 
		transform.position = Vector3.MoveTowards(transform.position, posicion, speed); //Se transforma la posicion 
	}
	} 