'use strict';

var app = angular.module('voteApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
    $routeProvider.when(
    	'/vote', 
    	{
    		templateUrl: 'partials/vote.html', 
    		controller: 'VoteController'
    	});
    $routeProvider.when(
    	'/voteresult', 
    	{
    		templateUrl: 'partials/voteresult.html', 
    		controller: 'VoteViewController'
    	});
    $routeProvider.otherwise(
        {
            redirectTo: '/vote'
        });
});
