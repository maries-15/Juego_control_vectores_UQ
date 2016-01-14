#pragma strict


/**
 * ClickAndGoV3
 * Autor: Victor Purcallas Marchesi
 * Fecha:02/09/2013
 * Obtiene el Vector3 en donde se hace click con el raton
 * El objeto donde haces clic debe ser rigidbody
 * Se puede introducir desde el Inspector de Unity la posicion inicial del objeto en la escena
 *
 * Licencia:
 * This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.  See the
    GNU General Public License for more details. <http://www.gnu.org/licenses/&gt;.
 *
 **/




	public var posicionInicial:Vector3 ;  
	//Posicion inicial para introducir en el inspector.
	//Las variables publicas en unity pueden cambiarse desde el inspector

	private var camarapos:Transform ;
	private var puntos:int = 0 ;
	public  var MyStyle:GUIStyle; 
	
	


	//Solo estara True tras cargar la escena de la escenat
	
	function Start(){//Cuando inicia el programa
		posicionInicial = this.transform.position;
		camarapos = GameObject.FindGameObjectWithTag("MainCamera").transform;
		//Cambia la posicion a la posicion inicial
	}  
	
	function OnGUI()
	{
		
		
//	   GameObject.Find("Points").GetComponent.<GUIText>().text = "Puntos: "+puntos;  
	   GameObject.Find("Points_c").GetComponent.<UnityEngine.UI.Text>().text = "Puntos: "+puntos;
	}   
	
	function OnTriggerEnter2D(col:Collider2D){
		if(col.tag == "Enemy")
		{
			if(this.GetComponent(AudioSource).isPlaying == false)
						this.GetComponent(AudioSource).Play();

					Destroy(col.gameObject);
					puntos+=1;
		}
		
	} 
	                  
	function Update() {
		if (Input.GetMouseButton(0)) {

			var hit:RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
			
			if(hit.collider.tag != null)
			{
				movimientoContinuo.posicion=hit.point;   
				//transform.position = posicionInicial;


				if(hit.collider.tag == "Enemy")
				{
				
					if(this.GetComponent(AudioSource).isPlaying == false)
						this.GetComponent(AudioSource).Play();

					Destroy(hit.collider.gameObject);
					puntos+=1;
				}
			}

		
	}
}




	
	
