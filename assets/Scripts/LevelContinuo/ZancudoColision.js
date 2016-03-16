var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Player'){
		GetComponent.<AudioSource>().PlayOneShot(impact, 1);
		controlVidaslc.vidas = controlVidaslc.vidas - 1;
		this.tag = "Untagged";
	}
}