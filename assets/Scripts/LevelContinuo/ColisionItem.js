private var animator: Animator;
public var reference: GameObject;

function Start () {
	animator = GetComponent.<Animator>();
}

function Update () {
	if(reference.activeSelf == true){
	//		print('Puntuacion');
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Player'){
		animator.enabled = true;
		this.tag = 'Untagged';
	}
}