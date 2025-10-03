// ENUM :
/*
⚡ TL;DR
*node script.ts ❌ → Node can’t read enums/types/interfaces.

*tsc script.ts && node script.js ✅ → compile then run.

*ts-node script.ts ✅ → run TS directly.
*/
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Cloudy"] = 1] = "Cloudy";
    WeatherConditions[WeatherConditions["Rainy"] = 2] = "Rainy";
    WeatherConditions[WeatherConditions["Snowy"] = 3] = "Snowy";
})(WeatherConditions || (WeatherConditions = {}));
console.log(WeatherConditions.Sunny); // 0
var WeatherConditions1;
(function (WeatherConditions1) {
    WeatherConditions1["Sunny"] = "sunny";
    WeatherConditions1["Cloudy"] = "cloudy";
    WeatherConditions1["Rainy"] = "rainy";
    WeatherConditions1["Snowy"] = "snowy";
})(WeatherConditions1 || (WeatherConditions1 = {}));
console.log(WeatherConditions1.Sunny); // sunny
var currentWeather = WeatherConditions1.Sunny;
console.log(" The current weather is ".concat(currentWeather));
