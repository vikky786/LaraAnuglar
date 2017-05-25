app.controller('Login', ['$scope', '$http', '$auth', function ($scope, $http, $auth) {

    $scope.user = {};

    $scope.Dologin = (val) => {
        var data = {
            "client_id": 2,
            "client_secret": "EIiGCN3LoncXnzh9xB9pyhIjOT0h1OP0j0yVIqgD",//your secret code
            "grant_type": "password",
            "username": val.username, //"ibechtelar@example.com",
            "password": val.password //"secret"
        }
        $http({
            method: 'post',
            url: 'oauth/token',
            data: data
        }).then((resp) => {

            var Info = resp.data;
            localStorage.setItem('token', Info.access_token);
            localStorage.setItem('expires_in', Info.expires_in);
        }, (resp) => {

        })
    }

//Social login code ignore it.
    $scope.authenticate = (provider) => {
        $auth.authenticate(provider);
        //     //   
        //     FB.login(function(response) {
        //     if (response.authResponse) {
        //         var auth = response.authResponse
        //      console.log('Welcome!  Fetching your information.... ');
        //      FB.api('/me',
        //      {fields: 'id,email,first_name,last_name,link,name'}
        //      , function(response) {
        //        console.log(auth);
        //        $scope.im = "http://graph.facebook.com/" + response.id + "/picture?type=normal"
        //        console.log(response.authResponse);

        //      });
        //     } else {
        //      console.log('User cancelled login or did not fully authorize.');
        //     }
        // });
    };


}])