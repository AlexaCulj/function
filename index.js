var a = parseInt(prompt("Please enter A"));
var b = parseInt(prompt("Please enter power B"));
var c = parseInt(prompt("Please enter power C"));
function getDiscriminant(a, b, c) {

    return (b * b) - (4 * a * c);

}
alert(getDiscriminant(a, b, c));


function getRoot(a, b, c) {

    if (getDiscriminant(a, b, c) > 0) {
        x1 = (-b + Math.sqrt(getDiscriminant(a, b, c))) / (2 * a);
        x2 = (-b - Math.sqrt(getDiscriminant(a, b, c))) / (2 * a);
        alert("x1 = " + x1);
        alert("x2 = " + x2);
    } else if (getDiscriminant(a, b, c) === 0) {
        x1 = (-b) / (2 * a);
        alert("x = " + x1);
    } else {
        alert("Нет действительных корней");
    }

}
alert(getRoot(a, b, c));