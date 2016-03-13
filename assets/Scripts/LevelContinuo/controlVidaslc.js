var vidasSprites:Sprite[];
static var vidas:int = 3;
private var update :boolean = false;

function Start () {

}

function Update () {
	if(vidas >= 0){
		if(this.GetComponent(SpriteRenderer).sprite.name != vidasSprites[vidas].name){
			this.GetComponent(SpriteRenderer).sprite = vidasSprites[vidas];
		}
	}
	else{
		print("perdio");
	}
	
}