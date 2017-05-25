app.factory('httpRequestInterceptor', function () {
    var token = 'Bearer '+localStorage.getItem('token');
  return {
    request: (config) => {

      config.headers['Authorization'] = token;
      config.headers['Accept'] = 'application/json;odata=verbose';

      return config;
    }
  };
});
