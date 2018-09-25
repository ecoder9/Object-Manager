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
		if(arr.constructor === Array)
		{
			for(i=0;i<arr.length;i++)
			{
				if(_self.exist(arr[i]))
				{
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
