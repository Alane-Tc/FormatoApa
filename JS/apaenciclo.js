window.addEventListener("load", function () {
    var va1 = document.querySelector("#value1");
    var va2 = document.querySelector("#value2");
    var va3 = document.querySelector("#value3");
    var va4 = document.querySelector("#value4");
    var va5 = document.querySelector("#value5");
    var va6 = document.querySelector("#value6");
    var va7 = document.querySelector("#value7");
    var va8 = document.querySelector("#value8");
    var format = document.querySelector("#parrafo");
    var button = document.querySelector("#button_book");
    var div = document.querySelector("#Menj_random");

    function show() {
        div.style.display = "block";
        div.style.background = "#00b4d8";
    }

    function Apa() {
        if (va1.value != "" && va2.value != "" && va3.value != "" && va4.value != "" && va5.value != "" && va6.value != "" && va7.value != "" && va8.value != "") {
            show();
            format.innerHTML = ("Cópiala y pégala en tu documento.<br />   " + va1.value + ". " + va2.value + ". " + va3.value + '. En ' + va4.value + " (" + va5.value + ", " + va6.value + ") " + va7.value + ": " + va8.value + ". ");
        } else {
            alert("Te falto llenar algun dato, verifique de nuevo");
        }
    }


    button.addEventListener("click", function () {
        Apa();
    });

});