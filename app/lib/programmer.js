class Programmer {
  constructor(name, language = "ruby") {
    this.name = name;
    this.language = language;
  }
 
  evangelize(){
    return (this.name + ": " + this.language.toUpperCase() + " IS THE BEST LANGUAGE EVER");
  }

}




export var bestLanguages = ["Ruby", "Elixir"];
export var addJavaScript = function(array){
  return array + "JavaScript";
};
export default Programmer;


