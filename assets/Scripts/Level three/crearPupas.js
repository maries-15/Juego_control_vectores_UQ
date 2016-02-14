#pragma strict
var larva:GameObject;
function Start () {
cargarLarvas();
}

function cargarLarvas()
{
	var posInicial:Vector3;;
	for(var i=0;i<9;i++)
	{
 		posInicial.x=Random.Range(-5.9,8.2);
 		posInicial.y=Random.Range(-2.4,5.8);
 		posInicial.z=0;
		Instantiate(larva, posInicial, this.transform.rotation);
	}
}