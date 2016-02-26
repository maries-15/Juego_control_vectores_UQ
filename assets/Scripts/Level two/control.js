private var  fuerzaDerecha:float;
private var  myrigidbody2d:Rigidbody2D;
private var  thisTransform:Transform;
private var  anim:Animator;
private var  camarapos:Transform;
private var  puntos:int;
private var level:int;
private var  posicion:float;
public var  MyStyle:GUIStyle;
private var  lim:int = 50;
 var v:Vector3;
public var  ARRIBAStyle:GUIStyle;
public var ABAJOStyle:GUIStyle;
public static var vidas:int;

var windowRect:Rect; //Frame en donde se informara al usuario que ha perdido
public var  desing:GUISkin; //Skin general del juego
var perdio = false; //Variable para controlar el momento en que el usuario pierde
private var ui:GameObject[]; //Objetos de la interfaz con tag ui
var menu  = false;



	// Use this for initialization
	function Start () {
			
		anim = this.GetComponent(Animator);
		thisTransform = transform;
		myrigidbody2d = this.GetComponent(Rigidbody2D);
		camarapos = GameObject.FindGameObjectWithTag("MainCamera").transform;
		ui = GameObject.FindGameObjectsWithTag("ui");
		loadLevel();

	}

	function OnTriggerEnter2D(col:Collider2D){
		if(col.tag == "Enemy")
		{
			if(this.GetComponent(AudioSource).isPlaying == false)
				this.GetComponent(AudioSource).Play();
			col.gameObject.transform.position = new Vector3(camarapos.position.x + 20,Random.Range(-9f,2f),0);
			puntos+=1;
		}
	}
	// Update is called once per frame
	function Update () {
		if(vidas == 0 && menu == false){
			Time.timeScale = 0f;
			perdio = true;
			settingUi(!perdio);
		}
		//VerifyPuntos
		if (puntos == 20) {
			level++;
			serialization.savedGame.level2 = {"subLevel":level, "puntos":puntos, 
				"vidas":vidas, "fuerzaDerecha":10};
			serialization.SaveData(null, null, null);
			fuerzaDerecha = 10f;
			thisTransform.localScale =new Vector3(2f,2f,1f);
		}
		if (puntos == 50) {
			level++;
			serialization.savedGame.level2 = {"subLevel":level, "puntos":puntos, 
				"vidas":vidas, "fuerzaDerecha":12};
			serialization.SaveData(null, null, null);
			fuerzaDerecha = 12f;
			thisTransform.localScale =new Vector3(3f,3f,1f);
		}
		if(puntos == 80){
			print("ganoo");
			level++;
			serialization.savedGame.level2 = {"subLevel":level, "puntos":puntos, 
				"vidas":vidas, "fuerzaDerecha":12};
			serialization.SaveData(3,null,"CI");
			SceneManager.LoadScene("cambioImagen");
		}

		//Key controllers
		if (Input.GetKey (KeyCode.RightArrow)) {//just development
			thisTransform.position = new Vector3(thisTransform.position.x + 1f,thisTransform.position.y,0);;
		}
		if (Input.GetKey (KeyCode.LeftArrow)) {//just development
			thisTransform.position = new Vector3(thisTransform.position.x - 1f ,thisTransform.position.y ,0);;
		}
		if (Input.GetKey(KeyCode.UpArrow)) {
			v = new Vector3(thisTransform.position.x ,thisTransform.position.y + 0.3f,0);
			if(v.y<=3.5f){
				thisTransform.position = v;
			}
		}
		if (Input.GetKey (KeyCode.DownArrow)) {
			v = new Vector3(thisTransform.position.x ,thisTransform.position.y - 0.3f,0);
			if(v.y>=-9){
				thisTransform.position =v;
			}
		}
		//other controllers
		if (myrigidbody2d.velocity.x < 2f && Time.timeScale == 1f && puntos < 20) {
			//thisTransform.position = new Vector3(thisTransform.position.x + 0.1f,thisTransform.position.y,0);
			myrigidbody2d.AddForce (Vector2.right * fuerzaDerecha);
		} else if (myrigidbody2d.velocity.x < 9f && Time.timeScale == 1f && puntos >= 20){
			myrigidbody2d.AddForce (Vector2.right * fuerzaDerecha);
		}
		else if (myrigidbody2d.velocity.x < 19f && Time.timeScale == 1f && puntos >= 50){
			myrigidbody2d.AddForce (Vector2.right * fuerzaDerecha);
		}
		if(Input.GetKeyDown(KeyCode.Space))//solo con fines de desarrollo
		{
			print("Solo en modo desarrollo");
			puntos = 80;
			level = 3;
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

	function Awake(){
		puntos = 0;
		thisTransform = transform;
		posicion = thisTransform.position.x + 5;
	}

	function OnGUI(){
	GUI.skin = desing;
		if (perdio == true ) {

			Debug.Log("PP");
			menu = true;
			windowRect = new Rect (Screen.width / 2 -220, Screen.height / 2 -100, 500, 100);
			windowRect = GUI.Window(0,windowRect,func,"PERDISTE \n");

		}
		else if (menu != true){
			GameObject.Find("Points").GetComponent.<GUIText>().text = "Puntos: "+puntos;  
			GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 480.0f, Screen.height / 320.0f, 1));
			
		//	GUI.Label(new Rect(10,280,0,0),"Score: " + puntos,MyStyle);

			if(GUI.RepeatButton(new Rect(415,180,50,50),"",ARRIBAStyle))
			{
				v = new Vector3(thisTransform.position.x ,thisTransform.position.y + 0.3f,0);
				if(v.y<=3.5f)
				{
					thisTransform.position = v;
				}
			}
			
			if(GUI.RepeatButton(new Rect(415,260,50,50),"",ABAJOStyle))
			{
				v = new Vector3(thisTransform.position.x ,thisTransform.position.y - 0.3f,0);
				if(v.y>=-9)
				{
					thisTransform.position =v;
				}
				
			}
		}		
	}

	function func(){
 		GUI.skin = desing;	
		GUILayout.BeginHorizontal ();
		if (GUILayout.Button ("REINICIAR")) {

			Time.timeScale = 1f;
			settingUi(true);
			perdio = false;	
			menu = false;
			//loadLevel(true);
		}
		if (GUILayout.Button ("SALIR")) {
			SceneManager.LoadScene("menuInicial");
		}
		GUILayout.EndHorizontal ();
	}

	function settingUi(bol)
	{
		var bole:boolean;
		Debug.Log("Bole"+ bole);
		bole = bol;

		Debug.Log(level);
		//gameObject.renderer.enabled = bole;
		
		if(bole == false){
		Time.timeScale = 0f;
	//		fondo.GetComponent(SpriteRenderer).color = Color.gray;
		}
		else{
		//	fondo.GetComponent(SpriteRenderer).color = Color.white;
			Time.timeScale = 1f;
		}
		for(var i=0;i<ui.Length;i++)
		{
			

			print(i+" "+ui[i].name);
			if(ui[i].GetComponent.<Renderer>() != null)
				ui[i].GetComponent.<Renderer>().enabled = bole;

			else if (ui[i].name == "Pez")
				ui[i].GetComponent.<control>().enabled = bole;
			else 
				ui[i].SetActive(bole);

		}
	}

	function loadLevel(){
		vidas = serialization.savedGame.level2['vidas'];
		puntos = serialization.savedGame.level2['puntos'];
		level = serialization.savedGame.level2['subLevel'];
		fuerzaDerecha = parseFloat(""+serialization.savedGame.level2['fuerzaDerecha']);
		if(level == 2){
			thisTransform.localScale =new Vector3(2f,2f,1f);
		}
		else if(level == 3){
			thisTransform.localScale =new Vector3(3f,3f,1f);
		}
	}