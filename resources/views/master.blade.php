<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Angular-Laravel</title>

    <!-- Bootstrap -->
    <link href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('css/all.css')}}" rel="stylesheet">

   
  </head>
  <body ng-app="LaraApp">
     
       <ui-view></ui-view>
 
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('bower_components/angular/angular.js')}}"></script>
    <script src="{{asset('bower_components/angular-ui-router/release/angular-ui-router.js')}}"></script>
    
    <script src="{{asset('bower_components/satellizer/dist/satellizer.js')}}"></script>
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('js/controllers.js')}}"></script>
    <script src="{{asset('js/factory.js')}}"></script>
  </body>
</html>