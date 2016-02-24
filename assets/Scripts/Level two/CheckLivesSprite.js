public var spriteLifeCurrent:SpriteRenderer;
public var spriteLifes:SpriteRenderer[];
private var lifesCurrent:int;

function Start () {
	lifesCurrent = control.vidas;
	spriteLifeCurrent = spriteLifes[lifesCurrent];
	spriteLifeCurrent.enabled = true;
	print("aaa");
}

function Update () {
	if(control.vidas != lifesCurrent){
		checkLifes();
	}
}

function checkLifes(){
	spriteLifeCurrent.enabled = false;
	spriteLifeCurrent = spriteLifes[control.vidas];
	spriteLifeCurrent.enabled = true;
	if(control.vidas == 0){
		lifesCurrent = 100;
	}
	else lifesCurrent = control.vidas;
	print("entro");
}