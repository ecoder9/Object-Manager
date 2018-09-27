function _obj()
{
	
	// OBJECT INTIALIZATION FROM OBJECT OR ARRAY
	this.init = function(v){
				
		if(this.tof(v,"a") && v.length > 0)
		{
			for(i=0;i<v.length;i++)
			{
				if(this.tof(v[i],"s"))
				{
					this[v[i]] = null;
				}
			}
			return {result: true};
		}
		else if(this.tof(v,"o") && this.props(v).length > 0)
		{
			for(var key in v)
			{
				this[key] = v[key];
			}
			return {result: true};
		}
		else
		{
			return {result: false, error: "Invalid data type"};
		}
	}
	
	// RETREIVE OBJECT DATA WITHOUT FUNCTIONS
	this.attr = function()
	{
		var a = {}, k = this.keys();
   		for(i=0;i<k.length;i++)
			{
				a[k[i]] = this[k[i]];
			}
   		return a;
	}
	
	// FIND IF KEY AND VALUE PAIR MATCH
	this.compare = function(k,v) {
		var r;
		if(this.tof(k,"s") && this.tof(v,"s")){
			if(this.has(k))
			{
				r = (this[k] === v) ? {result: true} : {result: false, value: this[k]}
			}
			else
			{
				r = {result: false, error: "Property does not exist"}
			}
		}
		else
		{
			r = {result: false, error: "Invalid parameter"}
		}
		return r;
	}
	
	// REMOVE AN ARRAY OF PROPERTIES
	this.destroy = function(arr)
	{
		var r = [];
		arr = (arr == null) ? this.keys() : arr;
	
		if(this.tof(arr,"a"))
		{
			for(i=0;i<arr.length;i++)
			{
				(this.has(arr[i])) ? this.remove(arr[i]) : r.push({index: i, key: arr[i]});
			}
		}
		else
		{
			r = {result: false, error: "Array was not passed"}
		}
		
		if(arr.length == 0) r = {result: true}
		
		return r;
	}
	
	// CHECK IF PROPERTY EXISTS
	this.has = function(prop)
	{
		return this.hasOwnProperty(prop);
	}
	
	// RETREIVE PROPERTIES FROM "THIS" OBJECT
	this.keys = function()
	{
   		return this.props(this);
	}
	
	// GET ALL PROPERTIES FROM SPECIFIED OBJECT
	this.props = function(v)
	{
		var prop = [];
   		for(var key in v)
			{
				if(!this.tof(v[key],"f")) prop.push(key);
			}
   		return prop;		
	}
	
	// REMOVE AND OBJECT PROPERTY THAT IS NOT A FUNCTION
	this.remove = function(prop)
	{
		if(!this.tof(this[prop],"f"))
		{
			delete this[prop];
		}
		return {result: (!this.has(prop))};
	}
	
	// GET SIZE OF OBJECT WITHOUT FUNCTIONS
	this.size = function()
	{
		return this.keys().length;
	}
	
	// GET TYPEOF VARIABLE
	this.tof = function(v,type) 
	{ 
		switch(type)
		{
			case "f":
				return (typeof v === "function") ? true : false;
			break;
			case "s":
				return (typeof v === "string") ? true : false;
			break;
			case "o":
				return (v.constructor === Object) ? true : false;
			break;
			case "a":
				return (v.constructor === Array) ? true : false;
			break;
			default:
				return null;
			break;
		}
	}	
}
