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
});

let form = document.querySelector("#form")
let username=form.username
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert("Hello "+ username.value + "! data has been submitted successfully" )
})