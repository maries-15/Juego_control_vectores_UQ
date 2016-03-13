function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == 'Enemy'){
		controlVidaslc.vidas = controlVidaslc.vidas - 1; 
	}
}