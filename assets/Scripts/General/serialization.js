import System.Collections.Generic; 
import System.Runtime.Serialization.Formatters.Binary; 
import System.IO;

static var savedGame: objectData;



static function Save() {

	print(Application.persistentDataPath);
	if(!File.Exists(Application.persistentDataPath+"/filename.ext")){
		var fs = new FileStream(Application.persistentDataPath+"/filename.ext", FileMode.Create);
		var bf = new BinaryFormatter();
		savedGame = new objectData();
		bf.Serialize(fs, savedGame);
		fs.Close();
		print(Application.persistentDataPath);
	}
	else Load();


}

static function Load() {
	if(File.Exists(Application.persistentDataPath+"/filename.ext")) {
		var bf = new BinaryFormatter();
		var file = File.Open(Application.persistentDataPath+"/filename.ext", FileMode.Open);
		savedGame = bf.Deserialize(file);
		print(savedGame.typeInit);
		file.Close();
	}
}

static function SaveData(level,image,typeInit) {
	if(level != null){
		savedGame.currentLevel = level;
	}
	if(image != null){
		savedGame.image = image;
	}
	if(typeInit != null){
		savedGame.typeInit = typeInit;
	}
	var fs = new FileStream(Application.persistentDataPath+"/filename.ext", FileMode.Open);
	var bf = new BinaryFormatter();
	bf.Serialize(fs, savedGame);
	fs.Close();
}