/* This is the javaScript file to load angular module */

var app = angular.module('LaraApp', ['ui.router', 'satellizer']);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
});


// window.fbAsyncInit = function() {
//     FB.init({
//       appId            : '1491305697610414',
//       autoLogAppEvents : true,
//       xfbml            : true,
//       version          : 'v2.8'
//     });
//     FB.AppEvents.logPageView();
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
app.config(function ($authProvider) {



  // Optional: For client-side use (Implicit Grant), set responseType to 'token' (default: 'code')
  $authProvider.facebook({
    clientId: '1491305697610414',
    responseType: 'code'
  });
});

app.config(function ($stateProvider, $urlRouterProvider) {

  var helloState = {
    name: 'login',
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'Login'

  }

  var aboutState = {
    name: 'dashboard',
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller: 'Dashboard'
  }

  var db = {
    name: 'dashboard.db',
    url: '/db',
    templateUrl: 'templates/db.html',
    controller: 'Dashboard'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(db);

  $urlRouterProvider.otherwise('/')
});
