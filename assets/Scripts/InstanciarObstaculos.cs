using UnityEngine;
using System.Collections;

public class InstanciarObstaculos : MonoBehaviour {

	private Transform camarapos;
	private Transform thisTransform;
	// Use this for initialization
	void Awake () {
		camarapos = GameObject.FindGameObjectWithTag("MainCamera").transform;
		thisTransform = transform;
	}
	
	// Update is called once per frame
	void Update () {
		if(thisTransform.position.x < camarapos.position.x - 15)
		{
			thisTransform.position = new Vector3(camarapos.position.x + 12,0,0);
			//thisTransform.localScale = new Vector3(1,Random.Range(1f,4f),1);
		}
	}
}
