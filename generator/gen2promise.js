// gen0.js

function forcastWeather(){
	var promise = new Promise(function(resolve,reject){
		var forcast = "sun"
		if(forcast === "sun"){
			resolve("football");
		}
		else if(forcast === "rain"){
			resolve("at home");
		}
		else{
			reject();
		}
		console.log("finish forcast!");
	});
	return promise;
}

var getA = new GenA();
var promise = getA.next().value;

promise.then(function(action){
	getA.next(action);
},function(){
	console.log("error");
})


function * GenA(){

	var whatAction = yield forcastWeather();
	console.log(whatAction);
}

