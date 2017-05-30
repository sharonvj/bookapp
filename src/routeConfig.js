app.config(['$routeProvider', '$locationProvider', '$httpProvider',function($routeProvider, $locationProvider, $httpProvider){
	$locationProvider.html5Mode(true);
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.patch = {};
	$httpProvider.defaults.headers.get = {};
	$routeProvider.when('/',{
		controller:'bookCntrl',
		templateUrl:'/public/partials/books.html',
		active:'books'
	}).
	when('/add',{
		controller:'bookCntrl',
		templateUrl:'/public/partials/action.html',
		active:'add'
	}).
	when('/edit/book/:id',{
		controller:'bookCntrl',
		templateUrl:'/public/partials/action.html',
		active:'edit'
	}).
	 otherwise({
        redirectTo: '/'
    });
	
}]);
app.constant('api', {baseUrl: 'https://interview-api-staging.bytemark.co/',endpoints:{add:'books',edit:'books',	remove:'books',removeAll:'clean',update:'books',getAll:'books'}});