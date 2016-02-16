﻿#pragma strict

import UnityEngine.SceneManagement;

	public var  vida:int;
	public var  desing:GUISkin;

	
	public var  CONTINUARStyle:GUIStyle;
	public var  REINICIARStyle:GUIStyle;
	public var SALIRStyle:GUIStyle;
	public var  Mostrar:boolean = false;

	public var  Herramienta:GameObject ;
	private var  Mover:Component;
	private var click:clickAndGo;
	public var posicionInicial:Vector3;
	
	private var ui:GameObject[];
	public var level:int;
	private var fondo:GameObject;
	
	public var life3:Sprite;
	public var life2:Sprite;
	public var life1:Sprite;
	public var life0:Sprite;
	public var barraVidas:GameObject;
	public var windowRect:Rect;

	public var mostrado = false;


	// Use this for initialization
	function Start () {

		ui = new GameObject[9];
		Mover = Herramienta.GetComponent(clickAndGo);

		windowRect = new Rect (Screen.width / 2 -220, Screen.height / 2 -100, 500, 100);
		ui = GameObject.FindGameObjectsWithTag("ui");
		fondo = GameObject.Find("Fondo");
		if(level!=2)
			posicionInicial = Herramienta.transform.position;

	}
	
	// Update is called once per frame
	function Update () {

		if (vida >3){ 
			vida = 3; 
			barraVidas.GetComponent(UnityEngine.UI.Image).sprite = life3;
		} 
		 
		if (vida == 2){ 
			barraVidas.GetComponent(UnityEngine.UI.Image).sprite = life2;
		} 
		if (vida == 1){ 
			barraVidas.GetComponent(UnityEngine.UI.Image).sprite = life1;
		} 
		if (vida == 0 && mostrado == false){ 
			
			barraVidas.GetComponent(UnityEngine.UI.Image).sprite = life0;
			//(Mover as MonoBehaviour).enabled = false;
			Time.timeScale =  0f;
			
			//Herramienta.SetActive(false);
			Mostrar = true;

			settingUi(false);
			mostrado = true;
			//OnGUI();
		} 
	}
	
	function OnTriggerEnter2D(col:Collider2D){
		if(col.tag == "Enemy")
		{
			vida-=1;
			//Update();
		}
		
	}
	
 	function func(){
 		GUI.skin = desing;	
				
		GUILayout.BeginHorizontal ();
		if (GUILayout.Button ("Reiniciar")) {

			
			Mostrar = false;
			SceneManager.LoadScene("level"+level);
			settingUi(true);


			mostrado = false;
			
		}
		if (GUILayout.Button ("Salir")) {
			Mostrar = false;
			if(level == 0)
				SceneManager.LoadScene("menuInicial");
				//Application.LoadLevel("menuInicial");
			else
				SceneManager.LoadScene("Menu");
				//Application.LoadLevel("Menu");	
			settingUi(true);
			
		}
		
		GUILayout.EndHorizontal ();
		
						
	}
	
	function OnGUI(){
		//GUI.skin = desing;
		if (Mostrar) {
			windowRect = GUI.Window(0,windowRect,func,"Has Perdido \n");
			
			
		}
	
	}

	function settingUi(bol)
	{
		var bole:boolean;
		Debug.Log("Bole"+ bole);
		bole = bol;

		Debug.Log(level);
		//gameObject.renderer.enabled = bole;
		
		if(level == 0)
		{
			gameObject.GetComponent.<GUITexture>().enabled = bole;
		}
		
		if(level == 2 || level == 1 )
		{
			//	gameObject.renderer.enabled = bole;
			Herramienta.GetComponent(movimientoContinuo).posicion = posicionInicial;
			
		}	
		Herramienta.SetActive(bole);
		if(bole == false)
		{
		Time.timeScale = 0f;
		fondo.GetComponent(SpriteRenderer).color = Color.gray;
		}
		else
		{
			fondo.GetComponent(SpriteRenderer).color = Color.white;
			Time.timeScale = 1f;
		}

		for(var i=0;i<ui.Length;i++)
		{
			//Debug.Log(ui[i].name);
			//print (ui.Length);
			
			if(ui[i].GetComponent.<Renderer>() != null)
				ui[i].GetComponent.<Renderer>().enabled = bole;
			
				
			if(ui[i].name.Equals("Points")||ui[i].name.Equals("Canvas_menu"))	
				ui[i].SetActive(bole);


			if(ui[i].name.Equals("Zancudo"))	
				ui[i].SetActive(bole);
		}


	
		
	}	
	