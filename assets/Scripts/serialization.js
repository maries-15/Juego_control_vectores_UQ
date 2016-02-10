import System.Collections.Generic; 
import System.Runtime.Serialization.Formatters.Binary; 
import System.IO;

static var savedGame: Hashtable;
static var cont:int = 0;

function Start () {

}

function Update () {

}


static function Save() {
	if(!File.Exists(Application.persistentDataPath+"/filename.ext")){
		savedGame = {"level":"-1","image":"-1"};
		var fs = new FileStream(Application.persistentDataPath+"/filename.ext", FileMode.Create);
		var bf = new BinaryFormatter();
		bf.Serialize(fs, savedGame);
		fs.Close();
	}
	else Load();
}

static function SaveData(image,level) {
	if(image !== null){
		savedGame["image"] = image;
	}
	if(level !== null){
		savedGame["level"] = level;
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
	var level:String = savedGame["level"];
	var image = savedGame["image"];
	print(image);
	if(!image.Equals("-1")){
		cont = parseInt(""+image);
	}
	print(cont);
}