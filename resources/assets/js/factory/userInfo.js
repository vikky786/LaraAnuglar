app.factory('GetUser', ['$http', function ($http) {

    $http.get('api/user').then(function (res) {
        var user = res.data
        localStorage.setItem('userId', user.id);
    }, function (res) {

    })

}])