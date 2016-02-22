function OnTriggerEnter2D(other: Collider2D) {
	Destroy(other.gameObject);
}