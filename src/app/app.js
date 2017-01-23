var app = angular.module("dnd-helper", ["ngRoute", "ngCookies"]);

app.factory("userPersistenceService", [
	"$cookies", function($cookies) {
		var userName = "arco";

		return {
			setCookieData: function(username) {
				userName = username;
				$cookies.put("userName", username);
			},
			getCookieData: function() {
				userName = $cookies.get("userName");
				return userName;
			},
			clearCookieData: function() {
				userName = "";
				$cookies.remove("userName");
			}
		}
	}
]);
