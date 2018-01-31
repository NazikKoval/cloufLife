    app.config(function($routeProvider){
    $routeProvider
        .when("/user", {
            templateUrl: "mainPage.html",
           controller: "posterCtrl",
              controlleAs: "post"
        })
    $routeProvider.otherwise("/")
});