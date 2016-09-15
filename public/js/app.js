'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('MovieApp',['ngRoute','angular.filter']);

require('./controller');


app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'views/home.html',
    controller: 'OMDBController'
  })
  .when('/MovieTheaterMap',{
    templateUrl: 'views/MovieTheaterMap.html',
    controller: 'MapController'
})
.when('/Theater',{
  templateUrl: 'views/main.html',
  controller: 'MainController'
})
.when('/bookingTimeTable',{
  templateUrl: 'views/selectShowBooking.html',
  controller: 'BookNowController'
})
.when('/seatSelect',{
  templateUrl: 'views/seatSelect.html',
 controller: 'SelectSeatController'
})
.when('/insertOMDB',{
  templateUrl: 'views/omdbfetching.html',
  controller: 'OMDBController'
})
.when('/makePayment',{
  templateUrl: 'views/payment.html',
  controller: 'PaymentController'
})
.when('/confirmationPage',{
  templateUrl: 'views/confirmation.html',
  controller: 'ConfirmationController'
})
.when('/admin',{
  templateUrl: 'views/admin.html',
  controller: 'AdminController'
})
.when('/login',{
  templateUrl: 'views/login.html'
  // controller: 'AdminController'
}).when('/review',{
  templateUrl: 'views/review.html',
  controller: 'OMDBController'
}).when('/star',{
  templateUrl: 'views/star.html',
  controller: 'SignupController'
}).when('/signup',{
  templateUrl: 'views/signup.html',
  controller: 'SignupController'

});



});
