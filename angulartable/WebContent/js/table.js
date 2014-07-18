var mytable=angular.module('mytable',[]);
mytable.controller('myCntl',function($scope,$http){
	$http({
		url:"data/guitar.json",
		method:"GET"
			
	})
	.success (function(resp){
		$scope.myCntl=resp.allProducts;	
	});
	
	
	
$scope.p=false;
$scope.addData=function(){
	$scope.p=true;
};
$scope.submitData=function(){
	var name={
			"product_discription":$scope.proinfo,
			"shipping_details":$scope.proinfo1,
			"custmer_reviews":$scope.proinfo2,
			"price_de":$scope.proinfo3
	};
	
	$scope.myCntl.push(name);
	$scope.p=false;
};

$scope.alpha=function(index){
	$scope.myCntl.splice(index,1);
};
	
});

mytable.controller('myCntl2',function($scope){
	
	$scope.edit=false;
	
	$scope.submitinfo=function(){
		
		$scope.s=true;
		$scope.edit=true;
	};
	
$scope.editinfo=function(){
	$scope.s=false;
	$scope.edit=false;
};
	
});

mytable.controller('myCntl3',function($scope,$window){
	


	

	mytable.directive('targetBlank', function() {
		
	  return {
	    compile: function(element) {
	      var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
	      elems.attr("target", "_blank");
	    }
	  };
	});
	
});






















