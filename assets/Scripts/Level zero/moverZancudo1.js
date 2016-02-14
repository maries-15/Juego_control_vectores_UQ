public var numero:int;
public var targetPosition:Vector3;
var vel:int;
public var ancho:int;
public var alto:float;

function Start () 
{
	targetPosition=this.transform.position;
	vel=7;
	ancho=7.5;
	alto=3;
}

function Update () 
{
	
	numero=Random.Range(1,9);
	if(numero==1) metodo1();
	else if(numero==2) metodo2();
	else if(numero==3) metodo3();
	else if(numero==4) metodo4();
	else if(numero==5) metodo5();
	else if(numero==6) metodo6();
	else if(numero==7) metodo7();
	else if(numero==8) metodo8();
}

function metodo1()
{
	targetPosition.z=this.transform.position.z+1;
	if(targetPosition.z<ancho)
		this.transform.position = Vector3.Lerp (this.transform.position, targetPosition, Time.deltaTime * vel);
	
}
function metodo2()
{
	targetPosition.z=this.transform.position.z+1;
	targetPosition.y=this.transform.position.y+1;
	if(targetPosition.y<alto && targetPosition.z<ancho)
		this.transform.position = Vector3.Lerp (this.transform.position, targetPosition, Time.deltaTime * vel);
	
}

function metodo3()
{
	targetPosition.y=this.transform.position.y+1;
	if(targetPosition.y<alto)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);

}

function metodo4()
{
	targetPosition.z=this.transform.position.z-1;
	targetPosition.y=this.transform.position.y+1;
	if(targetPosition.y<alto && targetPosition.z>-ancho)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}

function metodo5()
{
	targetPosition.z=this.transform.position.z-1;
	if(targetPosition.z>-ancho)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}


function metodo6()
{
	targetPosition.z=this.transform.position.z-1;
	targetPosition.y=this.transform.position.y-1;
	if(targetPosition.y>-alto && targetPosition.z>-ancho)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}

function metodo7()
{
	targetPosition.y=this.transform.position.y-1;
	if(targetPosition.y>-alto)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}

function metodo8()
{
	targetPosition.z=this.transform.position.z+1;
	targetPosition.y=this.transform.position.y-1;
	if(targetPosition.y>-alto && targetPosition.z<ancho)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}