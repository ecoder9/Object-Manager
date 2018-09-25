# Object Manager

// USAGE EXAMPLE

// _obj() REPLACES {} FOR CREATING EMPTY OBJECT
var Person = new _obj();

// INITIALIZE KEYS WITH NULL VALUE (ARRAY REQUIRED)
Person.init(["gender","height","weight","eyeColor"]);

// INITIALIZE KEYS WITH VALUES (OBJECT REQUIRED)
Person.init({gender:"male",height:68,weight:150,eyeColor:"brown"});

// CHECK IF KEY EXISTS IN OBJECT
Person.exist("gender"); 	// RETURNS TRUE
Person.exist("hairColor"); 	// RETURNS FALSE

// RETURNS THE NON FUNCTION KEYS
Person.keys();

// RETURNS THE NON FUNCTION KEYS AND VALUES
Person.data();

// RETURN SIZE OF OBJECT
Person.size();

// REMOVE PROPERTY FROM OBJECT
Person.remove("eyeColor");

// REMOVE LIST OF PROPERTIES FROM OBJECT
Person.destroy(["height","weight"]);

// RETREIVE NORMAL OBJECT PROPERTY VALUE
Person.gender;
