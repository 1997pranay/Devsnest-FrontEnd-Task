function calculate(id) {
    let first = +document.getElementById("Firstno").value;
    let second = +document.getElementById("Secondno").value;
    let result = 0;
    switch (id) {
        case "1":
            result = first + second;
            break;
        case "2":
            result = first - second;
            break;
        case "3":
            result = first * second;
            break;
        case "4":
            result = first / second;
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById('result').value = result;
}