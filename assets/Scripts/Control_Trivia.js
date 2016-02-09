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
var arrayQue : Array = new Array();

public static var respuesta = "0";
//Variable para ir llenando la matriz con cada pregunta y conocer el numero de preguntas


function Start () {

	ChargeQuestions();
	AleatoryQuestion();

}

function OnClick(_select : String)
{
	respuesta = _select;
	if(respuesta.Equals(arrayQue[5]))
	{
		print(":D");
	}
	else{
		print(respuesta+":(");
	}
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
 	
 
 	arrayQue = new Array();
 	arrayQue = questions[Random.Range(0,questions.length)];


 	question.text = arrayQue[0];


 	ChangeButtonText(option_1, arrayQue[1]);
 	ChangeButtonText(option_2, arrayQue[2]);
 	ChangeButtonText(option_3, arrayQue[3]);
 	ChangeButtonText(option_4, arrayQue[4]);

 }