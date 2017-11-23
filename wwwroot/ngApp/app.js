var myApp = angular.module("myApp", [ "ui.router", "ngResource" ]);
myApp.controller("MainController", MainController);
myApp.controller("EmployeeController", EmployeeController);
myApp.controller("OrchidDetailsController", OrchidDetailsController);
myApp.controller("AboutController", AboutController);
myApp.service("$employeeService", EmployeeService);
myApp.service("$orchidService", OrchidService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/ngApp/views/main.html",
            controller: MainController,
            controllerAs: "controller"
        }).state("employees", {
            url: "/employees",
            templateUrl: "/ngApp/views/employees.html",
            controller: EmployeeController,
            controllerAs: "controller"
        }).state("about", {
            url: "/about",
            templateUrl: "/ngApp/views/about.html",
            controller: AboutController,
            controllerAs: "controller"
        }).state("shopOrchids", {
            url: "/shopOrchids",
            templateUrl: "/ngApp/views/shopOrchids.html",
            controller: AboutController,
            controllerAs: "controller"
        }).state("policy", {
            url: "/policy",
            templateUrl: "/ngApp/views/policy.html",
            controller: AboutController,
            controllerAs: "controller"
        }).state("controlPanel", {
            url: "/controlPanel",
            templateUrl: "/ngApp/views/controlPanel.html",
            controller: AboutController,
            controllerAs: "controller"
        }).state("contact", {
            url: "/contact",
            templateUrl: "/ngApp/views/contact.html",
            controller: AboutController,
            controllerAs: "controller"
        }).state("orchidDetails", {
            url: "/orchidDetails/:id",
            templateUrl: "/ngApp/views/orchidDetails.html",
            controller: OrchidDetailsController,
            controllerAs: "controller"
        });

    // Handle request for non-existent route
    $urlRouterProvider.otherwise("/notFound");

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});
