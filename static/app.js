function sayHello(x){
    //alert(x);
    var el = document.getElementById("resultat");

    el.innerHTML = "<h1>"+x+"</h1>";
    $.ajax({
        method: "POST",
        url: "/potez",
        data: { button: x }
    })
    .done(function( msg ) {
        //if ( msg === "x" || msg === "o" ){
            //alert("kraj igre, pobjednik je " + msg);
            //return;
        //}
        console.log( msg );
        var model = msg["model"];
        var winner = msg["winner"];

        var i = 0;
        for (const e of model){
            var el = document.getElementById("b" + i);
            el.innerHTML = e;
            i += 1;
        }

        if ( winner === "x"){
            alert("kraj igre, pobjednik je " + winner );
            return;
        }
        if ( winner === "o" ){
            alert("kraj igre, pobjednik je " + winner );
            return;
        }
        if ( winner === "draw" ){
            alert("kraj igre, neriješeno");
            return;
        }
    });
}
