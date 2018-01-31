app.controller("myCtrl", function ($scope) {
    $scope.user = [
        {
            name: "Nazar"
            , sname: "Koval"
            , age: "19"
            , city: 'Lviv'
            , description: "SOME TEXT"
        }
    ];
        $scope.friend = [
        {
            friends: 'Roman nnnnn'
        },
            {
            friends: 'Roman nnnnn'
        },
            {
            friends: 'Roman sd'
        },
            {
            friends: 'Roman nnnnn'
        }
    ];
    $scope.text = [
        {
            tem: "Hello"
            , mes: "Hello my friends"
            , today: new Date().toUTCString()
        }
        , {
            tem: "Hello 2121212"
            , mes: "Hello my friends 2121212"
            , today: new Date().toUTCString()
        }
    ];
    $scope.send = function () { 
        var date = new Date();
        var options = {
            year: 'numeric'
            , month: 'long'
            , day: 'numeric'
            , weekday: 'long'
            , timezone: 'UTC'
            , hour: 'numeric'
            , minute: 'numeric'
            , second: 'numeric'
        };
        var add = {
            tem: $scope.tema
            , mes: $scope.message
            , today: date.toLocaleString("en-US", options)
        }
        $scope.text.splice(0, 0, add);
        document.querySelector('.inp').value = " ";
        document.querySelector('.tem').value = " ";
    }
    $scope.remove = function (key) {
        for (var i in $scope.text) {
            if ($scope.text[i].mes === key.mes) {
                $scope.text.splice(i, 1);
            }
        }
    }
})