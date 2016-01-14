public var numero:int;
public var mov: int;
public var targetPosition:Vector3;
public var vel:float;
public var derecha:float;
public var arriba:float;
public var izquierda:float;
public var abajo:float;
var ver:int;

function Start () 
{
	targetPosition=this.transform.position;
	InvokeRepeating("Spawn", 1 , 0.2);
	
}

function Update () 
{
	
	
}

function Spawn ()
	{

	numero=Random.Range(1,8);
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
	mov=Random.Range(1.5,3);
	targetPosition.x=this.transform.position.x+mov;
	verificarPosicion();
	if(ver==1)
		this.transform.position = Vector3.Lerp (this.transform.position, targetPosition, Time.deltaTime * vel);
	
}
function metodo2()
{
mov=Random.Range(1.5,3);
	targetPosition.x=this.transform.position.x+mov;
	
mov=Random.Range(1.5,3);
	targetPosition.y=this.transform.position.y+mov;
	verificarPosicion();
	
	if(ver==1)
		this.transform.position = Vector3.Lerp (this.transform.position, targetPosition, Time.deltaTime * vel);
	
}

function metodo3()
{
mov=Random.Range(1.5,3);
	targetPosition.y=this.transform.position.y+mov;
	verificarPosicion();
	if(ver==1)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);

}

function metodo4()
{
mov=Random.Range(1.5,3);
	targetPosition.x=this.transform.position.x-mov;
	
mov=Random.Range(1.5,3);
	targetPosition.y=this.transform.position.y+mov;
	verificarPosicion();
	if(ver==1)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}

function metodo5()
{
mov=Random.Range(1.5,3);
	targetPosition.x=this.transform.position.x-mov;
	verificarPosicion();
	if(ver==1)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}


function metodo6()
{
mov=Random.Range(1.5,3);
	targetPosition.x=this.transform.position.x-mov;
mov=Random.Range(1.5,3);
	targetPosition.y=this.transform.position.y-mov;
	verificarPosicion();
	if(ver==1)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}

function metodo7()
{
mov=Random.Range(1.5,3);
	targetPosition.y=this.transform.position.y-mov;
	verificarPosicion();
	if(ver==1)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}

function metodo8()
{
mov=Random.Range(1.5,3);
	targetPosition.x=this.transform.position.x+mov;
mov=Random.Range(1.5,3);
	targetPosition.y=this.transform.position.y-mov;
	verificarPosicion();
	if(ver==1)
		transform.position = Vector3.Lerp (transform.position, targetPosition, Time.deltaTime * vel);
}
function verificarPosicion()
{
	if(targetPosition.y<arriba && targetPosition.x<derecha && targetPosition.y>abajo && targetPosition.x>izquierda)
		ver=1;
	else
		ver=0;
}
