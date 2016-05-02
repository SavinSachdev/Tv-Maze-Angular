angular.module('sfs.service',[])
.factory('sfsResource',function ($resource){
	  { q: '*' }
	return $resource('/api/:type');
});
