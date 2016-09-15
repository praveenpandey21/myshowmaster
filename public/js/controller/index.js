'use strict';

var app = require('angular').module('MovieApp');
app.controller('OMDBController', require('./omdbcontroller'));
app.controller('MainController', require('./mycontroller'));
app.controller('MapController', require('./movieMapping'));
app.controller('BookNowController',require('./bookNow'));
app.controller('SelectSeatController',require('./seatSelectController'));
app.controller('PaymentController',require('./paymentController'));
app.controller('AdminController',require('./adminController'));
app.controller('ConfirmationController',require('./confrimation'));
app.controller('SignupController',require('./signupContoller'));
