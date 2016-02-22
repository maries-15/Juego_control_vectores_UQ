public var tiempoMin:float = 1f;
public var tiempoMax:float = 2f;
public var obj: GameObject[];


function Start () {
	generar();
}

function Update () {

}

function generar(){
	Instantiate(obj[Random.Range(0,obj.Length)], transform.position, Quaternion.identity);
	Invoke("generar", Random.Range(tiempoMin, tiempoMax));
}