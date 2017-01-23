app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "src/app/pages/reg_login.html",
        controller: "regLoginController"
    })
    .when("/player", {
        templateUrl: "src/app/pages/player.html",
        controller: "playerController"
    })
    .when("/dm", {
        templateUrl: "src/app/pages/dm.html",
        controller: "dmController"
    });
});
