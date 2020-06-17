// Challenge 1: Your Age in Days.

function yourAgeInDays() {
    let birthYear = prompt("What year were you born?");
    let ageInDays = (2020 - birthYear) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode(`You are ${ageInDays} days old.`);
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("result").appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
