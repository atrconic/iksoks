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
        if ( msg === "x" || msg === "o" ){
            alert("kraj igre, pobjednik je " + msg);
            return;
        }
        if ( msg === "draw" ){
            alert("kraj igre, neriješeno");
            return;
        }
        msg = msg.replace(/'/g, '"');
        var arr = JSON.parse( msg );
        var i = 0;
        for (const e of arr){
            var el = document.getElementById("b" + i);
            el.innerHTML = e;
            i += 1;
        }
    });
}
