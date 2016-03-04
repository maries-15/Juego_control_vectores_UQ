#pragma strict
import UnityEngine.UI;
import System.IO;

public var bien : GameObject;
public var mal : GameObject;
public var option_1:UnityEngine.UI.Button;
public var option_2:UnityEngine.UI.Button;
public var option_3:UnityEngine.UI.Button;
public var option_4:UnityEngine.UI.Button;
public var question:UnityEngine.UI.Text;


//Arreglo de todas las preguntas
private var questions:Array = new Array();
private var conversaciones:String[];

//Arreglo de la pregunta cargada
var arrayQue : Array;

public  var respuesta : String = "0";
private var rUsuario : String = "0"; 
//Variable para ir llenando la matriz con cada pregunta y conocer el numero de preguntas


function Start () {


	ChargeQuestions();
	AleatoryQuestion();

}

function OnClick(_select : String )
{
	
	var _buttonP : Button = pressButton(_select);
	var t:Text = _buttonP.gameObject.GetComponentInChildren(Text);


	if(rUsuario.Equals(respuesta))
	{
		print(":D" + _buttonP);
		_buttonP.GetComponent(Image).color = Color.green;
		//bien.enabled = true;
		bien.SetActive(true);
		clearButtons();

		//_button.GetComponent("Button").colors.pressedColor = hexToColor("24EC1DFF");
	}
	else{
		print(respuesta+":(");
		_buttonP.GetComponent(Image).color = Color.red;
		mal.SetActive(true);
		clearButtons();
	}

	if(questions.length > 0)
	{
		
		AleatoryQuestion();

	}
	else
		SceneManager.LoadScene("cambioImagen");
}

function Update () {

	

}

function ChangeButtonText(_button : Button, _newText : String) {


  
    var myImage : Sprite = Resources.Load("imagenesTrivia/"+_newText, typeof(Sprite)) as Sprite; // Make sure not to include the file extension
     if (_button!=null)
     {

     	
         //Make sure it is added in the Inspector. Or reference it using GameObject.Find.
        // _button.GetComponent(Button).spriteSwap.targetGraphic = myImage;
         _button.GetComponent(Image).sprite = myImage;
        // _button.image.sprite = myImage; // That is right, no need to GetComponent.

     }
 }

 /*
 * Metodo que carga las preguntas, ademas de las posibles respuestas desde un .txt
 * en un array.
 */
 function ChargeQuestions()
 {
 		var fileName : String = "/questions.txt";
 		var conversacionesFileText = Resources.Load("questions") as TextAsset;
		//var path : String = Application.persistentDataPath + fileName;
//		print(path);
		//Variable que guarda cada linea del archivo de texto
		var line;
		//Variable donde finaliza las lineas correspondiente a cada pregunta, son seis por cada una
		var lim = 0;
		arrayQue = new Array();

		conversaciones  = conversacionesFileText.text.Split("\n"[0]);

		for (var r = 0; r < conversaciones.length ; r ++)
			{

				 arrayQue.Push(conversaciones[r]);
				 if (arrayQue.length ==  6)
				 {
				 	questions.Push(arrayQue);
  		  			arrayQue = new Array();
				 }

				
			}

			arrayQue = null;

 }

	 /*
	 *Función para seleccionar una pregunta aleatoria de la matriz de questions.
	 */
	 function AleatoryQuestion()
	 {

	 	

		if (arrayQue != null)
			yield WaitForSeconds (1);

	 	arrayQue = new Array();
	 	var sel = Random.Range(0,questions.length);
	 	arrayQue = questions[sel];
	 	questions.RemoveAt(sel);

	 	question.text = arrayQue[0];
	 	respuesta  = arrayQue[5];

	 	arrayQue = flushArray(arrayQue);

	 	ChangeButtonText(option_1, arrayQue[1]);
	 	ChangeButtonText(option_2, arrayQue[2]);
	 	ChangeButtonText(option_3, arrayQue[3]);
	 	ChangeButtonText(option_4, arrayQue[4]);


	 }


	function clearButtons()
	{
		yield WaitForSeconds (1);
		bien.SetActive(false);
		mal.SetActive(false);
		option_1.GetComponent(Image).color = Color.white;
		option_2.GetComponent(Image).color = Color.white;
		option_3.GetComponent(Image).color = Color.white;
		option_4.GetComponent(Image).color = Color.white;
//		option_1.GetComponent(Button).colors.highlightedColor = Color.white;
//		option_1.GetComponent(Image).color = Color.white;
//		option_2.GetComponent(Image).color = Color.white;
//		option_3.GetComponent(Image).color = Color.white;
//		option_4.GetComponent(Image).color = Color.white;

	}

   function pressButton(_sel : String)
   {
   	 	if(_sel == "1"){
   	 		rUsuario = arrayQue[1];
   	 		return option_1;
   	 		}
   	 	else if (_sel == "2") {
   	 		rUsuario = arrayQue[2];
   	 		return option_2;
   	 	}
   	 	else if (_sel == "3") {
   	 		rUsuario = arrayQue[3];
   	 		return option_3;
   	 	}
   	 	else {

 			rUsuario = arrayQue[4];
 			return option_4;
 		}

   }

   function flushArray(_arr : Array)
   {
   		var arraS = new Array();
   		arraS.Add(_arr[0]);

   	
   		for (var i = 1; i < _arr.length ; i++)
   		{
   			var p = Random.Range(1,_arr.length -1);
   			arraS.Add(_arr[p]);
   			_arr.RemoveAt(p);
   		}
   		arraS.Add(_arr[1]);
   		return arraS;
   }