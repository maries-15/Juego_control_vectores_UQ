public var tiempoMin:float = 1f;
public var tiempoMax:float = 2f;
public var obj: GameObject[];

function Start () {
	generar();
}

function Update () {

}

function generar(){
	var number = Random.Range(0,obj.Length);
	var quater;
	Instantiate(obj[number], GetPositions(number), obj[number].transform.rotation);
	Invoke("generar", Random.Range(tiempoMin, tiempoMax));
}

function GetPositions(number){
	if(number == 0){
		return Vector3(transform.position.x,-0.84,-0.4013672);
	}
	else if(number == 1){
		return Vector3(transform.position.x,-3.4,-1.03);
	}
	else {
		return Vector3(transform.position.x,-2.42,1.960938);
	}
}