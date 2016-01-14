using UnityEngine;
using System.Collections;

public class Pajarito_Salta : MonoBehaviour {


	private float fuerzaDerecha = 7f;
	private Rigidbody2D myrigidbody2d;
	private Transform thisTransform;
	private Animator anim;
	private Transform camarapos;
	private int puntos;
	private float posicion;
	public GUIStyle MyStyle;
	private int lim = 50;
	Vector3 v;
	public GUIStyle ARRIBAStyle;
	public GUIStyle ABAJOStyle;



	// Use this for initialization
	void Start () {
		anim = this.GetComponent<Animator>();
		thisTransform = transform;
		myrigidbody2d = this.GetComponent<Rigidbody2D>();
		camarapos = GameObject.FindGameObjectWithTag("MainCamera").transform;
	}
	void OnTriggerEnter2D(Collider2D col){
		if(col.tag == "Enemy")
		{
			if(this.GetComponent<AudioSource>().isPlaying == false)
				this.GetComponent<AudioSource>().Play();
			//Destroy(col.gameObject);
			col.gameObject.transform.position = new Vector3(camarapos.position.x + 20,Random.Range(-9f,2f),0);
			puntos+=1;
			//col.gameObject.transform.localScale = new Vector3(1,Random.Range(1f,4f),1);
		}
		
	}
	// Update is called once per frame
	void Update () {

		if (puntos > 20) {
			fuerzaDerecha = 8.5f;
			thisTransform.localScale =new Vector3(2f,2f,1f);

		}
		if (puntos > 50) {
			fuerzaDerecha = 12f;
			thisTransform.localScale =new Vector3(3f,3f,1f);

		}

		if (Input.GetKey (KeyCode.RightArrow)) {
			thisTransform.position = new Vector3(thisTransform.position.x + 1f,thisTransform.position.y,0);;
			print(thisTransform.position);
				}

		if (Input.GetKey (KeyCode.LeftArrow)) {
			thisTransform.position = new Vector3(thisTransform.position.x - 1f ,thisTransform.position.y ,0);;
			print(thisTransform.position);
		}

		if (Input.GetKey(KeyCode.UpArrow)) {
			v = new Vector3(thisTransform.position.x ,thisTransform.position.y + 0.3f,0);
			if(v.y<=3.5f)
			{
				thisTransform.position = v;
				print(v.y);
			}

		}

		if (Input.GetKey (KeyCode.DownArrow)) {
			v = new Vector3(thisTransform.position.x ,thisTransform.position.y - 0.3f,0);
			if(v.y>=-9)
			{
				thisTransform.position =v;
				print(thisTransform.position);
			}

		}
		if (myrigidbody2d.velocity.x < 2f && Time.timeScale == 1f && puntos < 20) {

			//thisTransform.position = new Vector3(thisTransform.position.x + 0.1f,thisTransform.position.y,0);
			myrigidbody2d.AddForce (Vector2.right * fuerzaDerecha);
		} else if (myrigidbody2d.velocity.x < 9f && Time.timeScale == 1f && puntos >= 20){
			myrigidbody2d.AddForce (Vector2.right * fuerzaDerecha);
		}
		else if (myrigidbody2d.velocity.x < 19f && Time.timeScale == 1f && puntos >= 50){
			myrigidbody2d.AddForce (Vector2.right * fuerzaDerecha);
		}

//		if(Input.GetKeyDown(KeyCode.Space))
//		{
//			myrigidbody2d.AddForce(Vector2.up * fuerzaSalto);
//			anim.SetTrigger("Reproducir");
//			print(transform.position);
//			if(this.GetComponent<AudioSource>().isPlaying == false)
//			this.GetComponent<AudioSource>().Play();
//		}
//		if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
//		{
//			myrigidbody2d.AddForce(Vector2.up * fuerzaSalto);
//			anim.SetTrigger("Reproducir");
//			if(this.GetComponent<AudioSource>().isPlaying == false)
//				this.GetComponent<AudioSource>().Play();
//		}
	}

	void Awake(){
		puntos = 0;
		thisTransform = transform;
		posicion = thisTransform.position.x + 5;
	}

	void OnGUI(){
		GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
		
		GUI.Label(new Rect(0,290,0,0),"Score: " + puntos,MyStyle);

		if(GUI.RepeatButton(new Rect(415,170,50,50),"",ARRIBAStyle))
		{
			v = new Vector3(thisTransform.position.x ,thisTransform.position.y + 0.3f,0);
			if(v.y<=3.5f)
			{
				thisTransform.position = v;
				print(v.y);
			}
		}
		
		if(GUI.RepeatButton(new Rect(415,250,50,50),"",ABAJOStyle))
		{
			v = new Vector3(thisTransform.position.x ,thisTransform.position.y - 0.3f,0);
			if(v.y>=-9)
			{
				thisTransform.position =v;
				print(thisTransform.position);
			}
			
		}
		
	}

}
