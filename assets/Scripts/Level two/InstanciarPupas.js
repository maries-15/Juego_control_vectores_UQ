private  var camarapos:Transform;
private var thisTransform:Transform;


function Start () {
	camarapos = GameObject.FindGameObjectWithTag("MainCamera").transform;
	thisTransform = transform;
}

function Update () {
	if(thisTransform.position.x < camarapos.position.x - 15)
	{
		thisTransform.position = new Vector3(camarapos.position.x + 20,Random.Range(-9f,2f),0);
		control.vidas-=1;
	}
}