function BMI() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  const calcBMI = weight / (height * height);
  let c = calcBMI.toFixed(2);
  if (calcBMI <= 18.5) {
    document.getElementById(
      "output1"
    ).textContent = `Hey, get yourself some food. Your BMI is ${c} an you are underweight`;
  } else if (calcBMI > 18.5 && calcBMI <= 24.9) {
    document.getElementById(
      "output1"
    ).textContent = `You are just fine the way you are. Your BMI is ${c}.`;
  } else if (calcBMI > 24.9 && calcBMI <= 29.9) {
    document.getElementById(
      "output1"
    ).textContent = `Whatch it man!! You are overweight and your BMI is ${c}`;
  } else if (calcBMI > 29.9) {
    document.getElementById(
      "output1"
    ).textContent = `I have some bad news for you. Your BMI is ${c} and you are obese.`;
  } else {
    document.getElementById(
      "output1"
    ).textContent = `Hey write down some numbers!!`;
  }
}
