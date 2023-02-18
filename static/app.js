function sayHello(x){
    $.ajax({
        method: "POST",
        url: "/potez",
        data: { button: x }
    })
    .done(function( msg ) {
        var model = msg["model"];
        var winner = msg["winner"];

        //update game board
        var i = 0;
        for (const e of model){
            var el = document.getElementById("b" + i);
            el.innerHTML = e;
            i += 1;
        }

        //update overall player score
        document.getElementById("xw").innerHTML = msg["xw"]
        document.getElementById("ow").innerHTML = msg["ow"]
        document.getElementById("dr").innerHTML = msg["dr"]

        //show pop up with winner info
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
