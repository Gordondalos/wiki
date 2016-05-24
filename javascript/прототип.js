прототип это тоже самое что класс

то есть деалем прототип от него делаем другие обьекты

это прототип

var Person = {
	constructor: function(name, age, gender){
		this.name = name;
		this.age = age;
		this. gender = gender;
	}
	
	greet: function(){
		col("hi my name is"+ this.name)
	}
};


так создался обьек из прототипа
// var WebDeveloper = Object.create(Person).constructor("Вася" , "25", "mane");



// переделаем конструктор учитывая родителя но со своими полями
 var WebDeveloper = Object.create(Person);
 WebDeveloper.constructor = function(ame, age, gender, skills){
	 Person.constructor.apply(this, arguments);
	 this.skills = skills || [];
	 return this;
 };
 WebDeveloper.develop = function(){
	 console.log("Working ...");
 }
 
 
 
 var developer = Object.create(WebDeveloper).constructor("John",21,"male",["html","css","js","php"]);
 
 console.log(developer.skills);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

