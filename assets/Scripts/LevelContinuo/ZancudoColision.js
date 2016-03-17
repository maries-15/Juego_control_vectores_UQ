var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo
private var continueTigger:boolean = true;

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Player' && continueTigger == true){
		GetComponent.<AudioSource>().PlayOneShot(impact, 1);
		controlVidaslc.vidas = controlVidaslc.vidas - 1;
		continueTigger = false;
	}
}