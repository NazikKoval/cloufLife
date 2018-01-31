app.controller('posterCtrl', posterCtrl)

function posterCtrl(){
    this.user = [
        {
            name: "Nazar"
            , sname: "Koval"
            , age: "19"
            , city: 'Lviv'
            , description: "SOME TEXT"
        }
    ];
        this.friend = [
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
    this.text = [
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
    this.send = function (tema, message) { 
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
            tem: this.tema
            , mes: this.message
            , today: date.toLocaleString("en-US", options)
        }
        this.text.splice(0, 0, add);
        document.querySelector('.inp').value = " ";
        document.querySelector('.tem').value = " ";
    }
    this.remove = function (key) {
        for (var i in this.text) {
            if (this.text[i].mes === key.mes) {
                this.text.splice(i, 1);
            }
        }
    }
}