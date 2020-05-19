   angular.module('app').controller('patientsCtrl', ['$scope', '$http', function($scope, $http){
    $scope.patient = "Jerome";
    initFn();
    function initFn(){
        $http.get('https://reqres.in/api/users?page=2').then(successCallback, errorCallback);

        function successCallback(response){
            $scope.formatData(response);
        }
        function errorCallback(error){
            console.log(error);
        }   
    }

    $scope.formatData = function(response){
        $scope.firstName = [];
        $scope.lastName = [];
        angular.forEach(response.data.data,function(data){
            $scope.firstName.push(data.first_name);
            $scope.lastName.push(data.last_name);
        })
    }

    $scope.createData = function(data){
        var dataObj = {
            "name": "morpheus",
            "job": "leader"
        };
        $http.post("https://reqres.in/api/users", dataObj).then(successCallback, errorCallback);
        function successCallback(response){
            console.log(response);
        }
        function errorCallback(error){
            console.log(error);
        }
    }

    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
    
}]);