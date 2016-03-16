function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Player'){
		controlVidaslc.vidas = controlVidaslc.vidas - 1;
		this.tag = "Untagged";
	}
}