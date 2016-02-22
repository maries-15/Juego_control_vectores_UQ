public var mascara: LayerMask;
private var continueVerify:boolean = true;

private var verifyUp:boolean;
public var coliUp1:Transform;
public var coliUp2:Transform;

private var verifyUSide:boolean;
public var coliSide1:Transform;
public var coliSide2:Transform;

function Start () {
}

function FixedUpdate(){
	if(continueVerify){
		verifyUp = GetComponent.<Physics2D>().OverlapArea(coliUp1.position,coliUp2.position,mascara);
		if(verifyUp){
			print("VoltearBalde");
			GetComponent.<Animator>().enabled = true;
			continueVerify = false;
		}
		verifyUSide = GetComponent.<Physics2D>().OverlapArea(coliSide1.position,coliSide2.position,mascara);
		if(verifyUSide){
			print("Tropezar");
			continueVerify = false;
		}
	}
}
