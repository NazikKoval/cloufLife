app.controller('loginCtrl', loginCtrl)

loginCtrl.$inject = ['$http'];

function loginCtrl($http){
    
    this.register = function(user_name, email, age, user_sname, password){
        var obj = {
          user_name: user_name,
            email: email,
            age: age,
            user_sname: user_sname,
            password: password
        };
        
        $http.post('http://localhost:3000/register', obj)
        .success((res) => {
            console.log("Success", res);
        })
        .error((err) => {
            console.log("Error in register post", err);
        })
        
    };
    
    
    this.login = function(log_email, log_password){
        var login = {
            log_email: log_email,
            log_password: log_password
        };
        
        $http.post('http://localhost:3000/login', login)
        .success((res) => {
            console.log('Success', res);
            this.auth = res;
            var id = this.auth[0].iduser;
            location.href = "#/user";
            if(location.href = "#/user"){
                document.querySelector('.pageOne').remove();
            }
            
        })
        .error((err) => {
            console.log('Error with login post', err);
        })
    };
};