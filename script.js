function detectMood() {

    let bugs = parseInt(document.getElementById("bugs").value);
    let coffee = parseInt(document.getElementById("coffee").value);

    let result = document.getElementById("result");

    if (isNaN(bugs) || isNaN(coffee)) {
        result.innerHTML = "⚠️ Please enter both values!";
        result.style.backgroundColor = "#ffeaa7";
        return;
    }

    if (bugs <= 3 && coffee <= 2) {
        result.innerHTML =
        "😎 Happy Coder<br>Everything is working perfectly!";
        result.style.backgroundColor = "#55efc4";
    }

    else if (bugs <= 10 && coffee <= 4) {
        result.innerHTML =
        "🙂 Focused Developer<br>Handling bugs like a pro!";
        result.style.backgroundColor = "#74b9ff";
    }

    else if (bugs <= 20 && coffee <= 6) {
        result.innerHTML =
        "😵 Debugging Warrior<br>You're fighting for your life!";
        result.style.backgroundColor = "#ffeaa7";
    }

    else if (bugs > 20 && coffee <= 8) {
        result.innerHTML =
        "🤯 System Overload<br>Too many bugs detected!";
        result.style.backgroundColor = "#fab1a0";
    }

    else {
        result.innerHTML =
        "☠️ Coffee-Powered Machine<br>You have transcended humanity!";
        result.style.backgroundColor = "#ff7675";
    }
}
