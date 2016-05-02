angular.module('sfs.controller',[])
.controller('SfsController',function($scope,sfsResource){
	$scope.showdtl;
	$scope.getShow=function(){
		sfsResource.query({
			type:'shows',
			showname:$scope.showname
		},function(response){

			$scope.showdtl= response;
			
		});
	};
}).directive('customDirective',function(){
	return{
		restrict:'EA',
		templateUrl:'views/customdirective.html'
	};
});