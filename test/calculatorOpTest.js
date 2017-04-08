var calculator=require('../lib/calculatorpro').calop;

//writing test cases
exports['can add two nums']=function(test){
	var result=calculator.addition(3,5);
	test.equal(result,8);
	test.done();
	};
	
	exports['can substract two nums']=function(test){
		var result=calculator.substraction(5,3);
		test.equal(result,2);
		test.done();
	};
	exports['can multiply two nums']=function(test){
		var result=calculator.multiply(5,3);
		test.equal(result,15);
		test.done();
	};
	exports['can divide two nums']=function(test){
		var result=calculator.divide(6,3);
		test.equal(result,2);
		test.done();
	};
