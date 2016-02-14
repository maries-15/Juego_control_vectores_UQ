import System.Collections.Generic; 
import System.Runtime.Serialization.Formatters.Binary; 
import System.IO;

static var savedGame: Hashtable;
static var cont:int = 0;
static var level:int = 0;

function Start () {

}

function Update () {

}

static function Save() {
	if(!File.Exists(Application.persistentDataPath+"/filename.ext")){
		/**typeInit: Variable para determinar que escenario debe ser cargado, 
		Init: Cargar directamente el level almacenado en la variable level.
		Menu: cargar el menu principal.
		CI: Cargar el escenario que carga las imagenes**/
		savedGame = {"level":"0","subLevel":"1","typeInit":"CI","image":"-1"};
		var fs = new FileStream(Application.persistentDataPath+"/filename.ext", FileMode.Create);
		var bf = new BinaryFormatter();
		bf.Serialize(fs, savedGame);
		fs.Close();
	}
	else Load();
}

static function SaveData(level,subLevel,typeInit,image) {

	if(level != null){
		savedGame["level"] = level;
		this.level = level;
	}
	if(subLevel != null){
		savedGame["subLevel"] = subLevel;
	}
	if(typeInit != null){
		savedGame["typeInit"] = typeInit;
	}
	if(image != null){
		savedGame["image"] = image;
		this.cont = image;
	}


	var fs = new FileStream(Application.persistentDataPath+"/filename.ext", FileMode.Open);
	var bf = new BinaryFormatter();
	bf.Serialize(fs, savedGame);
	fs.Close();
}

static function Load() {
	if(File.Exists(Application.persistentDataPath+"/filename.ext")) {
		var bf = new BinaryFormatter();
		var file = File.Open(Application.persistentDataPath+"/filename.ext", FileMode.Open);
		savedGame = bf.Deserialize(file);
		file.Close();
		verifyLevel();
	}
}

static function verifyLevel(){
	level = parseInt(""+savedGame["level"]);
	var image = savedGame["image"];
	if(!image.Equals("-1")){
		cont = parseInt(""+image);
	}
}