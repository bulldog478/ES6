// gen1.js
function co(GenFunc){
	return function(cb){
		var gen = new GenFunc();
		next();
		function next(err,data){
			if(gen.next){
				var ret = gen.next(data);
				if(ret.done){
					cb && cb(data);
				}else{
					ret.value(next);
				}
			}
		}
	}
}

function forcastWeather(cb){
	var forcast = "sun";
	var action = null;
	var err;
	if(forcast === "sun"){
		action = "football"
	}
	else if(forcast ==="rain"){
		action = "at home";
	}
	else{
		err ="no forcast";
	}
	cb && cb(err,action);
}

function * GenA(){
	var action = yield forcastWeather;
}

var callFn = co(GenA);

callFn(function(action){
	console.log(action);
})