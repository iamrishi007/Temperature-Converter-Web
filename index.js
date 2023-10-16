function convertTemperature() {
  const celsius = parseFloat(document.getElementById('cel').value);
  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById('fah').value = fahrenheit.toFixed(2);
}


