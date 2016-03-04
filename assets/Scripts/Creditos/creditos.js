public var velocidad:float = 0.125f;

function Start () {
	print(this);
}

function Update () {
	if(this.transform.position.y <= 64){
		this.transform.position = new Vector3 (this.transform.position.x, this.transform.position.y+velocidad, this.transform.position.z);
	}
}