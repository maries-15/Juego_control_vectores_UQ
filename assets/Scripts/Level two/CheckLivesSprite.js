public var spriteLifeCurrent:SpriteRenderer;
public var spriteLifes:SpriteRenderer[];
private var lifesCurrent:int;

function Start () {
	lifesCurrent = control.vidas;
	spriteLifeCurrent = spriteLifes[lifesCurrent];
	spriteLifeCurrent.enabled = true;
}

function Update () {
	if(control.vidas != lifesCurrent && control.vidas > 0){
		checkLifes();
	}
}

function checkLifes(){
	spriteLifeCurrent.enabled = false;
	spriteLifeCurrent = spriteLifes[control.vidas];
	spriteLifeCurrent.enabled = true;
	lifesCurrent = control.vidas;
}