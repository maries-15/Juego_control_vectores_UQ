var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Enemy'){
		GetComponent.<AudioSource>().PlayOneShot(impact, 1);
		controlVidaslc.vidas = controlVidaslc.vidas - 1; 
	}
}