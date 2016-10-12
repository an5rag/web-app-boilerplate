/**
 * This file initializes the app and its dependencies.
 * It also establishes the routes and views used across the app.
 */

var myApp = angular.module('zenvisageApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to welcome page
    $urlRouterProvider.otherwise("/welcome");
    //
    // Now set up the states
    $stateProvider
        .state('welcome', {
            url: "/welcome",
            templateUrl: "partials/welcome.html"
        })
        .state('main', {
            url: "/main",
            templateUrl: "partials/main.html"
        })
        .state('main.scatter', {
            url: "/scatter",
            templateUrl: "partials/charts/scatter.html"
        })
        .state('main.line', {
            url: "/line",
            templateUrl: "partials/charts/line.html"
        });
});