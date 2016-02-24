#pragma strict
import UnityEngine.UI;
import System.IO;

public var option_1:UnityEngine.UI.Button;
public var option_2:UnityEngine.UI.Button;
public var option_3:UnityEngine.UI.Button;
public var option_4:UnityEngine.UI.Button;
public var question:UnityEngine.UI.Text;
//Arreglo de todas las preguntas
private var questions:Array = new Array();

//Arreglo de la pregunta cargada
var arrayQue : Array;

public  var respuesta : String = "0";
//Variable para ir llenando la matriz con cada pregunta y conocer el numero de preguntas


function Start () {

	ChargeQuestions();
	AleatoryQuestion();

}

function OnClick(_select : String )
{
	
	var _button : Button = pressButton(_select);
	var t:Text = _button.gameObject.GetComponentInChildren(Text);


	if(respuesta.Equals(t.text))
	{
		print(":D" + _button);
		_button.GetComponent(Button).colors.highlightedColor = Color.green;
		//var colorTint : ColorBlock = _button.GetComponent(Button).colors;
		//colorTint.pressedColor = hexToColor("24EC1DFF");
		//_button.GetComponent("Button").colors.pressedColor = hexToColor("24EC1DFF");
	}
	else{
		print(respuesta+":(");
		_button.GetComponent(Button).colors.highlightedColor = Color.red;

	}

	if(questions.length > 0)
		AleatoryQuestion();
}

function Update () {

	

}

function ChangeButtonText(_button : Button, _newText : String) {
     if (_button!=null)
     {
     	var t:Text = _button.gameObject.GetComponentInChildren(Text);
     	t.text = _newText;
     }
 }

 /*
 * Metodo que carga las preguntas, ademas de las posibles respuestas desde un .txt
 * en un array.
 */
 function ChargeQuestions()
 {
 		var fileName : String = "/questions.txt";
		var path : String = Application.persistentDataPath + fileName;
		print(path);
		//Variable que guarda cada linea del archivo de texto
		var line;
		//Variable donde finaliza las lineas correspondiente a cada pregunta, son seis por cada una
		var lim = 0;

		var arrayQues:Array = new Array();

		try {
       
        var sr = new StreamReader(path);

        line = sr.ReadLine();

        while (line != null) {
            
           	arrayQues.Push(line);

            line = sr.ReadLine();
            lim ++;
            if(lim > 5)
            {

            	
            	questions.Push(arrayQues);
            	lim =0;
  		  		arrayQues = new Array();


            }
        }

        sr.Close();
       
    }
    catch (e) {
        // Let the user know what went wrong.
        print("The file could not be read:");
        print(e.Message);
    }
 }

	 /*
	 *Función para seleccionar una pregunta aleatoria de la matriz de questions.
	 */
	 function AleatoryQuestion()
	 {


	 	if(arrayQue != null)	
	 		yield WaitForSeconds (2);

		clearButtons();
	 	arrayQue = new Array();
	 	var sel = Random.Range(0,questions.length);
	 	arrayQue = questions[sel];
	 	questions.RemoveAt(sel);

	 	question.text = arrayQue[0];
	 	var p : int = System.Convert.ToInt32(arrayQue[5]);
	 	respuesta  = arrayQue[p];

	 	arrayQue = flushArray(arrayQue);

	 	ChangeButtonText(option_1, arrayQue[1]);
	 	ChangeButtonText(option_2, arrayQue[2]);
	 	ChangeButtonText(option_3, arrayQue[3]);
	 	ChangeButtonText(option_4, arrayQue[4]);



	 }


	function clearButtons()
	{
		option_1.GetComponent(Button).colors.highlightedColor = Color.yellow;
		option_2.GetComponent(Button).colors.highlightedColor = Color.yellow;
		option_3.GetComponent(Button).colors.highlightedColor = Color.yellow;
		option_4.GetComponent(Button).colors.highlightedColor = Color.yellow;
	}

   function pressButton(_sel : String)
   {
   	 	if(_sel == "1")return option_1;
   	 	else if (_sel == "2") return option_2;
   	 	else if (_sel == "3") return option_3;
   	 	else return option_4;


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