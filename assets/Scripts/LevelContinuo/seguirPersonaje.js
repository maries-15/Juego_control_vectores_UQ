public var personaje:Transform;
private var separacion:float = 3f;

function Update () {
	transform.position = new Vector3(personaje.position.x + separacion,transform.position.y,transform.position.z);
}