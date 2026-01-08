function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "" || unit === "") {
        result.innerHTML = "❌ Please enter value and select unit";
        result.style.color = "red";
        return;
    }

    temp = parseFloat(temp);
    let output = "";

    if (unit === "celsius") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        output = `${f.toFixed(2)} °F <br> ${k.toFixed(2)} K`;
    } 
    else if (unit === "fahrenheit") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        output = `${c.toFixed(2)} °C <br> ${k.toFixed(2)} K`;
    } 
    else if (unit === "kelvin") {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        output = `${c.toFixed(2)} °C <br> ${f.toFixed(2)} °F`;
    }

    result.innerHTML = output;
    result.style.color = "green";
}
