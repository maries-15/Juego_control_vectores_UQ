var impact : AudioClip; //efecto de sonido cuando se destruye un objeto zancudo
private var continueTigger:boolean = true;

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Player' && continueTigger == true && other.GetType() == UnityEngine.BoxCollider2D){
		print(other.GetType());
		GetComponent.<AudioSource>().PlayOneShot(impact, 1);
		controladorPersonaje.vidas = controladorPersonaje.vidas - 1;
		continueTigger = false;
	}
}