module.exports = function($scope, $http,$rootScope,$location){
/*signup insertion control code*/


  $scope.signupinsert = function(){
    $http.post('/signup/signupinsert', $scope.post).success(function (response) {
      });

};


/* star insertion code into database*/
$scope.insertRatingValue=function(r){
$scope.ratingMod.moviename=$rootScope.Movie_name;

var b=$scope.ratingMod.moviename;
var m_name=$scope.ratingMod.moviename;

  $http.get('/signup/ratingDisplay/'+b).success(function (response) {
    //alert(response);
  $scope.ratecount=0;
     var count=0;
     var i;
     try
    {
        for(i=0;i<=response.length;i++)
        {
          count+=parseInt(response[i].ratingvalue);
          //alert(response[i].ratingvalue);
        }

      }
     catch(e){}
      if(count>0)
      {
        $scope.ratecount=Math.round(count*100/(i*5));
      }
      //alert('rating : '+$scope.ratecount);
      document.getElementById("rate").innerHTML=$scope.ratecount;
      $rootScope.avgRating=$scope.ratecount;
});

$http.post('/signup/ratinginsert/'+m_name+'/'+r).success(function(response){

});

};
//$location.path('/review');
};
