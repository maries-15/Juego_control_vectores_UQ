function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Player'){
		controladorPersonaje.puntuacion+=5;
		Destroy(this.gameObject);
	}
}