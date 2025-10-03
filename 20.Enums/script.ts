// ENUM :
/*
⚡ TL;DR
*node script.ts ❌ → Node can’t read enums/types/interfaces.

*tsc script.ts && node script.js ✅ → compile then run.

*ts-node script.ts ✅ → run TS directly.
*/

enum WeatherConditions {
  Sunny, // 0
  Cloudy, // 1
  Rainy, // 2
  Snowy, // 3
}

console.log(WeatherConditions.Sunny); // 0

enum WeatherConditions1 {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
console.log(WeatherConditions1.Sunny); // sunny

const currentWeather = WeatherConditions1.Sunny;
console.log(` The current weather is ${currentWeather}`); //  The current weather is sunny