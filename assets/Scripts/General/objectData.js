#pragma strict  

class objectData extends System.Object {

    /**typeInit: Variable para determinar que escenario debe ser cargado, 
    Init: Cargar directamente el level almacenado en la variable level.
    Menu: cargar el menu principal.
    CI: Cargar el escenario que carga las imagenes**/

    var typeInit:String = "CI";
    var currentLevel:int = 0;
    var image:int = 0;
    var level0: Hashtable = {"subLevel":1, "puntos":0};
    var level1: Hashtable = {"subLevel":20, "puntos":0,"Sprite":"life3"};
    var level2: Hashtable = {"subLevel":1, "puntos":0};
    var level3: Hashtable = {"subLevel":1, "puntos":0};
}