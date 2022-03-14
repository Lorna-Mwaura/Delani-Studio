$(document).ready(function () {
    $(".design1").click(function () {
        $(".design2").toggle();
        $(".design3").toggle();
    });
    $(".dev1").click(function () {
        $(".dev2").toggle();
        $(".dev3").toggle();
    });
    $(".pdct1").click(function () {
        $(".pdct2").toggle();
        $(".pdct3").toggle();
    });
    $(".project").mouseover(function () {
        $("#project2").show();
    })
    $(".project").mouseout(function () {
        $("#project2").hide();
    });
    $(".ontario").mouseover(function () {
        $("#ontario2").show();
    })
    $(".ontario").mouseout(function () {
        $("#ontario2").hide();
    });

    $(".diamond").mouseover(function () {
        $("#diamond2").show();
    })
    $(".diamond").mouseout(function () {
        $("#diamond2").hide();
    });

    $(".carrey").mouseover(function () {
        $("#carrey2").show();
    })
    $(".carrey").mouseout(function () {
        $("#carrey2").hide();
    });
    $(".elera").mouseover(function () {
        $("#elera2").show();
    })
    $(".elera").mouseout(function () {
        $("#elera2").hide();
    });
    $(".selector").mouseover(function () {
        $("#selector2").show();
    })
    $(".selector").mouseout(function () {
        $("#selector2").hide();
    });
    $(".burned").mouseover(function () {
        $("#burned2").show();
    })
    $(".burned").mouseout(function () {
        $("#burned2").hide();
    });
});

let form = document.querySelector("#form")
let username = form.username
form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Hello " + username.value + "! data has been submitted successfully")
})