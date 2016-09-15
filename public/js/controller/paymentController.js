module.exports = function($scope, $http,$rootScope, $location){

var name_val,email_val,contact_val,cad_no_val,exp_mon_val,exp_yr_val,cvv_no_val;
$scope.confirmPage =function(){


name_val=document.getElementById('p_name').value;
 email_val=document.getElementById('email').value;
 contact_val=document.getElementById('contact').value;
cad_no_val=document.getElementById('cardNumber').value;
exp_mon_val=document.getElementById('expMonth').value;
 exp_yr_val=document.getElementById('expYear').value;
 cvv_no_val=document.getElementById('cvCode').value;

/* payment user name field validation*/
if(!/^[a-zA-Z]*$/g.test(name_val))
{
  alert("enter only alphabates");
  return false;
}

/*payment phone numbar field validation*/

if(contact_val=="" || contact_val==null){
  alert("fill contact no");
  return false;
}
else {
  for(var i=0;i < contact_val.length;i++)
  {
  			if((contact_val.charCodeAt(i)>=48 && contact_val.charCodeAt(i)<=57) && contact_val.length==10)
  				{}
  			else{
  			        alert("phone no should be numeric and 10 digit long");
                return false;
              }
  }
}

/*payment card numbar field validation*/
if (cad_no_val=="" || cad_no_val==null) {
alert("fill card no");
return false;
}
else {
  for(var i=0;i < cad_no_val.length;i++)
  {
  			if((cad_no_val.charCodeAt(i)>=48 && cad_no_val.charCodeAt(i)<=57) && cad_no_val.length==16)
  				{}
  			else{
  			        alert("phone no should be numeric and 16 digit long");
                return false;
              }
  }
}

/*payment expiry month field validation*/
if (exp_mon_val=="" || exp_mon_val==null) {
alert("fill expiry month");
return false;
}
else {
  for(var i=0;i < exp_mon_val.length;i++)
  {
  			if((exp_mon_val.charCodeAt(i)>=48 && exp_mon_val.charCodeAt(i)<=57) && exp_mon_val.length==2 )
  				{}
  			else{
  			        alert("card expiry month should be 1 to 12 ");
                return false;
              }
  }
}

/*payment expiry year field validation*/
if (exp_yr_val=="" || exp_yr_val==null) {
  alert("fill expiry year");
  return false;
}
else {
  for(var i=0;i < exp_yr_val.length;i++)
  {
  			if((exp_yr_val.charCodeAt(i)>=48 && exp_yr_val.charCodeAt(i)<=57) && exp_yr_val.length==4)
  				{}
  			else{
  			        alert("card expiry year should be 2017 and above ");
                return false;
              }
  }
}

/*payment CVV numbar field validation*/
if (cvv_no_val=="" || cvv_no_val==null) {
  alert("fill CVV Number");
  return false;
}
else {
  for(var i=0;i < cvv_no_val.length;i++)
  {
  			if((cvv_no_val.charCodeAt(i)>=48 && cvv_no_val.charCodeAt(i)<=57) && cvv_no_val.length==3)
  				{}
  			else{
  			        alert("CVV no should be 3 digit long");
                return false;
              }
  }
}



t=$rootScope.Moviename,
c=$rootScope.city,
t1=$rootScope.CinemaName,
s=$rootScope.showTime,
sn=$rootScope.TotalSeat,
sq=$rootScope.coutSeat,
a=$rootScope.Amount,
e=$scope.pmt.email,
p=$scope.pmt.contact,
dt=$rootScope.rootDate,

  $http.post('/pay/newTicket/'+t+'/'+c+'/'+t1+'/'+s+'/'+sn+'/'+sq+'/'+a+'/'+e+'/'+p+'/'+dt).success(function (response){});
$location.path('/confirmationPage');
};
};
