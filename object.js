function _obj()
{
	var _self = this;
	
	// OBJECT INTIALIZATION FROM OBJECT OR ARRAY
	this.init = function(v){
		if(v.constructor === Array)
		{
			for(i=0;i<v.length;i++)
			{
				if(typeof v[i] === "string")
				{
					_self[v[i]] = null;
				}
			}
		}
		else if(v.constructor === Object)
		{
			for(var key in v)
			{
				_self[key] = v[key];
			}
		}
		else
		{
			console.log("Invalid data type");
		}
	}
	
	// RETREIVE OBJECT DATA WITHOUT FUNCTIONS
	this.data = function()
	{
		var attr = {}, k = _self.keys();
   		for(i=0;i<k.length;i++)
			{
				attr[k[i]] = this[k[i]];
			}
   		return attr;
	}
	
	// RESET AN ARRAY OF PROPERTIES
	this.destroy = function(arr)
	{
		console.log(arr.constructor === Array);
		if(arr.constructor === Array)
		{
			for(i=0;i<arr.length;i++)
			{
				console.log(_self.exist(arr[i]));
				if(_self.exist(arr[i]))
				{
					console.log(arr[i]);
					_self.remove(arr[i]);
				}	
				else
				{
					console.log(arr[i] + " does not exist");
				}
			}
		}
	}
	
	// CHECK IF PROPERTY EXISTS
	this.exist = function(prop)
	{
		return _self.hasOwnProperty(prop);
	}
	
	// RETREIVE OBJECT KEYS WITHOUT FUNCTIONS
	this.keys = function()
	{
   		var keys = [];
   		for(var key in this)
			{
				if(typeof _self[key] != "function") 
				{
					keys.push(key);
				}
			}
   		return keys;
	}
	
	// REMOVE AND OBJECT PROPERTY THAT IS NOT A FUNCTION
	this.remove = function(prop)
	{
		if(typeof _self[prop] != "function") 
		{
			delete _self[prop];
		}
		else
		{
			console.log("Unable to remove property");
		}
	}
	
	// GET SIZE OF OBJECT WITHOUT FUNCTIONS
	this.size = function()
	{
		return _self.keys().length;
	}

}

// USAGE EXAMPLE

/*

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

*/
