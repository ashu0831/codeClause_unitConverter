       /* function for convert length*/
 
function convertLength() {
    const lengthInput = document.getElementById("length-input").value;
    const lengthFrom = document.getElementById("length-from").value;
    const lengthTo = document.getElementById("length-to").value;
    
    const conversionFactors = {
      "m": {
        "m": 1,
        "cm": 100,
        "km": 0.001,
        "in": 39.37
      },
      "cm": {
        "m": 0.01,
        "cm": 1,
        "km": 0.00001,
        "in": 0.3937
      },
      "km": {
        "m": 1000,
        "cm": 100000,
        "km": 1,
        "in": 39370.1
      },
      "in": {
        "m": 0.0254,
        "cm": 2.54,
        "km": 0.0000254,
        "in": 1
      }
    };
    
    const factor = conversionFactors[lengthFrom][lengthTo];
    const result = lengthInput * factor;
    
    document.getElementById("length-result").innerHTML = result;
    const unitSymbols = {
        "m": "m",
        "cm": "cm",
        "km": "km",
        "in": "in"
      };
      
      const resultWithUnit = result + " " + unitSymbols[lengthTo];
      document.getElementById("length-result").innerHTML = resultWithUnit;
      
  }

                  /* function for convert temperature*/

  function convertTemperature() {
    console.log('button is clicked');
    const temperatureInput = document.getElementById("temperature-input").value;
    const temperatureFrom = document.getElementById("temperature-from").value;
    const temperatureTo = document.getElementById("temperature-to").value;
  
    const conversionFactors = {
      "C": {
        "C": 1,
        "F": 1.8,
        "K": 1
      },
      "F": {
        "C": 0.5556,
        "F": 1,
        "K": 0.5556
      },
      "K": {
        "C": 1,
        "F": 1.8,
        "K": 1
      }
    };
  
    const factor = conversionFactors[temperatureFrom][temperatureTo];
    const result = (temperatureInput * factor).toFixed(2);
  
    document.getElementById("temperature-result").innerHTML = result;

    const unitSymbols = {
        "C": "°C",
        "F": "°F",
        "K": "K"
      };
      
      const resultWithUnit = result + " " + unitSymbols[temperatureTo];
      document.getElementById("temperature-result").innerHTML = resultWithUnit;
      
    
  }
                  /* function for convert area*/
  function convertArea() {
    const areaInput = document.getElementById("area-input").value;
    const areaFrom = document.getElementById("area-from").value;
    const areaTo = document.getElementById("area-to").value;
  
    const conversionFactors = {
      "m2": {
        "m2": 1,
        "cm2": 10000,
        "km2": 0.000001,
        "mi2": 0.000000386102
      },
      "cm2": {
        "m2": 0.0001,
        "cm2": 1,
        "km2": 0.0000000001,
        "mi2": 0.0000000000386102
      },
      "km2": {
        "m2": 1000000,
        "cm2": 10000000000,
        "km2": 1,
        "mi2": 0.386102
      },
      "mi2": {
        "m2": 2589988.11,
        "cm2": 25899881103.36,
        "km2": 2.58998811,
        "mi2": 1
      }
    };
  
    const conversionFactorsNames = {
      "m2": "square meter",
      "cm2": "square centimeter",
      "km2": "square kilometer",
      "mi2": "square mile"
    };
  
    const factor = conversionFactors[areaFrom][areaTo];
    const result = (areaInput * factor).toFixed(5);
    const fromUnit = conversionFactorsNames[areaFrom];
    const toUnit = conversionFactorsNames[areaTo];
  
    document.getElementById("area-result").innerHTML = `${result} ${toUnit}`;
  }

               /* function for convert time*/

  function convertTime() {
    const timeUnits = {
      sec: 1,
      min: 60,
      hr: 3600,
      day: 86400
    };
  
    const input = document.getElementById("time-input").value;
    const fromUnit = document.getElementById("time-from").value;
    const toUnit = document.getElementById("time-to").value;
  
    const convertedValue = input * (timeUnits[fromUnit] / timeUnits[toUnit]);
    const result = document.getElementById("time-result");
    result.innerHTML = `${convertedValue.toFixed(2)} ${toUnit}`;
  }
  
  