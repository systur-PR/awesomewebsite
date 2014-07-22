angular.module("SysturApp", ["ngRoute"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "views/about.html",
			controller: "AboutController"
		}).otherwise({ redirectTo: "/"});
}]);