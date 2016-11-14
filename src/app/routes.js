app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/app/pages/reg_login.html"
    })
    .when("/player", {
        templateUrl : "src/app/pages/player_index.html"
    })
    .when("/dm", {
        templateUrl : "src/app/pages/dm_index.html"
    });
});
