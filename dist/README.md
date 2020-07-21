# forecast-query

Queryable typescript API for weather information from openweathermap

## Features

This project allows one to create a query in order to find out about a weather in certain location.
Queries are promise-based and will only execute when the query is complete. This package provider information on everything from
pressure, to rain, to weather/weather icons and descriptions in chosen language. Package will select which api it should call
based on the parameters of query.


1) Can be used with both pro and free accounts with no difference in usage.
2) Can be used to find past, present and future weather, with restrictions based on https://openweathermap.org
3) Will cache both sent requests and weather information from sent requests (useful if you want to display a week-worth of weather)
4) Is enviroment-agnostic, can be used with custom fetch function and custom storage
5) Can be used with local storage (by default, sent requests are cached indefinitely in global object, each instance of forecast keeps track of weather information)
6) Can do location lookup by city name, zip code or latitude and longitude
7) Has basic date features, like lookup for yesterday (from set date), tomorrow, hour-of-the-day etc.
8) Is fully typed and supports multilingual queries with support for different units available
9) Dev project contains test project and a series of unit tests
10) Best results can be obtained using lat/long combination

## Simple examples of use


```typescript

const weather = forecast(key).around(50.08804, 14.42076);
await writeWeatherWithDate(weather);
weather.yesterday();
await writeWeatherWithDate(weather);
weather.hour(3);
await writeWeatherWithDate(weather);
weather.hour(17);
await writeWeatherWithDate(weather);
weather.today();
await writeWeatherWithDate(weather);
weather.hour(19);
await writeWeatherWithDate(weather);
weather.tomorrow();
await writeWeatherWithDate(weather);
weather.hour(12);
await writeWeatherWithDate(weather);
weather.dayAfterTomorrow();
await writeWeatherWithDate(weather);

```

This example only uses two requests, the rest of information is obtained from stored values from api.

### Unit test example of pro version of api

```typescript

const load = forecast(apiKey, true).in(524901).at(new Date(fakeDate), tenDaysAhead).fetch(global.fetch); // gets data from .at(date) by us zipcode
expect(await load.wind('speed')).toBe(4.1);
expect(await load.wind('degree')).toBe(249);
// sunny(), cloudy(), is(), ashy() and other methods can be used to get description of weather at set time
expect((await load.sunny())?.description).toBe('sky is clear');

```


If you find any bugs, or have ideas about improving this package, please file in a task or a pull request :) .
