export const apiResults: { [key: string]: object } = {
    ['https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02']: { "coord": { "lon": -0.13, "lat": 51.51 }, "weather": [{ "id": 300, "main": "Drizzle", "description": "light intensity drizzle", "icon": "09d" }], "base": "stations", "main": { "temp": 280.32, "pressure": 1012, "humidity": 81, "temp_min": 279.15, "temp_max": 281.15 }, "visibility": 10000, "wind": { "speed": 4.1, "deg": 80 }, "clouds": { "all": 90 }, "dt": 1485789600, "sys": { "type": 1, "id": 5091, "message": 0.0103, "country": "GB", "sunrise": 1485762037, "sunset": 1485794875 }, "id": 2643743, "name": "London", "cod": 200 },
    ['https://api.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02']: { "coord": { "lon": -0.13, "lat": 51.51 }, "weather": [{ "id": 300, "main": "Drizzle", "description": "light intensity drizzle", "icon": "09d" }], "base": "stations", "main": { "temp": 280.32, "pressure": 1012, "humidity": 81, "temp_min": 279.15, "temp_max": 281.15 }, "visibility": 10000, "wind": { "speed": 4.1, "deg": 80 }, "clouds": { "all": 90 }, "dt": 1485789600, "sys": { "type": 1, "id": 5091, "message": 0.0103, "country": "GB", "sunrise": 1485762037, "sunset": 1485794875 }, "id": 2643743, "name": "London", "cod": 200 },
    ['https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=439d4b804bc8187953eb36d2a8c26a02']: { "coord": { "lon": 145.77, "lat": -16.92 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }], "base": "stations", "main": { "temp": 300.15, "pressure": 1007, "humidity": 74, "temp_min": 300.15, "temp_max": 300.15 }, "visibility": 10000, "wind": { "speed": 3.6, "deg": 160 }, "clouds": { "all": 40 }, "dt": 1485790200, "sys": { "type": 1, "id": 8166, "message": 0.2064, "country": "AU", "sunrise": 1485720272, "sunset": 1485766550 }, "id": 2172797, "name": "Cairns", "cod": 200 },
    ['https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02']: { "coord": { "lon": 139.01, "lat": 35.02 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "base": "stations", "main": { "temp": 285.514, "pressure": 1013.75, "humidity": 100, "temp_min": 285.514, "temp_max": 285.514, "sea_level": 1023.22, "grnd_level": 1013.75 }, "wind": { "speed": 5.52, "deg": 311 }, "clouds": { "all": 0 }, "dt": 1485792967, "sys": { "message": 0.0025, "country": "JP", "sunrise": 1485726240, "sunset": 1485763863 }, "id": 1907296, "name": "Tawarano", "cod": 200 },
    ['https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=439d4b804bc8187953eb36d2a8c26a02']: { "coord": { "lon": -122.09, "lat": 37.39 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "base": "stations", "main": { "temp": 280.44, "pressure": 1017, "humidity": 61, "temp_min": 279.15, "temp_max": 281.15 }, "visibility": 12874, "wind": { "speed": 8.2, "deg": 340, "gust": 11.3 }, "clouds": { "all": 1 }, "dt": 1519061700, "sys": { "type": 1, "id": 392, "message": 0.0027, "country": "US", "sunrise": 1519051894, "sunset": 1519091585 }, "id": 0, "name": "Mountain View", "cod": 200 },
    ['https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid=439d4b804bc8187953eb36d2a8c26a02']: { "cnt": 3, "list": [{ "coord": { "lon": 37.62, "lat": 55.75 }, "sys": { "type": 1, "id": 7323, "message": 0.0036, "country": "RU", "sunrise": 1485753940, "sunset": 1485784855 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "main": { "temp": -10.5, "pressure": 1028, "humidity": 66, "temp_min": -11, "temp_max": -10 }, "visibility": 10000, "wind": { "speed": 5, "deg": 200 }, "clouds": { "all": 0 }, "dt": 1485793175, "id": 524901, "name": "Moscow" }, { "coord": { "lon": 30.52, "lat": 50.45 }, "sys": { "type": 1, "id": 7358, "message": 0.0268, "country": "UA", "sunrise": 1485754480, "sunset": 1485787716 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "main": { "temp": -11.04, "pressure": 1033, "humidity": 61, "temp_min": -15, "temp_max": -9 }, "visibility": 10000, "wind": { "speed": 3, "deg": 150 }, "clouds": { "all": 0 }, "dt": 1485793175, "id": 703448, "name": "Kiev" }, { "coord": { "lon": -0.13, "lat": 51.51 }, "sys": { "type": 1, "id": 5091, "message": 0.0034, "country": "GB", "sunrise": 1485762036, "sunset": 1485794875 }, "weather": [{ "id": 701, "main": "Mist", "description": "mist", "icon": "50d" }, { "id": 300, "main": "Drizzle", "description": "light intensity drizzle", "icon": "09d" }], "main": { "temp": 7, "pressure": 1012, "humidity": 81, "temp_min": 5, "temp_max": 8 }, "visibility": 10000, "wind": { "speed": 4.6, "deg": 90 }, "clouds": { "all": 90 }, "dt": 1485793175, "id": 2643743, "name": "London" }] },
    ['https://pro.openweathermap.org/data/2.5/forecast/hourly?id=524901&appid=439d4b804bc8187953eb36d2a8c26a02']: {
        "cod": "200",
        "message": 0.0204,
        "cnt": 96,
        "list": [
            {
                "dt": 1553709600,
                "main": {
                    "temp": 272.09,
                    "temp_min": 271.358,
                    "temp_max": 272.09,
                    "pressure": 1018.01,
                    "sea_level": 1018.01,
                    "grnd_level": 997.153,
                    "humidity": 100,
                    "temp_kf": 0.73
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 3.25,
                    "deg": 287.822
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 18:00:00"
            },
            {
                "dt": 1553713200,
                "main": {
                    "temp": 271.59,
                    "temp_min": 271.1,
                    "temp_max": 271.59,
                    "pressure": 1018.335,
                    "sea_level": 1018.335,
                    "grnd_level": 997.403,
                    "humidity": 100,
                    "temp_kf": 0.49
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 3.4,
                    "deg": 294.075
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 19:00:00"
            },
            {
                "dt": 1553716800,
                "main": {
                    "temp": 271.15,
                    "temp_min": 270.907,
                    "temp_max": 271.15,
                    "pressure": 1018.794,
                    "sea_level": 1018.794,
                    "grnd_level": 997.864,
                    "humidity": 100,
                    "temp_kf": 0.24
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.47,
                    "deg": 300.189
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 20:00:00"
            },
            {
                "dt": 1553720400,
                "main": {
                    "temp": 270.722,
                    "temp_min": 270.722,
                    "temp_max": 270.722,
                    "pressure": 1019.211,
                    "sea_level": 1019.211,
                    "grnd_level": 998.29,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.55,
                    "deg": 305.558
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 21:00:00"
            },
            {
                "dt": 1553724000,
                "main": {
                    "temp": 270.63,
                    "temp_min": 270.63,
                    "temp_max": 270.63,
                    "pressure": 1019.58,
                    "sea_level": 1019.58,
                    "grnd_level": 998.674,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.59,
                    "deg": 309.126
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 22:00:00"
            },
            {
                "dt": 1553727600,
                "main": {
                    "temp": 270.421,
                    "temp_min": 270.421,
                    "temp_max": 270.421,
                    "pressure": 1019.849,
                    "sea_level": 1019.849,
                    "grnd_level": 998.886,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.67,
                    "deg": 307.204
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 23:00:00"
            },
            {
                "dt": 1553731200,
                "main": {
                    "temp": 270.201,
                    "temp_min": 270.201,
                    "temp_max": 270.201,
                    "pressure": 1020.021,
                    "sea_level": 1020.021,
                    "grnd_level": 998.983,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 7
                },
                "wind": {
                    "speed": 3.94,
                    "deg": 304.735
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 00:00:00"
            },
            {
                "dt": 1553734800,
                "main": {
                    "temp": 269.942,
                    "temp_min": 269.942,
                    "temp_max": 269.942,
                    "pressure": 1020.24,
                    "sea_level": 1020.24,
                    "grnd_level": 999.091,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 66
                },
                "wind": {
                    "speed": 4.24,
                    "deg": 306.38
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 01:00:00"
            },
            {
                "dt": 1553738400,
                "main": {
                    "temp": 269.768,
                    "temp_min": 269.768,
                    "temp_max": 269.768,
                    "pressure": 1020.634,
                    "sea_level": 1020.634,
                    "grnd_level": 999.451,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 67
                },
                "wind": {
                    "speed": 4.63,
                    "deg": 313.941
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 02:00:00"
            },
            {
                "dt": 1553742000,
                "main": {
                    "temp": 270.054,
                    "temp_min": 270.054,
                    "temp_max": 270.054,
                    "pressure": 1021.2,
                    "sea_level": 1021.2,
                    "grnd_level": 1000.078,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 78
                },
                "wind": {
                    "speed": 5.05,
                    "deg": 323.001
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 03:00:00"
            },
            {
                "dt": 1553745600,
                "main": {
                    "temp": 270.255,
                    "temp_min": 270.255,
                    "temp_max": 270.255,
                    "pressure": 1021.887,
                    "sea_level": 1021.887,
                    "grnd_level": 1000.825,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 4.77,
                    "deg": 325.587
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 04:00:00"
            },
            {
                "dt": 1553749200,
                "main": {
                    "temp": 270.544,
                    "temp_min": 270.544,
                    "temp_max": 270.544,
                    "pressure": 1022.26,
                    "sea_level": 1022.26,
                    "grnd_level": 1001.249,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 4.6,
                    "deg": 325.37
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 05:00:00"
            },
            {
                "dt": 1553752800,
                "main": {
                    "temp": 270.867,
                    "temp_min": 270.867,
                    "temp_max": 270.867,
                    "pressure": 1022.629,
                    "sea_level": 1022.629,
                    "grnd_level": 1001.705,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 4.72,
                    "deg": 327.239
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 06:00:00"
            },
            {
                "dt": 1553756400,
                "main": {
                    "temp": 271.3,
                    "temp_min": 271.3,
                    "temp_max": 271.3,
                    "pressure": 1023.002,
                    "sea_level": 1023.002,
                    "grnd_level": 1002.215,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 4.78,
                    "deg": 329.474
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 07:00:00"
            },
            {
                "dt": 1553760000,
                "main": {
                    "temp": 271.8,
                    "temp_min": 271.8,
                    "temp_max": 271.8,
                    "pressure": 1023.327,
                    "sea_level": 1023.327,
                    "grnd_level": 1002.643,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 4.79,
                    "deg": 331.284
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 08:00:00"
            },
            {
                "dt": 1553763600,
                "main": {
                    "temp": 272.6,
                    "temp_min": 272.6,
                    "temp_max": 272.6,
                    "pressure": 1023.522,
                    "sea_level": 1023.522,
                    "grnd_level": 1002.861,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 4.85,
                    "deg": 331.928
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 09:00:00"
            },
            {
                "dt": 1553767200,
                "main": {
                    "temp": 273.2,
                    "temp_min": 273.2,
                    "temp_max": 273.2,
                    "pressure": 1023.577,
                    "sea_level": 1023.577,
                    "grnd_level": 1002.923,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 4.79,
                    "deg": 332.483
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 10:00:00"
            },
            {
                "dt": 1553770800,
                "main": {
                    "temp": 273.733,
                    "temp_min": 273.733,
                    "temp_max": 273.733,
                    "pressure": 1023.539,
                    "sea_level": 1023.539,
                    "grnd_level": 1002.905,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 4.74,
                    "deg": 332.007
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 11:00:00"
            },
            {
                "dt": 1553774400,
                "main": {
                    "temp": 274.088,
                    "temp_min": 274.088,
                    "temp_max": 274.088,
                    "pressure": 1023.439,
                    "sea_level": 1023.439,
                    "grnd_level": 1002.827,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 4.67,
                    "deg": 330.692
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 12:00:00"
            },
            {
                "dt": 1553778000,
                "main": {
                    "temp": 274.3,
                    "temp_min": 274.3,
                    "temp_max": 274.3,
                    "pressure": 1023.462,
                    "sea_level": 1023.462,
                    "grnd_level": 1002.794,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 4.34,
                    "deg": 330.72
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 13:00:00"
            },
            {
                "dt": 1553781600,
                "main": {
                    "temp": 274.221,
                    "temp_min": 274.221,
                    "temp_max": 274.221,
                    "pressure": 1023.597,
                    "sea_level": 1023.597,
                    "grnd_level": 1002.933,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 65
                },
                "wind": {
                    "speed": 3.85,
                    "deg": 328.604
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 14:00:00"
            },
            {
                "dt": 1553785200,
                "main": {
                    "temp": 273.5,
                    "temp_min": 273.5,
                    "temp_max": 273.5,
                    "pressure": 1023.736,
                    "sea_level": 1023.736,
                    "grnd_level": 1003.062,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 74
                },
                "wind": {
                    "speed": 2.52,
                    "deg": 320.741
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 15:00:00"
            },
            {
                "dt": 1553788800,
                "main": {
                    "temp": 272.231,
                    "temp_min": 272.231,
                    "temp_max": 272.231,
                    "pressure": 1023.865,
                    "sea_level": 1023.865,
                    "grnd_level": 1003.222,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 57
                },
                "wind": {
                    "speed": 2.22,
                    "deg": 311.882
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 16:00:00"
            },
            {
                "dt": 1553792400,
                "main": {
                    "temp": 271.795,
                    "temp_min": 271.795,
                    "temp_max": 271.795,
                    "pressure": 1024.036,
                    "sea_level": 1024.036,
                    "grnd_level": 1003.379,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 57
                },
                "wind": {
                    "speed": 2.03,
                    "deg": 304.168
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 17:00:00"
            },
            {
                "dt": 1553796000,
                "main": {
                    "temp": 271.649,
                    "temp_min": 271.649,
                    "temp_max": 271.649,
                    "pressure": 1024.147,
                    "sea_level": 1024.147,
                    "grnd_level": 1003.468,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 63
                },
                "wind": {
                    "speed": 1.99,
                    "deg": 296.025
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 18:00:00"
            },
            {
                "dt": 1553799600,
                "main": {
                    "temp": 271.7,
                    "temp_min": 271.7,
                    "temp_max": 271.7,
                    "pressure": 1024.107,
                    "sea_level": 1024.107,
                    "grnd_level": 1003.522,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.23,
                    "deg": 289.63
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 19:00:00"
            },
            {
                "dt": 1553803200,
                "main": {
                    "temp": 271.9,
                    "temp_min": 271.9,
                    "temp_max": 271.9,
                    "pressure": 1023.891,
                    "sea_level": 1023.891,
                    "grnd_level": 1003.246,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.2,
                    "deg": 281.821
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 20:00:00"
            },
            {
                "dt": 1553806800,
                "main": {
                    "temp": 271.974,
                    "temp_min": 271.974,
                    "temp_max": 271.974,
                    "pressure": 1023.761,
                    "sea_level": 1023.761,
                    "grnd_level": 1003.012,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.15,
                    "deg": 274.927
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 21:00:00"
            },
            {
                "dt": 1553810400,
                "main": {
                    "temp": 272.326,
                    "temp_min": 272.326,
                    "temp_max": 272.326,
                    "pressure": 1023.737,
                    "sea_level": 1023.737,
                    "grnd_level": 1003.014,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.25,
                    "deg": 277.655
                },
                "snow": {
                    "1h": 0.063
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 22:00:00"
            },
            {
                "dt": 1553814000,
                "main": {
                    "temp": 272.3,
                    "temp_min": 272.3,
                    "temp_max": 272.3,
                    "pressure": 1023.548,
                    "sea_level": 1023.548,
                    "grnd_level": 1002.701,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.2,
                    "deg": 273.617
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 23:00:00"
            },
            {
                "dt": 1553817600,
                "main": {
                    "temp": 271.7,
                    "temp_min": 271.7,
                    "temp_max": 271.7,
                    "pressure": 1023.206,
                    "sea_level": 1023.206,
                    "grnd_level": 1002.39,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.28,
                    "deg": 276.773
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 00:00:00"
            },
            {
                "dt": 1553821200,
                "main": {
                    "temp": 271.9,
                    "temp_min": 271.9,
                    "temp_max": 271.9,
                    "pressure": 1022.834,
                    "sea_level": 1022.834,
                    "grnd_level": 1002.104,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.18,
                    "deg": 282.503
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 01:00:00"
            },
            {
                "dt": 1553824800,
                "main": {
                    "temp": 271.939,
                    "temp_min": 271.939,
                    "temp_max": 271.939,
                    "pressure": 1022.495,
                    "sea_level": 1022.495,
                    "grnd_level": 1001.799,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.98,
                    "deg": 276.512
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 02:00:00"
            },
            {
                "dt": 1553828400,
                "main": {
                    "temp": 271.765,
                    "temp_min": 271.765,
                    "temp_max": 271.765,
                    "pressure": 1022.26,
                    "sea_level": 1022.26,
                    "grnd_level": 1001.596,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.94,
                    "deg": 268.702
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 03:00:00"
            },
            {
                "dt": 1553832000,
                "main": {
                    "temp": 272.078,
                    "temp_min": 272.078,
                    "temp_max": 272.078,
                    "pressure": 1022.008,
                    "sea_level": 1022.008,
                    "grnd_level": 1001.44,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.08,
                    "deg": 265.156
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 04:00:00"
            },
            {
                "dt": 1553835600,
                "main": {
                    "temp": 272.882,
                    "temp_min": 272.882,
                    "temp_max": 272.882,
                    "pressure": 1021.719,
                    "sea_level": 1021.719,
                    "grnd_level": 1001.251,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.3,
                    "deg": 263.445
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 05:00:00"
            },
            {
                "dt": 1553839200,
                "main": {
                    "temp": 273.525,
                    "temp_min": 273.525,
                    "temp_max": 273.525,
                    "pressure": 1021.434,
                    "sea_level": 1021.434,
                    "grnd_level": 1001.049,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.31,
                    "deg": 257.458
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 06:00:00"
            },
            {
                "dt": 1553842800,
                "main": {
                    "temp": 274,
                    "temp_min": 274,
                    "temp_max": 274,
                    "pressure": 1021.167,
                    "sea_level": 1021.167,
                    "grnd_level": 1000.808,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.25,
                    "deg": 246.007
                },
                "snow": {
                    "1h": 0.125
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 07:00:00"
            },
            {
                "dt": 1553846400,
                "main": {
                    "temp": 274.474,
                    "temp_min": 274.474,
                    "temp_max": 274.474,
                    "pressure": 1020.836,
                    "sea_level": 1020.836,
                    "grnd_level": 1000.485,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.42,
                    "deg": 240.812
                },
                "snow": {
                    "1h": 0.125
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 08:00:00"
            },
            {
                "dt": 1553850000,
                "main": {
                    "temp": 275.451,
                    "temp_min": 275.451,
                    "temp_max": 275.451,
                    "pressure": 1020.481,
                    "sea_level": 1020.481,
                    "grnd_level": 1000.151,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 2.76,
                    "deg": 244.039
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 09:00:00"
            },
            {
                "dt": 1553853600,
                "main": {
                    "temp": 276.225,
                    "temp_min": 276.225,
                    "temp_max": 276.225,
                    "pressure": 1020.127,
                    "sea_level": 1020.127,
                    "grnd_level": 999.749,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 2.93,
                    "deg": 246.819
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 10:00:00"
            },
            {
                "dt": 1553857200,
                "main": {
                    "temp": 276.635,
                    "temp_min": 276.635,
                    "temp_max": 276.635,
                    "pressure": 1019.752,
                    "sea_level": 1019.752,
                    "grnd_level": 999.387,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 2.99,
                    "deg": 253.222
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 11:00:00"
            },
            {
                "dt": 1553860800,
                "main": {
                    "temp": 276.588,
                    "temp_min": 276.588,
                    "temp_max": 276.588,
                    "pressure": 1019.321,
                    "sea_level": 1019.321,
                    "grnd_level": 998.972,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 2.64,
                    "deg": 255.679
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 12:00:00"
            },
            {
                "dt": 1553864400,
                "main": {
                    "temp": 276.351,
                    "temp_min": 276.351,
                    "temp_max": 276.351,
                    "pressure": 1018.913,
                    "sea_level": 1018.913,
                    "grnd_level": 998.612,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 2.03,
                    "deg": 249.394
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 13:00:00"
            },
            {
                "dt": 1553868000,
                "main": {
                    "temp": 275.845,
                    "temp_min": 275.845,
                    "temp_max": 275.845,
                    "pressure": 1018.448,
                    "sea_level": 1018.448,
                    "grnd_level": 998.222,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 89
                },
                "wind": {
                    "speed": 1.96,
                    "deg": 241.21
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 14:00:00"
            },
            {
                "dt": 1553871600,
                "main": {
                    "temp": 275.174,
                    "temp_min": 275.174,
                    "temp_max": 275.174,
                    "pressure": 1018.157,
                    "sea_level": 1018.157,
                    "grnd_level": 998.031,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 89
                },
                "wind": {
                    "speed": 2.1,
                    "deg": 239.814
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 15:00:00"
            },
            {
                "dt": 1553875200,
                "main": {
                    "temp": 274.625,
                    "temp_min": 274.625,
                    "temp_max": 274.625,
                    "pressure": 1018.082,
                    "sea_level": 1018.082,
                    "grnd_level": 998.044,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 2.12,
                    "deg": 238.953
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 16:00:00"
            },
            {
                "dt": 1553878800,
                "main": {
                    "temp": 274.5,
                    "temp_min": 274.5,
                    "temp_max": 274.5,
                    "pressure": 1018.174,
                    "sea_level": 1018.174,
                    "grnd_level": 998.023,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.02,
                    "deg": 224.759
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 17:00:00"
            },
            {
                "dt": 1553882400,
                "main": {
                    "temp": 274.545,
                    "temp_min": 274.545,
                    "temp_max": 274.545,
                    "pressure": 1018.077,
                    "sea_level": 1018.077,
                    "grnd_level": 997.801,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.11,
                    "deg": 210.061
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 18:00:00"
            },
            {
                "dt": 1553886000,
                "main": {
                    "temp": 274.549,
                    "temp_min": 274.549,
                    "temp_max": 274.549,
                    "pressure": 1017.715,
                    "sea_level": 1017.715,
                    "grnd_level": 997.403,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 2.25,
                    "deg": 206.588
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 19:00:00"
            },
            {
                "dt": 1553889600,
                "main": {
                    "temp": 274.6,
                    "temp_min": 274.6,
                    "temp_max": 274.6,
                    "pressure": 1017.301,
                    "sea_level": 1017.301,
                    "grnd_level": 996.986,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 2.62,
                    "deg": 209.522
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 20:00:00"
            },
            {
                "dt": 1553893200,
                "main": {
                    "temp": 274.464,
                    "temp_min": 274.464,
                    "temp_max": 274.464,
                    "pressure": 1016.928,
                    "sea_level": 1016.928,
                    "grnd_level": 996.589,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 3.11,
                    "deg": 210.986
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 21:00:00"
            },
            {
                "dt": 1553896800,
                "main": {
                    "temp": 273.996,
                    "temp_min": 273.996,
                    "temp_max": 273.996,
                    "pressure": 1016.55,
                    "sea_level": 1016.55,
                    "grnd_level": 996.183,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 3.28,
                    "deg": 211.535
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 22:00:00"
            },
            {
                "dt": 1553900400,
                "main": {
                    "temp": 273.653,
                    "temp_min": 273.653,
                    "temp_max": 273.653,
                    "pressure": 1016.137,
                    "sea_level": 1016.137,
                    "grnd_level": 995.823,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 3.29,
                    "deg": 213.579
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 23:00:00"
            },
            {
                "dt": 1553904000,
                "main": {
                    "temp": 273.451,
                    "temp_min": 273.451,
                    "temp_max": 273.451,
                    "pressure": 1015.574,
                    "sea_level": 1015.574,
                    "grnd_level": 995.131,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 3.36,
                    "deg": 214.711
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 00:00:00"
            },
            {
                "dt": 1553907600,
                "main": {
                    "temp": 273.35,
                    "temp_min": 273.35,
                    "temp_max": 273.35,
                    "pressure": 1015.025,
                    "sea_level": 1015.025,
                    "grnd_level": 994.618,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.24,
                    "deg": 222.036
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 01:00:00"
            },
            {
                "dt": 1553911200,
                "main": {
                    "temp": 273.319,
                    "temp_min": 273.319,
                    "temp_max": 273.319,
                    "pressure": 1014.506,
                    "sea_level": 1014.506,
                    "grnd_level": 994.086,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.16,
                    "deg": 226.127
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 02:00:00"
            },
            {
                "dt": 1553914800,
                "main": {
                    "temp": 273.34,
                    "temp_min": 273.34,
                    "temp_max": 273.34,
                    "pressure": 1014.118,
                    "sea_level": 1014.118,
                    "grnd_level": 993.712,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.14,
                    "deg": 233.422
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 03:00:00"
            },
            {
                "dt": 1553918400,
                "main": {
                    "temp": 273.707,
                    "temp_min": 273.707,
                    "temp_max": 273.707,
                    "pressure": 1013.947,
                    "sea_level": 1013.947,
                    "grnd_level": 993.522,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.29,
                    "deg": 244.245
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 04:00:00"
            },
            {
                "dt": 1553922000,
                "main": {
                    "temp": 274.795,
                    "temp_min": 274.795,
                    "temp_max": 274.795,
                    "pressure": 1013.873,
                    "sea_level": 1013.873,
                    "grnd_level": 993.6,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 3.57,
                    "deg": 260.303
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 05:00:00"
            },
            {
                "dt": 1553925600,
                "main": {
                    "temp": 275.777,
                    "temp_min": 275.777,
                    "temp_max": 275.777,
                    "pressure": 1013.782,
                    "sea_level": 1013.782,
                    "grnd_level": 993.761,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 16
                },
                "wind": {
                    "speed": 3.61,
                    "deg": 270.571
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 06:00:00"
            },
            {
                "dt": 1553929200,
                "main": {
                    "temp": 275.819,
                    "temp_min": 275.819,
                    "temp_max": 275.819,
                    "pressure": 1013.7,
                    "sea_level": 1013.7,
                    "grnd_level": 993.637,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 3.44,
                    "deg": 264.201
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 07:00:00"
            },
            {
                "dt": 1553932800,
                "main": {
                    "temp": 275.977,
                    "temp_min": 275.977,
                    "temp_max": 275.977,
                    "pressure": 1013.518,
                    "sea_level": 1013.518,
                    "grnd_level": 993.373,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.5,
                    "deg": 258.7
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 08:00:00"
            },
            {
                "dt": 1553936400,
                "main": {
                    "temp": 276.604,
                    "temp_min": 276.604,
                    "temp_max": 276.604,
                    "pressure": 1013.255,
                    "sea_level": 1013.255,
                    "grnd_level": 993.063,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.41,
                    "deg": 256.131
                },
                "rain": {
                    "1h": 0.063
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 09:00:00"
            },
            {
                "dt": 1553940000,
                "main": {
                    "temp": 277.804,
                    "temp_min": 277.804,
                    "temp_max": 277.804,
                    "pressure": 1012.961,
                    "sea_level": 1012.961,
                    "grnd_level": 992.7,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.98,
                    "deg": 262.425
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 10:00:00"
            },
            {
                "dt": 1553943600,
                "main": {
                    "temp": 277.804,
                    "temp_min": 277.804,
                    "temp_max": 277.804,
                    "pressure": 1012.739,
                    "sea_level": 1012.739,
                    "grnd_level": 992.55,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.22,
                    "deg": 266.821
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 11:00:00"
            },
            {
                "dt": 1553947200,
                "main": {
                    "temp": 277.805,
                    "temp_min": 277.805,
                    "temp_max": 277.805,
                    "pressure": 1012.455,
                    "sea_level": 1012.455,
                    "grnd_level": 992.511,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.29,
                    "deg": 271.709
                },
                "rain": {
                    "1h": 0.063
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 12:00:00"
            },
            {
                "dt": 1553950800,
                "main": {
                    "temp": 277.631,
                    "temp_min": 277.631,
                    "temp_max": 277.631,
                    "pressure": 1012.288,
                    "sea_level": 1012.288,
                    "grnd_level": 992.464,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.03,
                    "deg": 271.664
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 13:00:00"
            },
            {
                "dt": 1553954400,
                "main": {
                    "temp": 277.448,
                    "temp_min": 277.448,
                    "temp_max": 277.448,
                    "pressure": 1012.378,
                    "sea_level": 1012.378,
                    "grnd_level": 992.699,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.74,
                    "deg": 270.291
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 14:00:00"
            },
            {
                "dt": 1553958000,
                "main": {
                    "temp": 277.1,
                    "temp_min": 277.1,
                    "temp_max": 277.1,
                    "pressure": 1012.714,
                    "sea_level": 1012.714,
                    "grnd_level": 992.953,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 2.78,
                    "deg": 262.279
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 15:00:00"
            },
            {
                "dt": 1553961600,
                "main": {
                    "temp": 276.152,
                    "temp_min": 276.152,
                    "temp_max": 276.152,
                    "pressure": 1013.119,
                    "sea_level": 1013.119,
                    "grnd_level": 993.009,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 89
                },
                "wind": {
                    "speed": 2.18,
                    "deg": 239.343
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 16:00:00"
            },
            {
                "dt": 1553965200,
                "main": {
                    "temp": 275.7,
                    "temp_min": 275.7,
                    "temp_max": 275.7,
                    "pressure": 1013.589,
                    "sea_level": 1013.589,
                    "grnd_level": 993.402,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 2.57,
                    "deg": 235.698
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 17:00:00"
            },
            {
                "dt": 1553968800,
                "main": {
                    "temp": 275.721,
                    "temp_min": 275.721,
                    "temp_max": 275.721,
                    "pressure": 1013.822,
                    "sea_level": 1013.822,
                    "grnd_level": 993.592,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 2.8,
                    "deg": 243.718
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 18:00:00"
            },
            {
                "dt": 1553972400,
                "main": {
                    "temp": 275.707,
                    "temp_min": 275.707,
                    "temp_max": 275.707,
                    "pressure": 1013.862,
                    "sea_level": 1013.862,
                    "grnd_level": 993.665,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 70
                },
                "wind": {
                    "speed": 2.89,
                    "deg": 254
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 19:00:00"
            },
            {
                "dt": 1553976000,
                "main": {
                    "temp": 275.581,
                    "temp_min": 275.581,
                    "temp_max": 275.581,
                    "pressure": 1013.807,
                    "sea_level": 1013.807,
                    "grnd_level": 993.639,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 69
                },
                "wind": {
                    "speed": 2.91,
                    "deg": 258.86
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 20:00:00"
            },
            {
                "dt": 1553979600,
                "main": {
                    "temp": 275.331,
                    "temp_min": 275.331,
                    "temp_max": 275.331,
                    "pressure": 1013.801,
                    "sea_level": 1013.801,
                    "grnd_level": 993.655,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 67
                },
                "wind": {
                    "speed": 2.82,
                    "deg": 261.149
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 21:00:00"
            },
            {
                "dt": 1553983200,
                "main": {
                    "temp": 274.931,
                    "temp_min": 274.931,
                    "temp_max": 274.931,
                    "pressure": 1013.864,
                    "sea_level": 1013.864,
                    "grnd_level": 993.69,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 2.66,
                    "deg": 260.435
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 22:00:00"
            },
            {
                "dt": 1553986800,
                "main": {
                    "temp": 274.755,
                    "temp_min": 274.755,
                    "temp_max": 274.755,
                    "pressure": 1013.837,
                    "sea_level": 1013.837,
                    "grnd_level": 993.657,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 63
                },
                "wind": {
                    "speed": 2.62,
                    "deg": 254.637
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 23:00:00"
            },
            {
                "dt": 1553990400,
                "main": {
                    "temp": 274.585,
                    "temp_min": 274.585,
                    "temp_max": 274.585,
                    "pressure": 1013.846,
                    "sea_level": 1013.846,
                    "grnd_level": 993.692,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 62
                },
                "wind": {
                    "speed": 2.65,
                    "deg": 245.748
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 00:00:00"
            },
            {
                "dt": 1553994000,
                "main": {
                    "temp": 274.389,
                    "temp_min": 274.389,
                    "temp_max": 274.389,
                    "pressure": 1013.843,
                    "sea_level": 1013.843,
                    "grnd_level": 993.659,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 2.62,
                    "deg": 240.513
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 01:00:00"
            },
            {
                "dt": 1553997600,
                "main": {
                    "temp": 274.265,
                    "temp_min": 274.265,
                    "temp_max": 274.265,
                    "pressure": 1013.755,
                    "sea_level": 1013.755,
                    "grnd_level": 993.532,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 67
                },
                "wind": {
                    "speed": 2.57,
                    "deg": 238.267
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 02:00:00"
            },
            {
                "dt": 1554001200,
                "main": {
                    "temp": 274.202,
                    "temp_min": 274.202,
                    "temp_max": 274.202,
                    "pressure": 1013.723,
                    "sea_level": 1013.723,
                    "grnd_level": 993.454,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 2.49,
                    "deg": 237.211
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 03:00:00"
            },
            {
                "dt": 1554004800,
                "main": {
                    "temp": 274.433,
                    "temp_min": 274.433,
                    "temp_max": 274.433,
                    "pressure": 1013.712,
                    "sea_level": 1013.712,
                    "grnd_level": 993.422,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 74
                },
                "wind": {
                    "speed": 2.42,
                    "deg": 234.88
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 04:00:00"
            },
            {
                "dt": 1554008400,
                "main": {
                    "temp": 275.3,
                    "temp_min": 275.3,
                    "temp_max": 275.3,
                    "pressure": 1013.555,
                    "sea_level": 1013.555,
                    "grnd_level": 993.358,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 2.47,
                    "deg": 228.786
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 05:00:00"
            },
            {
                "dt": 1554012000,
                "main": {
                    "temp": 276.752,
                    "temp_min": 276.752,
                    "temp_max": 276.752,
                    "pressure": 1013.28,
                    "sea_level": 1013.28,
                    "grnd_level": 993.192,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 2.82,
                    "deg": 223.432
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 06:00:00"
            },
            {
                "dt": 1554015600,
                "main": {
                    "temp": 278.277,
                    "temp_min": 278.277,
                    "temp_max": 278.277,
                    "pressure": 1013.087,
                    "sea_level": 1013.087,
                    "grnd_level": 992.961,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.19,
                    "deg": 218.663
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 07:00:00"
            },
            {
                "dt": 1554019200,
                "main": {
                    "temp": 279.833,
                    "temp_min": 279.833,
                    "temp_max": 279.833,
                    "pressure": 1012.831,
                    "sea_level": 1012.831,
                    "grnd_level": 992.742,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.54,
                    "deg": 217.859
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 08:00:00"
            },
            {
                "dt": 1554022800,
                "main": {
                    "temp": 281.306,
                    "temp_min": 281.306,
                    "temp_max": 281.306,
                    "pressure": 1012.452,
                    "sea_level": 1012.452,
                    "grnd_level": 992.5,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.02,
                    "deg": 222.601
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 09:00:00"
            },
            {
                "dt": 1554026400,
                "main": {
                    "temp": 282.568,
                    "temp_min": 282.568,
                    "temp_max": 282.568,
                    "pressure": 1012.038,
                    "sea_level": 1012.038,
                    "grnd_level": 992.133,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.48,
                    "deg": 228.197
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 10:00:00"
            },
            {
                "dt": 1554030000,
                "main": {
                    "temp": 283.3,
                    "temp_min": 283.3,
                    "temp_max": 283.3,
                    "pressure": 1011.796,
                    "sea_level": 1011.796,
                    "grnd_level": 991.829,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 4.72,
                    "deg": 229.969
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 11:00:00"
            },
            {
                "dt": 1554033600,
                "main": {
                    "temp": 283.683,
                    "temp_min": 283.683,
                    "temp_max": 283.683,
                    "pressure": 1011.418,
                    "sea_level": 1011.418,
                    "grnd_level": 991.409,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 4.76,
                    "deg": 231.009
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 12:00:00"
            },
            {
                "dt": 1554037200,
                "main": {
                    "temp": 283.821,
                    "temp_min": 283.821,
                    "temp_max": 283.821,
                    "pressure": 1011.044,
                    "sea_level": 1011.044,
                    "grnd_level": 991.069,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 4.64,
                    "deg": 232.76
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 13:00:00"
            },
            {
                "dt": 1554040800,
                "main": {
                    "temp": 283.735,
                    "temp_min": 283.735,
                    "temp_max": 283.735,
                    "pressure": 1010.863,
                    "sea_level": 1010.863,
                    "grnd_level": 990.762,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 49
                },
                "wind": {
                    "speed": 4.19,
                    "deg": 229.135
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 14:00:00"
            },
            {
                "dt": 1554044400,
                "main": {
                    "temp": 282.8,
                    "temp_min": 282.8,
                    "temp_max": 282.8,
                    "pressure": 1010.924,
                    "sea_level": 1010.924,
                    "grnd_level": 990.638,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 3.63,
                    "deg": 216.715
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 15:00:00"
            },
            {
                "dt": 1554048000,
                "main": {
                    "temp": 282.095,
                    "temp_min": 282.095,
                    "temp_max": 282.095,
                    "pressure": 1011.143,
                    "sea_level": 1011.143,
                    "grnd_level": 990.871,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 4.29,
                    "deg": 221.046
                },
                "rain": {
                    "1h": 0.063
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 16:00:00"
            },
            {
                "dt": 1554051600,
                "main": {
                    "temp": 281.5,
                    "temp_min": 281.5,
                    "temp_max": 281.5,
                    "pressure": 1011.332,
                    "sea_level": 1011.332,
                    "grnd_level": 991.048,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 63
                },
                "wind": {
                    "speed": 4.61,
                    "deg": 226.055
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 17:00:00"
            }
        ],
        "city": {
            "id": 524901,
            "name": "Moscow",
            "coord": {
                "lat": 55.7522,
                "lon": 37.6156
            },
            "country": "RU"
        }
    },
    ['https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02']: {
        "cod": "200",
        "message": 0.0106,
        "cnt": 96,
        "list": [
            {
                "dt": 1553709600,
                "main": {
                    "temp": 288.02,
                    "temp_min": 287.858,
                    "temp_max": 288.02,
                    "pressure": 1007.942,
                    "sea_level": 1007.942,
                    "grnd_level": 994.369,
                    "humidity": 100,
                    "temp_kf": 0.16
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 10.14,
                    "deg": 250.188
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 18:00:00"
            },
            {
                "dt": 1553713200,
                "main": {
                    "temp": 288.12,
                    "temp_min": 288,
                    "temp_max": 288.12,
                    "pressure": 1007.595,
                    "sea_level": 1007.595,
                    "grnd_level": 993.851,
                    "humidity": 100,
                    "temp_kf": 0.12
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 17
                },
                "wind": {
                    "speed": 10.51,
                    "deg": 252.928
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 19:00:00"
            },
            {
                "dt": 1553716800,
                "main": {
                    "temp": 287.99,
                    "temp_min": 287.907,
                    "temp_max": 287.99,
                    "pressure": 1007.368,
                    "sea_level": 1007.368,
                    "grnd_level": 993.656,
                    "humidity": 100,
                    "temp_kf": 0.08
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 40
                },
                "wind": {
                    "speed": 10.96,
                    "deg": 255.128
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-27 20:00:00"
            },
            {
                "dt": 1553720400,
                "main": {
                    "temp": 287.66,
                    "temp_min": 287.622,
                    "temp_max": 287.66,
                    "pressure": 1007.217,
                    "sea_level": 1007.217,
                    "grnd_level": 993.538,
                    "humidity": 100,
                    "temp_kf": 0.04
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 59
                },
                "wind": {
                    "speed": 10.76,
                    "deg": 256.258
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 21:00:00"
            },
            {
                "dt": 1553724000,
                "main": {
                    "temp": 287.61,
                    "temp_min": 287.61,
                    "temp_max": 287.61,
                    "pressure": 1007.364,
                    "sea_level": 1007.364,
                    "grnd_level": 993.602,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 69
                },
                "wind": {
                    "speed": 10.07,
                    "deg": 255.667
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 22:00:00"
            },
            {
                "dt": 1553727600,
                "main": {
                    "temp": 288.321,
                    "temp_min": 288.321,
                    "temp_max": 288.321,
                    "pressure": 1007.245,
                    "sea_level": 1007.245,
                    "grnd_level": 993.446,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 71
                },
                "wind": {
                    "speed": 10.11,
                    "deg": 249.683
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 23:00:00"
            },
            {
                "dt": 1553731200,
                "main": {
                    "temp": 289.151,
                    "temp_min": 289.151,
                    "temp_max": 289.151,
                    "pressure": 1006.899,
                    "sea_level": 1006.899,
                    "grnd_level": 993.031,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 74
                },
                "wind": {
                    "speed": 10.22,
                    "deg": 247.242
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 00:00:00"
            },
            {
                "dt": 1553734800,
                "main": {
                    "temp": 289.662,
                    "temp_min": 289.662,
                    "temp_max": 289.662,
                    "pressure": 1006.872,
                    "sea_level": 1006.872,
                    "grnd_level": 992.643,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 9.86,
                    "deg": 244.987
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 01:00:00"
            },
            {
                "dt": 1553738400,
                "main": {
                    "temp": 290.328,
                    "temp_min": 290.328,
                    "temp_max": 290.328,
                    "pressure": 1007.046,
                    "sea_level": 1007.046,
                    "grnd_level": 992.795,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 10.22,
                    "deg": 245.994
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 02:00:00"
            },
            {
                "dt": 1553742000,
                "main": {
                    "temp": 290.654,
                    "temp_min": 290.654,
                    "temp_max": 290.654,
                    "pressure": 1007.074,
                    "sea_level": 1007.074,
                    "grnd_level": 992.766,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 9.7,
                    "deg": 249.244
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 03:00:00"
            },
            {
                "dt": 1553745600,
                "main": {
                    "temp": 291.015,
                    "temp_min": 291.015,
                    "temp_max": 291.015,
                    "pressure": 1006.911,
                    "sea_level": 1006.911,
                    "grnd_level": 992.537,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 73
                },
                "wind": {
                    "speed": 9.09,
                    "deg": 249.944
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 04:00:00"
            },
            {
                "dt": 1553749200,
                "main": {
                    "temp": 291.144,
                    "temp_min": 291.144,
                    "temp_max": 291.144,
                    "pressure": 1006.702,
                    "sea_level": 1006.702,
                    "grnd_level": 992.177,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 58
                },
                "wind": {
                    "speed": 8.76,
                    "deg": 249.721
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 05:00:00"
            },
            {
                "dt": 1553752800,
                "main": {
                    "temp": 290.967,
                    "temp_min": 290.967,
                    "temp_max": 290.967,
                    "pressure": 1006.681,
                    "sea_level": 1006.681,
                    "grnd_level": 991.945,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 65
                },
                "wind": {
                    "speed": 8.55,
                    "deg": 249.235
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 06:00:00"
            },
            {
                "dt": 1553756400,
                "main": {
                    "temp": 290.4,
                    "temp_min": 290.4,
                    "temp_max": 290.4,
                    "pressure": 1007.11,
                    "sea_level": 1007.11,
                    "grnd_level": 992.087,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.89,
                    "deg": 249.579
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 07:00:00"
            },
            {
                "dt": 1553760000,
                "main": {
                    "temp": 289.4,
                    "temp_min": 289.4,
                    "temp_max": 289.4,
                    "pressure": 1007.989,
                    "sea_level": 1007.989,
                    "grnd_level": 992.995,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.46,
                    "deg": 248.047
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 08:00:00"
            },
            {
                "dt": 1553763600,
                "main": {
                    "temp": 287.7,
                    "temp_min": 287.7,
                    "temp_max": 287.7,
                    "pressure": 1009.196,
                    "sea_level": 1009.196,
                    "grnd_level": 994.221,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.22,
                    "deg": 230.812
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 09:00:00"
            },
            {
                "dt": 1553767200,
                "main": {
                    "temp": 286.7,
                    "temp_min": 286.7,
                    "temp_max": 286.7,
                    "pressure": 1010.387,
                    "sea_level": 1010.387,
                    "grnd_level": 995.371,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.05,
                    "deg": 123.519
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 10:00:00"
            },
            {
                "dt": 1553770800,
                "main": {
                    "temp": 286.033,
                    "temp_min": 286.033,
                    "temp_max": 286.033,
                    "pressure": 1011.407,
                    "sea_level": 1011.407,
                    "grnd_level": 996.297,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 105.04
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 11:00:00"
            },
            {
                "dt": 1553774400,
                "main": {
                    "temp": 285.688,
                    "temp_min": 285.688,
                    "temp_max": 285.688,
                    "pressure": 1012.147,
                    "sea_level": 1012.147,
                    "grnd_level": 996.859,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.57,
                    "deg": 105.56
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 12:00:00"
            },
            {
                "dt": 1553778000,
                "main": {
                    "temp": 285.5,
                    "temp_min": 285.5,
                    "temp_max": 285.5,
                    "pressure": 1012.634,
                    "sea_level": 1012.634,
                    "grnd_level": 997.194,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.84,
                    "deg": 105.363
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 13:00:00"
            },
            {
                "dt": 1553781600,
                "main": {
                    "temp": 285.221,
                    "temp_min": 285.221,
                    "temp_max": 285.221,
                    "pressure": 1012.955,
                    "sea_level": 1012.955,
                    "grnd_level": 997.493,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 5.16,
                    "deg": 97.107
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 14:00:00"
            },
            {
                "dt": 1553785200,
                "main": {
                    "temp": 284.7,
                    "temp_min": 284.7,
                    "temp_max": 284.7,
                    "pressure": 1013.362,
                    "sea_level": 1013.362,
                    "grnd_level": 997.83,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 4.9,
                    "deg": 90.538
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 15:00:00"
            },
            {
                "dt": 1553788800,
                "main": {
                    "temp": 284.331,
                    "temp_min": 284.331,
                    "temp_max": 284.331,
                    "pressure": 1013.809,
                    "sea_level": 1013.809,
                    "grnd_level": 998.262,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 4.4,
                    "deg": 91.512
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 16:00:00"
            },
            {
                "dt": 1553792400,
                "main": {
                    "temp": 283.895,
                    "temp_min": 283.895,
                    "temp_max": 283.895,
                    "pressure": 1013.952,
                    "sea_level": 1013.952,
                    "grnd_level": 998.547,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 4.45,
                    "deg": 90.142
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 17:00:00"
            },
            {
                "dt": 1553796000,
                "main": {
                    "temp": 283.249,
                    "temp_min": 283.249,
                    "temp_max": 283.249,
                    "pressure": 1014.075,
                    "sea_level": 1014.075,
                    "grnd_level": 998.716,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 5.02,
                    "deg": 89.041
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 18:00:00"
            },
            {
                "dt": 1553799600,
                "main": {
                    "temp": 282.8,
                    "temp_min": 282.8,
                    "temp_max": 282.8,
                    "pressure": 1014.319,
                    "sea_level": 1014.319,
                    "grnd_level": 999.09,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.11,
                    "deg": 87.994
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 19:00:00"
            },
            {
                "dt": 1553803200,
                "main": {
                    "temp": 282.4,
                    "temp_min": 282.4,
                    "temp_max": 282.4,
                    "pressure": 1014.603,
                    "sea_level": 1014.603,
                    "grnd_level": 999.454,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.71,
                    "deg": 83.781
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 20:00:00"
            },
            {
                "dt": 1553806800,
                "main": {
                    "temp": 282.074,
                    "temp_min": 282.074,
                    "temp_max": 282.074,
                    "pressure": 1015.301,
                    "sea_level": 1015.301,
                    "grnd_level": 1000.196,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.48,
                    "deg": 84.167
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 21:00:00"
            },
            {
                "dt": 1553810400,
                "main": {
                    "temp": 281.926,
                    "temp_min": 281.926,
                    "temp_max": 281.926,
                    "pressure": 1015.683,
                    "sea_level": 1015.683,
                    "grnd_level": 1001.014,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 4.58,
                    "deg": 86.999
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 22:00:00"
            },
            {
                "dt": 1553814000,
                "main": {
                    "temp": 281.9,
                    "temp_min": 281.9,
                    "temp_max": 281.9,
                    "pressure": 1015.678,
                    "sea_level": 1015.678,
                    "grnd_level": 1001.485,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 4.51,
                    "deg": 90.648
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 23:00:00"
            },
            {
                "dt": 1553817600,
                "main": {
                    "temp": 282.6,
                    "temp_min": 282.6,
                    "temp_max": 282.6,
                    "pressure": 1015.792,
                    "sea_level": 1015.792,
                    "grnd_level": 1001.894,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 4.45,
                    "deg": 101.158
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 00:00:00"
            },
            {
                "dt": 1553821200,
                "main": {
                    "temp": 283.2,
                    "temp_min": 283.2,
                    "temp_max": 283.2,
                    "pressure": 1015.706,
                    "sea_level": 1015.706,
                    "grnd_level": 1002.12,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 4.52,
                    "deg": 110.043
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 01:00:00"
            },
            {
                "dt": 1553824800,
                "main": {
                    "temp": 284.439,
                    "temp_min": 284.439,
                    "temp_max": 284.439,
                    "pressure": 1015.277,
                    "sea_level": 1015.277,
                    "grnd_level": 1001.863,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 4.17,
                    "deg": 119.828
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 02:00:00"
            },
            {
                "dt": 1553828400,
                "main": {
                    "temp": 285.665,
                    "temp_min": 285.665,
                    "temp_max": 285.665,
                    "pressure": 1014.7,
                    "sea_level": 1014.7,
                    "grnd_level": 1001.372,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 3.96,
                    "deg": 136.902
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 03:00:00"
            },
            {
                "dt": 1553832000,
                "main": {
                    "temp": 286.278,
                    "temp_min": 286.278,
                    "temp_max": 286.278,
                    "pressure": 1014.211,
                    "sea_level": 1014.211,
                    "grnd_level": 1000.832,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 4.63,
                    "deg": 156.26
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 04:00:00"
            },
            {
                "dt": 1553835600,
                "main": {
                    "temp": 286.882,
                    "temp_min": 286.882,
                    "temp_max": 286.882,
                    "pressure": 1013.668,
                    "sea_level": 1013.668,
                    "grnd_level": 1000.355,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 67
                },
                "wind": {
                    "speed": 5.45,
                    "deg": 166.198
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 05:00:00"
            },
            {
                "dt": 1553839200,
                "main": {
                    "temp": 286.625,
                    "temp_min": 286.625,
                    "temp_max": 286.625,
                    "pressure": 1013.272,
                    "sea_level": 1013.272,
                    "grnd_level": 999.976,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 5.32,
                    "deg": 168.079
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 06:00:00"
            },
            {
                "dt": 1553842800,
                "main": {
                    "temp": 286.6,
                    "temp_min": 286.6,
                    "temp_max": 286.6,
                    "pressure": 1013.29,
                    "sea_level": 1013.29,
                    "grnd_level": 999.896,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 4.84,
                    "deg": 166.217
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 07:00:00"
            },
            {
                "dt": 1553846400,
                "main": {
                    "temp": 286.074,
                    "temp_min": 286.074,
                    "temp_max": 286.074,
                    "pressure": 1013.495,
                    "sea_level": 1013.495,
                    "grnd_level": 999.973,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 21
                },
                "wind": {
                    "speed": 4.56,
                    "deg": 163.633
                },
                "rain": {
                    "1h": 0.063
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 08:00:00"
            },
            {
                "dt": 1553850000,
                "main": {
                    "temp": 285.551,
                    "temp_min": 285.551,
                    "temp_max": 285.551,
                    "pressure": 1013.928,
                    "sea_level": 1013.928,
                    "grnd_level": 1000.279,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 4.01,
                    "deg": 165.554
                },
                "rain": {
                    "1h": 0.063
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 09:00:00"
            },
            {
                "dt": 1553853600,
                "main": {
                    "temp": 285.426,
                    "temp_min": 285.426,
                    "temp_max": 285.426,
                    "pressure": 1014.351,
                    "sea_level": 1014.351,
                    "grnd_level": 1000.421,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 3.73,
                    "deg": 169.411
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 10:00:00"
            },
            {
                "dt": 1553857200,
                "main": {
                    "temp": 285.535,
                    "temp_min": 285.535,
                    "temp_max": 285.535,
                    "pressure": 1014.896,
                    "sea_level": 1014.896,
                    "grnd_level": 1000.843,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 3.08,
                    "deg": 175.514
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 11:00:00"
            },
            {
                "dt": 1553860800,
                "main": {
                    "temp": 285.488,
                    "temp_min": 285.488,
                    "temp_max": 285.488,
                    "pressure": 1015.129,
                    "sea_level": 1015.129,
                    "grnd_level": 1001.036,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 2.49,
                    "deg": 186.554
                },
                "rain": {
                    "1h": 0.126
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 12:00:00"
            },
            {
                "dt": 1553864400,
                "main": {
                    "temp": 285.251,
                    "temp_min": 285.251,
                    "temp_max": 285.251,
                    "pressure": 1014.845,
                    "sea_level": 1014.845,
                    "grnd_level": 1000.676,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 27
                },
                "wind": {
                    "speed": 1.82,
                    "deg": 194.97
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 13:00:00"
            },
            {
                "dt": 1553868000,
                "main": {
                    "temp": 285.145,
                    "temp_min": 285.145,
                    "temp_max": 285.145,
                    "pressure": 1014.502,
                    "sea_level": 1014.502,
                    "grnd_level": 1000.238,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 1.4,
                    "deg": 195.531
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 14:00:00"
            },
            {
                "dt": 1553871600,
                "main": {
                    "temp": 284.874,
                    "temp_min": 284.874,
                    "temp_max": 284.874,
                    "pressure": 1014.315,
                    "sea_level": 1014.315,
                    "grnd_level": 999.935,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 71
                },
                "wind": {
                    "speed": 1.07,
                    "deg": 186.541
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 15:00:00"
            },
            {
                "dt": 1553875200,
                "main": {
                    "temp": 284.525,
                    "temp_min": 284.525,
                    "temp_max": 284.525,
                    "pressure": 1014.018,
                    "sea_level": 1014.018,
                    "grnd_level": 999.532,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 77
                },
                "wind": {
                    "speed": 0.8,
                    "deg": 170.256
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 16:00:00"
            },
            {
                "dt": 1553878800,
                "main": {
                    "temp": 284.4,
                    "temp_min": 284.4,
                    "temp_max": 284.4,
                    "pressure": 1013.789,
                    "sea_level": 1013.789,
                    "grnd_level": 999.239,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 0.68,
                    "deg": 162.947
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 17:00:00"
            },
            {
                "dt": 1553882400,
                "main": {
                    "temp": 284.345,
                    "temp_min": 284.345,
                    "temp_max": 284.345,
                    "pressure": 1013.592,
                    "sea_level": 1013.592,
                    "grnd_level": 998.969,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 0.84,
                    "deg": 155.996
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 18:00:00"
            },
            {
                "dt": 1553886000,
                "main": {
                    "temp": 284.149,
                    "temp_min": 284.149,
                    "temp_max": 284.149,
                    "pressure": 1013.409,
                    "sea_level": 1013.409,
                    "grnd_level": 998.859,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.73,
                    "deg": 141.622
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 19:00:00"
            },
            {
                "dt": 1553889600,
                "main": {
                    "temp": 284,
                    "temp_min": 284,
                    "temp_max": 284,
                    "pressure": 1013.352,
                    "sea_level": 1013.352,
                    "grnd_level": 998.762,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.1,
                    "deg": 106.849
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 20:00:00"
            },
            {
                "dt": 1553893200,
                "main": {
                    "temp": 283.864,
                    "temp_min": 283.864,
                    "temp_max": 283.864,
                    "pressure": 1013.535,
                    "sea_level": 1013.535,
                    "grnd_level": 998.941,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.6,
                    "deg": 89.857
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 21:00:00"
            },
            {
                "dt": 1553896800,
                "main": {
                    "temp": 284.596,
                    "temp_min": 284.596,
                    "temp_max": 284.596,
                    "pressure": 1013.918,
                    "sea_level": 1013.918,
                    "grnd_level": 999.591,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.03,
                    "deg": 90.789
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 22:00:00"
            },
            {
                "dt": 1553900400,
                "main": {
                    "temp": 285.473,
                    "temp_min": 285.473,
                    "temp_max": 285.473,
                    "pressure": 1013.867,
                    "sea_level": 1013.867,
                    "grnd_level": 999.935,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.5,
                    "deg": 102.998
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 23:00:00"
            },
            {
                "dt": 1553904000,
                "main": {
                    "temp": 286.301,
                    "temp_min": 286.301,
                    "temp_max": 286.301,
                    "pressure": 1013.834,
                    "sea_level": 1013.834,
                    "grnd_level": 1000.139,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.04,
                    "deg": 114.121
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 00:00:00"
            },
            {
                "dt": 1553907600,
                "main": {
                    "temp": 287.18,
                    "temp_min": 287.18,
                    "temp_max": 287.18,
                    "pressure": 1013.399,
                    "sea_level": 1013.399,
                    "grnd_level": 999.914,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.36,
                    "deg": 129.046
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 01:00:00"
            },
            {
                "dt": 1553911200,
                "main": {
                    "temp": 288.139,
                    "temp_min": 288.139,
                    "temp_max": 288.139,
                    "pressure": 1012.557,
                    "sea_level": 1012.557,
                    "grnd_level": 999.158,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.74,
                    "deg": 151.735
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 02:00:00"
            },
            {
                "dt": 1553914800,
                "main": {
                    "temp": 289.03,
                    "temp_min": 289.03,
                    "temp_max": 289.03,
                    "pressure": 1011.655,
                    "sea_level": 1011.655,
                    "grnd_level": 998.192,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.18,
                    "deg": 171.523
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 03:00:00"
            },
            {
                "dt": 1553918400,
                "main": {
                    "temp": 289.607,
                    "temp_min": 289.607,
                    "temp_max": 289.607,
                    "pressure": 1010.824,
                    "sea_level": 1010.824,
                    "grnd_level": 997.202,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.68,
                    "deg": 184.189
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 04:00:00"
            },
            {
                "dt": 1553922000,
                "main": {
                    "temp": 289.795,
                    "temp_min": 289.795,
                    "temp_max": 289.795,
                    "pressure": 1009.969,
                    "sea_level": 1009.969,
                    "grnd_level": 996.128,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.87,
                    "deg": 196.167
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 05:00:00"
            },
            {
                "dt": 1553925600,
                "main": {
                    "temp": 290.477,
                    "temp_min": 290.477,
                    "temp_max": 290.477,
                    "pressure": 1009.212,
                    "sea_level": 1009.212,
                    "grnd_level": 995.185,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 5.65,
                    "deg": 209.76
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 06:00:00"
            },
            {
                "dt": 1553929200,
                "main": {
                    "temp": 290.019,
                    "temp_min": 290.019,
                    "temp_max": 290.019,
                    "pressure": 1008.63,
                    "sea_level": 1008.63,
                    "grnd_level": 994.741,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 7.28,
                    "deg": 220.317
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 07:00:00"
            },
            {
                "dt": 1553932800,
                "main": {
                    "temp": 289.477,
                    "temp_min": 289.477,
                    "temp_max": 289.477,
                    "pressure": 1008.396,
                    "sea_level": 1008.396,
                    "grnd_level": 994.509,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 7.87,
                    "deg": 223.646
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 08:00:00"
            },
            {
                "dt": 1553936400,
                "main": {
                    "temp": 288.804,
                    "temp_min": 288.804,
                    "temp_max": 288.804,
                    "pressure": 1008.637,
                    "sea_level": 1008.637,
                    "grnd_level": 994.583,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 8.85,
                    "deg": 230.421
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 09:00:00"
            },
            {
                "dt": 1553940000,
                "main": {
                    "temp": 288.704,
                    "temp_min": 288.704,
                    "temp_max": 288.704,
                    "pressure": 1008.951,
                    "sea_level": 1008.951,
                    "grnd_level": 994.54,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 8.19,
                    "deg": 230.168
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 10:00:00"
            },
            {
                "dt": 1553943600,
                "main": {
                    "temp": 288.804,
                    "temp_min": 288.804,
                    "temp_max": 288.804,
                    "pressure": 1009.365,
                    "sea_level": 1009.365,
                    "grnd_level": 994.726,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 8.05,
                    "deg": 231.754
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 11:00:00"
            },
            {
                "dt": 1553947200,
                "main": {
                    "temp": 288.905,
                    "temp_min": 288.905,
                    "temp_max": 288.905,
                    "pressure": 1009.733,
                    "sea_level": 1009.733,
                    "grnd_level": 994.911,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 8.25,
                    "deg": 237.604
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 12:00:00"
            },
            {
                "dt": 1553950800,
                "main": {
                    "temp": 288.731,
                    "temp_min": 288.731,
                    "temp_max": 288.731,
                    "pressure": 1009.754,
                    "sea_level": 1009.754,
                    "grnd_level": 994.864,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.15,
                    "deg": 247.423
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 13:00:00"
            },
            {
                "dt": 1553954400,
                "main": {
                    "temp": 287.948,
                    "temp_min": 287.948,
                    "temp_max": 287.948,
                    "pressure": 1009.638,
                    "sea_level": 1009.638,
                    "grnd_level": 994.859,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.73,
                    "deg": 255.158
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 14:00:00"
            },
            {
                "dt": 1553958000,
                "main": {
                    "temp": 287.1,
                    "temp_min": 287.1,
                    "temp_max": 287.1,
                    "pressure": 1009.48,
                    "sea_level": 1009.48,
                    "grnd_level": 994.585,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.89,
                    "deg": 248.004
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 15:00:00"
            },
            {
                "dt": 1553961600,
                "main": {
                    "temp": 286.052,
                    "temp_min": 286.052,
                    "temp_max": 286.052,
                    "pressure": 1008.921,
                    "sea_level": 1008.921,
                    "grnd_level": 994.001,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.89,
                    "deg": 236.268
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 16:00:00"
            },
            {
                "dt": 1553965200,
                "main": {
                    "temp": 285.5,
                    "temp_min": 285.5,
                    "temp_max": 285.5,
                    "pressure": 1008.115,
                    "sea_level": 1008.115,
                    "grnd_level": 993.322,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.77,
                    "deg": 211.926
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 17:00:00"
            },
            {
                "dt": 1553968800,
                "main": {
                    "temp": 285.521,
                    "temp_min": 285.521,
                    "temp_max": 285.521,
                    "pressure": 1007.244,
                    "sea_level": 1007.244,
                    "grnd_level": 992.696,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.14,
                    "deg": 203.508
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 18:00:00"
            },
            {
                "dt": 1553972400,
                "main": {
                    "temp": 285.107,
                    "temp_min": 285.107,
                    "temp_max": 285.107,
                    "pressure": 1006.528,
                    "sea_level": 1006.528,
                    "grnd_level": 992.097,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 1.25,
                    "deg": 213.258
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 19:00:00"
            },
            {
                "dt": 1553976000,
                "main": {
                    "temp": 285.481,
                    "temp_min": 285.481,
                    "temp_max": 285.481,
                    "pressure": 1006.007,
                    "sea_level": 1006.007,
                    "grnd_level": 991.063,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 42
                },
                "wind": {
                    "speed": 1.83,
                    "deg": 175.577
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 20:00:00"
            },
            {
                "dt": 1553979600,
                "main": {
                    "temp": 286.231,
                    "temp_min": 286.231,
                    "temp_max": 286.231,
                    "pressure": 1005.833,
                    "sea_level": 1005.833,
                    "grnd_level": 990.919,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 38
                },
                "wind": {
                    "speed": 3.75,
                    "deg": 225.141
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 21:00:00"
            },
            {
                "dt": 1553983200,
                "main": {
                    "temp": 287.031,
                    "temp_min": 287.031,
                    "temp_max": 287.031,
                    "pressure": 1005.958,
                    "sea_level": 1005.958,
                    "grnd_level": 990.778,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 47
                },
                "wind": {
                    "speed": 5.46,
                    "deg": 253.481
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 22:00:00"
            },
            {
                "dt": 1553986800,
                "main": {
                    "temp": 287.665,
                    "temp_min": 287.665,
                    "temp_max": 287.665,
                    "pressure": 1006.121,
                    "sea_level": 1006.121,
                    "grnd_level": 991.321,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 38
                },
                "wind": {
                    "speed": 9.91,
                    "deg": 259.389
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 23:00:00"
            },
            {
                "dt": 1553990400,
                "main": {
                    "temp": 287.025,
                    "temp_min": 287.025,
                    "temp_max": 287.025,
                    "pressure": 1006.475,
                    "sea_level": 1006.475,
                    "grnd_level": 991.661,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 32
                },
                "wind": {
                    "speed": 12.02,
                    "deg": 256.591
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 00:00:00"
            },
            {
                "dt": 1553994000,
                "main": {
                    "temp": 286.939,
                    "temp_min": 286.939,
                    "temp_max": 286.939,
                    "pressure": 1006.677,
                    "sea_level": 1006.677,
                    "grnd_level": 991.675,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 18
                },
                "wind": {
                    "speed": 11.75,
                    "deg": 254.744
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 01:00:00"
            },
            {
                "dt": 1553997600,
                "main": {
                    "temp": 286.955,
                    "temp_min": 286.955,
                    "temp_max": 286.955,
                    "pressure": 1006.581,
                    "sea_level": 1006.581,
                    "grnd_level": 991.581,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 11.13,
                    "deg": 254.582
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 02:00:00"
            },
            {
                "dt": 1554001200,
                "main": {
                    "temp": 287.172,
                    "temp_min": 287.172,
                    "temp_max": 287.172,
                    "pressure": 1006.189,
                    "sea_level": 1006.189,
                    "grnd_level": 991.374,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 11.11,
                    "deg": 256.805
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 03:00:00"
            },
            {
                "dt": 1554004800,
                "main": {
                    "temp": 287.433,
                    "temp_min": 287.433,
                    "temp_max": 287.433,
                    "pressure": 1005.852,
                    "sea_level": 1005.852,
                    "grnd_level": 991.086,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 11.14,
                    "deg": 256.745
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 04:00:00"
            },
            {
                "dt": 1554008400,
                "main": {
                    "temp": 287.5,
                    "temp_min": 287.5,
                    "temp_max": 287.5,
                    "pressure": 1005.523,
                    "sea_level": 1005.523,
                    "grnd_level": 990.83,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 11.05,
                    "deg": 256.556
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 05:00:00"
            },
            {
                "dt": 1554012000,
                "main": {
                    "temp": 287.352,
                    "temp_min": 287.352,
                    "temp_max": 287.352,
                    "pressure": 1005.556,
                    "sea_level": 1005.556,
                    "grnd_level": 990.904,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 10.66,
                    "deg": 256.845
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 06:00:00"
            },
            {
                "dt": 1554015600,
                "main": {
                    "temp": 287.177,
                    "temp_min": 287.177,
                    "temp_max": 287.177,
                    "pressure": 1005.939,
                    "sea_level": 1005.939,
                    "grnd_level": 991.233,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 10.07,
                    "deg": 256.501
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 07:00:00"
            },
            {
                "dt": 1554019200,
                "main": {
                    "temp": 286.733,
                    "temp_min": 286.733,
                    "temp_max": 286.733,
                    "pressure": 1006.565,
                    "sea_level": 1006.565,
                    "grnd_level": 992.022,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 9.42,
                    "deg": 256.19
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 08:00:00"
            },
            {
                "dt": 1554022800,
                "main": {
                    "temp": 285.706,
                    "temp_min": 285.706,
                    "temp_max": 285.706,
                    "pressure": 1007.27,
                    "sea_level": 1007.27,
                    "grnd_level": 992.932,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 8.11,
                    "deg": 256.31
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 09:00:00"
            },
            {
                "dt": 1554026400,
                "main": {
                    "temp": 285.168,
                    "temp_min": 285.168,
                    "temp_max": 285.168,
                    "pressure": 1008.134,
                    "sea_level": 1008.134,
                    "grnd_level": 993.909,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 6.85,
                    "deg": 257.757
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 10:00:00"
            },
            {
                "dt": 1554030000,
                "main": {
                    "temp": 284.8,
                    "temp_min": 284.8,
                    "temp_max": 284.8,
                    "pressure": 1009.08,
                    "sea_level": 1009.08,
                    "grnd_level": 994.821,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 18
                },
                "wind": {
                    "speed": 5.75,
                    "deg": 258.823
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 11:00:00"
            },
            {
                "dt": 1554033600,
                "main": {
                    "temp": 284.683,
                    "temp_min": 284.683,
                    "temp_max": 284.683,
                    "pressure": 1009.7,
                    "sea_level": 1009.7,
                    "grnd_level": 995.201,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 31
                },
                "wind": {
                    "speed": 5.7,
                    "deg": 255.861
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 12:00:00"
            },
            {
                "dt": 1554037200,
                "main": {
                    "temp": 284.421,
                    "temp_min": 284.421,
                    "temp_max": 284.421,
                    "pressure": 1009.841,
                    "sea_level": 1009.841,
                    "grnd_level": 994.989,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.61,
                    "deg": 256.192
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 13:00:00"
            },
            {
                "dt": 1554040800,
                "main": {
                    "temp": 283.635,
                    "temp_min": 283.635,
                    "temp_max": 283.635,
                    "pressure": 1009.757,
                    "sea_level": 1009.757,
                    "grnd_level": 994.922,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.85,
                    "deg": 264.163
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 14:00:00"
            },
            {
                "dt": 1554044400,
                "main": {
                    "temp": 282.6,
                    "temp_min": 282.6,
                    "temp_max": 282.6,
                    "pressure": 1009.91,
                    "sea_level": 1009.91,
                    "grnd_level": 995.214,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.59,
                    "deg": 20.841
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 15:00:00"
            },
            {
                "dt": 1554048000,
                "main": {
                    "temp": 282.095,
                    "temp_min": 282.095,
                    "temp_max": 282.095,
                    "pressure": 1009.905,
                    "sea_level": 1009.905,
                    "grnd_level": 995.335,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 2.43,
                    "deg": 61.546
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 16:00:00"
            },
            {
                "dt": 1554051600,
                "main": {
                    "temp": 281.7,
                    "temp_min": 281.7,
                    "temp_max": 281.7,
                    "pressure": 1009.866,
                    "sea_level": 1009.866,
                    "grnd_level": 995.272,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 3.73,
                    "deg": 60.942
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 17:00:00"
            }
        ],
        "city": {
            "id": 1851632,
            "name": "Shuzenji",
            "coord": {
                "lat": 34.9667,
                "lon": 138.9333
            },
            "country": "JP"
        }
    },
    ['https://pro.openweathermap.org/data/2.5/forecast/hourly?zip=94040&appid=439d4b804bc8187953eb36d2a8c26a02']: {
        "cod": "200",
        "message": 0.0208,
        "cnt": 96,
        "list": [
            {
                "dt": 1553709600,
                "main": {
                    "temp": 286.44,
                    "temp_min": 286.258,
                    "temp_max": 286.44,
                    "pressure": 1015.82,
                    "sea_level": 1015.82,
                    "grnd_level": 1002.193,
                    "humidity": 100,
                    "temp_kf": 0.18
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 5.51,
                    "deg": 202.816
                },
                "rain": {
                    "1h": 0.812
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 18:00:00"
            },
            {
                "dt": 1553713200,
                "main": {
                    "temp": 286.43,
                    "temp_min": 286.3,
                    "temp_max": 286.43,
                    "pressure": 1016.183,
                    "sea_level": 1016.183,
                    "grnd_level": 1002.667,
                    "humidity": 100,
                    "temp_kf": 0.13
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.84,
                    "deg": 206.141
                },
                "rain": {
                    "1h": 0.625
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 19:00:00"
            },
            {
                "dt": 1553716800,
                "main": {
                    "temp": 286.6,
                    "temp_min": 286.507,
                    "temp_max": 286.6,
                    "pressure": 1016.462,
                    "sea_level": 1016.462,
                    "grnd_level": 1003.128,
                    "humidity": 100,
                    "temp_kf": 0.09
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 4.58,
                    "deg": 216.201
                },
                "rain": {
                    "1h": 0.437
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 20:00:00"
            },
            {
                "dt": 1553720400,
                "main": {
                    "temp": 287.97,
                    "temp_min": 287.922,
                    "temp_max": 287.97,
                    "pressure": 1016.441,
                    "sea_level": 1016.441,
                    "grnd_level": 1003.09,
                    "humidity": 100,
                    "temp_kf": 0.04
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 5.41,
                    "deg": 227.614
                },
                "rain": {
                    "1h": 0.688
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 21:00:00"
            },
            {
                "dt": 1553724000,
                "main": {
                    "temp": 288.27,
                    "temp_min": 288.27,
                    "temp_max": 288.27,
                    "pressure": 1016.312,
                    "sea_level": 1016.312,
                    "grnd_level": 1003.042,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 5.71,
                    "deg": 233.008
                },
                "rain": {
                    "1h": 0.438
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 22:00:00"
            },
            {
                "dt": 1553727600,
                "main": {
                    "temp": 288.251,
                    "temp_min": 288.251,
                    "temp_max": 288.251,
                    "pressure": 1016.293,
                    "sea_level": 1016.293,
                    "grnd_level": 1002.998,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 49
                },
                "wind": {
                    "speed": 5.79,
                    "deg": 236.428
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-27 23:00:00"
            },
            {
                "dt": 1553731200,
                "main": {
                    "temp": 287.791,
                    "temp_min": 287.791,
                    "temp_max": 287.791,
                    "pressure": 1016.485,
                    "sea_level": 1016.485,
                    "grnd_level": 1003.223,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 41
                },
                "wind": {
                    "speed": 5.8,
                    "deg": 239.001
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 00:00:00"
            },
            {
                "dt": 1553734800,
                "main": {
                    "temp": 287.052,
                    "temp_min": 287.052,
                    "temp_max": 287.052,
                    "pressure": 1016.926,
                    "sea_level": 1016.926,
                    "grnd_level": 1003.667,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 5.27,
                    "deg": 237.97
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 01:00:00"
            },
            {
                "dt": 1553738400,
                "main": {
                    "temp": 286.018,
                    "temp_min": 286.018,
                    "temp_max": 286.018,
                    "pressure": 1017.562,
                    "sea_level": 1017.562,
                    "grnd_level": 1004.203,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 4.51,
                    "deg": 230.826
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 02:00:00"
            },
            {
                "dt": 1553742000,
                "main": {
                    "temp": 285.054,
                    "temp_min": 285.054,
                    "temp_max": 285.054,
                    "pressure": 1018.356,
                    "sea_level": 1018.356,
                    "grnd_level": 1004.798,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.08,
                    "deg": 223.133
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 03:00:00"
            },
            {
                "dt": 1553745600,
                "main": {
                    "temp": 284.795,
                    "temp_min": 284.795,
                    "temp_max": 284.795,
                    "pressure": 1019.469,
                    "sea_level": 1019.469,
                    "grnd_level": 1005.673,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.88,
                    "deg": 219.862
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 04:00:00"
            },
            {
                "dt": 1553749200,
                "main": {
                    "temp": 284.544,
                    "temp_min": 284.544,
                    "temp_max": 284.544,
                    "pressure": 1020.394,
                    "sea_level": 1020.394,
                    "grnd_level": 1006.657,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.58,
                    "deg": 223.743
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 05:00:00"
            },
            {
                "dt": 1553752800,
                "main": {
                    "temp": 284.467,
                    "temp_min": 284.467,
                    "temp_max": 284.467,
                    "pressure": 1021.219,
                    "sea_level": 1021.219,
                    "grnd_level": 1007.513,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 2.76,
                    "deg": 218.582
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 06:00:00"
            },
            {
                "dt": 1553756400,
                "main": {
                    "temp": 284.2,
                    "temp_min": 284.2,
                    "temp_max": 284.2,
                    "pressure": 1021.922,
                    "sea_level": 1021.922,
                    "grnd_level": 1008.183,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 2.13,
                    "deg": 201.136
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 07:00:00"
            },
            {
                "dt": 1553760000,
                "main": {
                    "temp": 283.9,
                    "temp_min": 283.9,
                    "temp_max": 283.9,
                    "pressure": 1022.543,
                    "sea_level": 1022.543,
                    "grnd_level": 1008.803,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 2.04,
                    "deg": 178.624
                },
                "rain": {
                    "1h": 0.126
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 08:00:00"
            },
            {
                "dt": 1553763600,
                "main": {
                    "temp": 283.8,
                    "temp_min": 283.8,
                    "temp_max": 283.8,
                    "pressure": 1023.004,
                    "sea_level": 1023.004,
                    "grnd_level": 1009.278,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 2.36,
                    "deg": 163.298
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 09:00:00"
            },
            {
                "dt": 1553767200,
                "main": {
                    "temp": 283.6,
                    "temp_min": 283.6,
                    "temp_max": 283.6,
                    "pressure": 1023.237,
                    "sea_level": 1023.237,
                    "grnd_level": 1009.499,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 2.83,
                    "deg": 155.68
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 10:00:00"
            },
            {
                "dt": 1553770800,
                "main": {
                    "temp": 283.433,
                    "temp_min": 283.433,
                    "temp_max": 283.433,
                    "pressure": 1023.313,
                    "sea_level": 1023.313,
                    "grnd_level": 1009.529,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 3.14,
                    "deg": 152.732
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 11:00:00"
            },
            {
                "dt": 1553774400,
                "main": {
                    "temp": 283.288,
                    "temp_min": 283.288,
                    "temp_max": 283.288,
                    "pressure": 1023.573,
                    "sea_level": 1023.573,
                    "grnd_level": 1009.787,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 3.26,
                    "deg": 153.514
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 12:00:00"
            },
            {
                "dt": 1553778000,
                "main": {
                    "temp": 283.2,
                    "temp_min": 283.2,
                    "temp_max": 283.2,
                    "pressure": 1023.878,
                    "sea_level": 1023.878,
                    "grnd_level": 1010.154,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 3.37,
                    "deg": 154.576
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-28 13:00:00"
            },
            {
                "dt": 1553781600,
                "main": {
                    "temp": 283.221,
                    "temp_min": 283.221,
                    "temp_max": 283.221,
                    "pressure": 1024.241,
                    "sea_level": 1024.241,
                    "grnd_level": 1010.485,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 52
                },
                "wind": {
                    "speed": 3.55,
                    "deg": 155.199
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 14:00:00"
            },
            {
                "dt": 1553785200,
                "main": {
                    "temp": 283.6,
                    "temp_min": 283.6,
                    "temp_max": 283.6,
                    "pressure": 1024.658,
                    "sea_level": 1024.658,
                    "grnd_level": 1010.95,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 63
                },
                "wind": {
                    "speed": 3.72,
                    "deg": 157.847
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 15:00:00"
            },
            {
                "dt": 1553788800,
                "main": {
                    "temp": 284.731,
                    "temp_min": 284.731,
                    "temp_max": 284.731,
                    "pressure": 1025.043,
                    "sea_level": 1025.043,
                    "grnd_level": 1011.494,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 4.02,
                    "deg": 167.265
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 16:00:00"
            },
            {
                "dt": 1553792400,
                "main": {
                    "temp": 285.995,
                    "temp_min": 285.995,
                    "temp_max": 285.995,
                    "pressure": 1025.416,
                    "sea_level": 1025.416,
                    "grnd_level": 1011.827,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 70
                },
                "wind": {
                    "speed": 4.2,
                    "deg": 178.064
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 17:00:00"
            },
            {
                "dt": 1553796000,
                "main": {
                    "temp": 286.949,
                    "temp_min": 286.949,
                    "temp_max": 286.949,
                    "pressure": 1025.681,
                    "sea_level": 1025.681,
                    "grnd_level": 1012.092,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 71
                },
                "wind": {
                    "speed": 4.27,
                    "deg": 192.162
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 18:00:00"
            },
            {
                "dt": 1553799600,
                "main": {
                    "temp": 287.6,
                    "temp_min": 287.6,
                    "temp_max": 287.6,
                    "pressure": 1025.845,
                    "sea_level": 1025.845,
                    "grnd_level": 1012.242,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 77
                },
                "wind": {
                    "speed": 4.54,
                    "deg": 206.559
                },
                "rain": {
                    "1h": 0.25
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 19:00:00"
            },
            {
                "dt": 1553803200,
                "main": {
                    "temp": 288.1,
                    "temp_min": 288.1,
                    "temp_max": 288.1,
                    "pressure": 1025.877,
                    "sea_level": 1025.877,
                    "grnd_level": 1012.27,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 4.82,
                    "deg": 218.177
                },
                "rain": {
                    "1h": 0.25
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 20:00:00"
            },
            {
                "dt": 1553806800,
                "main": {
                    "temp": 288.374,
                    "temp_min": 288.374,
                    "temp_max": 288.374,
                    "pressure": 1025.799,
                    "sea_level": 1025.799,
                    "grnd_level": 1012.244,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 5.21,
                    "deg": 226.407
                },
                "rain": {
                    "1h": 0.188
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 21:00:00"
            },
            {
                "dt": 1553810400,
                "main": {
                    "temp": 288.226,
                    "temp_min": 288.226,
                    "temp_max": 288.226,
                    "pressure": 1025.427,
                    "sea_level": 1025.427,
                    "grnd_level": 1011.894,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 49
                },
                "wind": {
                    "speed": 5.37,
                    "deg": 233.036
                },
                "rain": {
                    "1h": 0.124
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 22:00:00"
            },
            {
                "dt": 1553814000,
                "main": {
                    "temp": 288.1,
                    "temp_min": 288.1,
                    "temp_max": 288.1,
                    "pressure": 1025.102,
                    "sea_level": 1025.102,
                    "grnd_level": 1011.533,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 40
                },
                "wind": {
                    "speed": 5.23,
                    "deg": 238.27
                },
                "rain": {
                    "1h": 0.063
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-28 23:00:00"
            },
            {
                "dt": 1553817600,
                "main": {
                    "temp": 287.7,
                    "temp_min": 287.7,
                    "temp_max": 287.7,
                    "pressure": 1025.062,
                    "sea_level": 1025.062,
                    "grnd_level": 1011.478,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 34
                },
                "wind": {
                    "speed": 4.88,
                    "deg": 243.083
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 00:00:00"
            },
            {
                "dt": 1553821200,
                "main": {
                    "temp": 287.08,
                    "temp_min": 287.08,
                    "temp_max": 287.08,
                    "pressure": 1025.148,
                    "sea_level": 1025.148,
                    "grnd_level": 1011.624,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 4.36,
                    "deg": 246.472
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 01:00:00"
            },
            {
                "dt": 1553824800,
                "main": {
                    "temp": 286.139,
                    "temp_min": 286.139,
                    "temp_max": 286.139,
                    "pressure": 1025.433,
                    "sea_level": 1025.433,
                    "grnd_level": 1011.879,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 3.42,
                    "deg": 247.193
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 02:00:00"
            },
            {
                "dt": 1553828400,
                "main": {
                    "temp": 285.065,
                    "temp_min": 285.065,
                    "temp_max": 285.065,
                    "pressure": 1025.802,
                    "sea_level": 1025.802,
                    "grnd_level": 1012.204,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 2.79,
                    "deg": 243.012
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 03:00:00"
            },
            {
                "dt": 1553832000,
                "main": {
                    "temp": 284.678,
                    "temp_min": 284.678,
                    "temp_max": 284.678,
                    "pressure": 1026.4,
                    "sea_level": 1026.4,
                    "grnd_level": 1012.8,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 2.22,
                    "deg": 233.631
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 04:00:00"
            },
            {
                "dt": 1553835600,
                "main": {
                    "temp": 284.382,
                    "temp_min": 284.382,
                    "temp_max": 284.382,
                    "pressure": 1027.093,
                    "sea_level": 1027.093,
                    "grnd_level": 1013.411,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 1.74,
                    "deg": 222.163
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 05:00:00"
            },
            {
                "dt": 1553839200,
                "main": {
                    "temp": 284.025,
                    "temp_min": 284.025,
                    "temp_max": 284.025,
                    "pressure": 1027.555,
                    "sea_level": 1027.555,
                    "grnd_level": 1013.785,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.48,
                    "deg": 210.944
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 06:00:00"
            },
            {
                "dt": 1553842800,
                "main": {
                    "temp": 283.7,
                    "temp_min": 283.7,
                    "temp_max": 283.7,
                    "pressure": 1027.564,
                    "sea_level": 1027.564,
                    "grnd_level": 1013.768,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.44,
                    "deg": 200.304
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 07:00:00"
            },
            {
                "dt": 1553846400,
                "main": {
                    "temp": 283.574,
                    "temp_min": 283.574,
                    "temp_max": 283.574,
                    "pressure": 1027.561,
                    "sea_level": 1027.561,
                    "grnd_level": 1013.797,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.37,
                    "deg": 203.562
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 08:00:00"
            },
            {
                "dt": 1553850000,
                "main": {
                    "temp": 283.351,
                    "temp_min": 283.351,
                    "temp_max": 283.351,
                    "pressure": 1027.843,
                    "sea_level": 1027.843,
                    "grnd_level": 1014.055,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.32,
                    "deg": 215.22
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 09:00:00"
            },
            {
                "dt": 1553853600,
                "main": {
                    "temp": 283.225,
                    "temp_min": 283.225,
                    "temp_max": 283.225,
                    "pressure": 1027.926,
                    "sea_level": 1027.926,
                    "grnd_level": 1014.181,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 1.28,
                    "deg": 219.003
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 10:00:00"
            },
            {
                "dt": 1553857200,
                "main": {
                    "temp": 283.736,
                    "temp_min": 283.736,
                    "temp_max": 283.736,
                    "pressure": 1027.733,
                    "sea_level": 1027.733,
                    "grnd_level": 1014.011,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 1.21,
                    "deg": 213.73
                },
                "rain": {
                    "1h": 0.062
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 11:00:00"
            },
            {
                "dt": 1553860800,
                "main": {
                    "temp": 283.688,
                    "temp_min": 283.688,
                    "temp_max": 283.688,
                    "pressure": 1027.527,
                    "sea_level": 1027.527,
                    "grnd_level": 1013.788,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 26
                },
                "wind": {
                    "speed": 0.94,
                    "deg": 198.819
                },
                "rain": {
                    "1h": 0.188
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 12:00:00"
            },
            {
                "dt": 1553864400,
                "main": {
                    "temp": 283.651,
                    "temp_min": 283.651,
                    "temp_max": 283.651,
                    "pressure": 1027.396,
                    "sea_level": 1027.396,
                    "grnd_level": 1013.62,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 1.09,
                    "deg": 175.201
                },
                "rain": {
                    "1h": 0.125
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-29 13:00:00"
            },
            {
                "dt": 1553868000,
                "main": {
                    "temp": 283.145,
                    "temp_min": 283.145,
                    "temp_max": 283.145,
                    "pressure": 1027.457,
                    "sea_level": 1027.457,
                    "grnd_level": 1013.662,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 0.85,
                    "deg": 153.887
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 14:00:00"
            },
            {
                "dt": 1553871600,
                "main": {
                    "temp": 283.674,
                    "temp_min": 283.674,
                    "temp_max": 283.674,
                    "pressure": 1027.822,
                    "sea_level": 1027.822,
                    "grnd_level": 1014.095,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 38
                },
                "wind": {
                    "speed": 0.53,
                    "deg": 103.462
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 15:00:00"
            },
            {
                "dt": 1553875200,
                "main": {
                    "temp": 285.326,
                    "temp_min": 285.326,
                    "temp_max": 285.326,
                    "pressure": 1028.223,
                    "sea_level": 1028.223,
                    "grnd_level": 1014.796,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 28
                },
                "wind": {
                    "speed": 0.69,
                    "deg": 0.5
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 16:00:00"
            },
            {
                "dt": 1553878800,
                "main": {
                    "temp": 286.5,
                    "temp_min": 286.5,
                    "temp_max": 286.5,
                    "pressure": 1028.38,
                    "sea_level": 1028.38,
                    "grnd_level": 1014.967,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 23
                },
                "wind": {
                    "speed": 1.42,
                    "deg": 337.194
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 17:00:00"
            },
            {
                "dt": 1553882400,
                "main": {
                    "temp": 287.445,
                    "temp_min": 287.445,
                    "temp_max": 287.445,
                    "pressure": 1028.359,
                    "sea_level": 1028.359,
                    "grnd_level": 1015.161,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 2.11,
                    "deg": 322.011
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 18:00:00"
            },
            {
                "dt": 1553886000,
                "main": {
                    "temp": 288.149,
                    "temp_min": 288.149,
                    "temp_max": 288.149,
                    "pressure": 1028.067,
                    "sea_level": 1028.067,
                    "grnd_level": 1014.827,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.79,
                    "deg": 312.395
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 19:00:00"
            },
            {
                "dt": 1553889600,
                "main": {
                    "temp": 288.8,
                    "temp_min": 288.8,
                    "temp_max": 288.8,
                    "pressure": 1027.704,
                    "sea_level": 1027.704,
                    "grnd_level": 1014.411,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.49,
                    "deg": 304.036
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 20:00:00"
            },
            {
                "dt": 1553893200,
                "main": {
                    "temp": 289.264,
                    "temp_min": 289.264,
                    "temp_max": 289.264,
                    "pressure": 1027.397,
                    "sea_level": 1027.397,
                    "grnd_level": 1014.125,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.02,
                    "deg": 299.416
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 21:00:00"
            },
            {
                "dt": 1553896800,
                "main": {
                    "temp": 289.196,
                    "temp_min": 289.196,
                    "temp_max": 289.196,
                    "pressure": 1027.036,
                    "sea_level": 1027.036,
                    "grnd_level": 1013.687,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.36,
                    "deg": 295.606
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 22:00:00"
            },
            {
                "dt": 1553900400,
                "main": {
                    "temp": 288.743,
                    "temp_min": 288.743,
                    "temp_max": 288.743,
                    "pressure": 1026.627,
                    "sea_level": 1026.627,
                    "grnd_level": 1013.311,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 4.53,
                    "deg": 297.713
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-29 23:00:00"
            },
            {
                "dt": 1553904000,
                "main": {
                    "temp": 288.161,
                    "temp_min": 288.161,
                    "temp_max": 288.161,
                    "pressure": 1026.347,
                    "sea_level": 1026.347,
                    "grnd_level": 1013.019,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.51,
                    "deg": 299.009
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 00:00:00"
            },
            {
                "dt": 1553907600,
                "main": {
                    "temp": 287.33,
                    "temp_min": 287.33,
                    "temp_max": 287.33,
                    "pressure": 1026.38,
                    "sea_level": 1026.38,
                    "grnd_level": 1013.066,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.42,
                    "deg": 298.862
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 01:00:00"
            },
            {
                "dt": 1553911200,
                "main": {
                    "temp": 286.149,
                    "temp_min": 286.149,
                    "temp_max": 286.149,
                    "pressure": 1026.69,
                    "sea_level": 1026.69,
                    "grnd_level": 1013.382,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.97,
                    "deg": 296.475
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 02:00:00"
            },
            {
                "dt": 1553914800,
                "main": {
                    "temp": 284.95,
                    "temp_min": 284.95,
                    "temp_max": 284.95,
                    "pressure": 1027.124,
                    "sea_level": 1027.124,
                    "grnd_level": 1013.872,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 296.632
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 03:00:00"
            },
            {
                "dt": 1553918400,
                "main": {
                    "temp": 284.407,
                    "temp_min": 284.407,
                    "temp_max": 284.407,
                    "pressure": 1027.603,
                    "sea_level": 1027.603,
                    "grnd_level": 1014.29,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 3.13,
                    "deg": 309.538
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 04:00:00"
            },
            {
                "dt": 1553922000,
                "main": {
                    "temp": 284.095,
                    "temp_min": 284.095,
                    "temp_max": 284.095,
                    "pressure": 1027.86,
                    "sea_level": 1027.86,
                    "grnd_level": 1014.464,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 21
                },
                "wind": {
                    "speed": 2.52,
                    "deg": 318.251
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 05:00:00"
            },
            {
                "dt": 1553925600,
                "main": {
                    "temp": 283.877,
                    "temp_min": 283.877,
                    "temp_max": 283.877,
                    "pressure": 1027.676,
                    "sea_level": 1027.676,
                    "grnd_level": 1014.417,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 2.24,
                    "deg": 316.305
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 06:00:00"
            },
            {
                "dt": 1553929200,
                "main": {
                    "temp": 283.619,
                    "temp_min": 283.619,
                    "temp_max": 283.619,
                    "pressure": 1027.096,
                    "sea_level": 1027.096,
                    "grnd_level": 1013.701,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 1.71,
                    "deg": 329.231
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 07:00:00"
            },
            {
                "dt": 1553932800,
                "main": {
                    "temp": 283.277,
                    "temp_min": 283.277,
                    "temp_max": 283.277,
                    "pressure": 1026.464,
                    "sea_level": 1026.464,
                    "grnd_level": 1013.181,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 1.63,
                    "deg": 330.103
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 08:00:00"
            },
            {
                "dt": 1553936400,
                "main": {
                    "temp": 283.104,
                    "temp_min": 283.104,
                    "temp_max": 283.104,
                    "pressure": 1025.955,
                    "sea_level": 1025.955,
                    "grnd_level": 1012.695,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 338.271
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 09:00:00"
            },
            {
                "dt": 1553940000,
                "main": {
                    "temp": 282.804,
                    "temp_min": 282.804,
                    "temp_max": 282.804,
                    "pressure": 1025.47,
                    "sea_level": 1025.47,
                    "grnd_level": 1012.092,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 16
                },
                "wind": {
                    "speed": 1.32,
                    "deg": 352.233
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 10:00:00"
            },
            {
                "dt": 1553943600,
                "main": {
                    "temp": 282.504,
                    "temp_min": 282.504,
                    "temp_max": 282.504,
                    "pressure": 1025.051,
                    "sea_level": 1025.051,
                    "grnd_level": 1011.686,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 1.28,
                    "deg": 1.212
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 11:00:00"
            },
            {
                "dt": 1553947200,
                "main": {
                    "temp": 282.405,
                    "temp_min": 282.405,
                    "temp_max": 282.405,
                    "pressure": 1024.871,
                    "sea_level": 1024.871,
                    "grnd_level": 1011.615,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 15
                },
                "wind": {
                    "speed": 1.38,
                    "deg": 4.192
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 12:00:00"
            },
            {
                "dt": 1553950800,
                "main": {
                    "temp": 282.231,
                    "temp_min": 282.231,
                    "temp_max": 282.231,
                    "pressure": 1024.968,
                    "sea_level": 1024.968,
                    "grnd_level": 1011.792,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.45,
                    "deg": 5.252
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-30 13:00:00"
            },
            {
                "dt": 1553954400,
                "main": {
                    "temp": 282.048,
                    "temp_min": 282.048,
                    "temp_max": 282.048,
                    "pressure": 1025.284,
                    "sea_level": 1025.284,
                    "grnd_level": 1012.106,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.41,
                    "deg": 10.203
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 14:00:00"
            },
            {
                "dt": 1553958000,
                "main": {
                    "temp": 283.1,
                    "temp_min": 283.1,
                    "temp_max": 283.1,
                    "pressure": 1025.572,
                    "sea_level": 1025.572,
                    "grnd_level": 1012.457,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 1.32,
                    "deg": 20.764
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 15:00:00"
            },
            {
                "dt": 1553961600,
                "main": {
                    "temp": 284.852,
                    "temp_min": 284.852,
                    "temp_max": 284.852,
                    "pressure": 1025.573,
                    "sea_level": 1025.573,
                    "grnd_level": 1012.657,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 11
                },
                "wind": {
                    "speed": 1.69,
                    "deg": 22.262
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 16:00:00"
            },
            {
                "dt": 1553965200,
                "main": {
                    "temp": 286.7,
                    "temp_min": 286.7,
                    "temp_max": 286.7,
                    "pressure": 1025.603,
                    "sea_level": 1025.603,
                    "grnd_level": 1012.698,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 13
                },
                "wind": {
                    "speed": 2.11,
                    "deg": 20.985
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 17:00:00"
            },
            {
                "dt": 1553968800,
                "main": {
                    "temp": 288.221,
                    "temp_min": 288.221,
                    "temp_max": 288.221,
                    "pressure": 1025.72,
                    "sea_level": 1025.72,
                    "grnd_level": 1012.712,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 16
                },
                "wind": {
                    "speed": 2.53,
                    "deg": 12.934
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 18:00:00"
            },
            {
                "dt": 1553972400,
                "main": {
                    "temp": 289.507,
                    "temp_min": 289.507,
                    "temp_max": 289.507,
                    "pressure": 1025.708,
                    "sea_level": 1025.708,
                    "grnd_level": 1012.721,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 51
                },
                "wind": {
                    "speed": 3.05,
                    "deg": 358.57
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 19:00:00"
            },
            {
                "dt": 1553976000,
                "main": {
                    "temp": 290.481,
                    "temp_min": 290.481,
                    "temp_max": 290.481,
                    "pressure": 1025.351,
                    "sea_level": 1025.351,
                    "grnd_level": 1012.311,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 53
                },
                "wind": {
                    "speed": 3.21,
                    "deg": 344.278
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 20:00:00"
            },
            {
                "dt": 1553979600,
                "main": {
                    "temp": 291.131,
                    "temp_min": 291.131,
                    "temp_max": 291.131,
                    "pressure": 1024.767,
                    "sea_level": 1024.767,
                    "grnd_level": 1011.687,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 42
                },
                "wind": {
                    "speed": 3.35,
                    "deg": 333.603
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 21:00:00"
            },
            {
                "dt": 1553983200,
                "main": {
                    "temp": 291.431,
                    "temp_min": 291.431,
                    "temp_max": 291.431,
                    "pressure": 1024.056,
                    "sea_level": 1024.056,
                    "grnd_level": 1011.05,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 42
                },
                "wind": {
                    "speed": 3.64,
                    "deg": 319.735
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 22:00:00"
            },
            {
                "dt": 1553986800,
                "main": {
                    "temp": 291.045,
                    "temp_min": 291.045,
                    "temp_max": 291.045,
                    "pressure": 1023.473,
                    "sea_level": 1023.473,
                    "grnd_level": 1010.505,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 43
                },
                "wind": {
                    "speed": 3.88,
                    "deg": 311.347
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-30 23:00:00"
            },
            {
                "dt": 1553990400,
                "main": {
                    "temp": 290.505,
                    "temp_min": 290.505,
                    "temp_max": 290.505,
                    "pressure": 1023.071,
                    "sea_level": 1023.071,
                    "grnd_level": 1010.061,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 46
                },
                "wind": {
                    "speed": 3.6,
                    "deg": 307.293
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 00:00:00"
            },
            {
                "dt": 1553994000,
                "main": {
                    "temp": 289.589,
                    "temp_min": 289.589,
                    "temp_max": 289.589,
                    "pressure": 1022.991,
                    "sea_level": 1022.991,
                    "grnd_level": 1009.931,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 46
                },
                "wind": {
                    "speed": 3.54,
                    "deg": 304.143
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 01:00:00"
            },
            {
                "dt": 1553997600,
                "main": {
                    "temp": 288.115,
                    "temp_min": 288.115,
                    "temp_max": 288.115,
                    "pressure": 1023.357,
                    "sea_level": 1023.357,
                    "grnd_level": 1010.412,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 3.42,
                    "deg": 300.364
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 02:00:00"
            },
            {
                "dt": 1554001200,
                "main": {
                    "temp": 286.582,
                    "temp_min": 286.582,
                    "temp_max": 286.582,
                    "pressure": 1023.939,
                    "sea_level": 1023.939,
                    "grnd_level": 1011.07,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 16
                },
                "wind": {
                    "speed": 3.12,
                    "deg": 295.458
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 03:00:00"
            },
            {
                "dt": 1554004800,
                "main": {
                    "temp": 285.933,
                    "temp_min": 285.933,
                    "temp_max": 285.933,
                    "pressure": 1024.588,
                    "sea_level": 1024.588,
                    "grnd_level": 1011.742,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 2.53,
                    "deg": 298.184
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 04:00:00"
            },
            {
                "dt": 1554008400,
                "main": {
                    "temp": 285.5,
                    "temp_min": 285.5,
                    "temp_max": 285.5,
                    "pressure": 1024.987,
                    "sea_level": 1024.987,
                    "grnd_level": 1011.966,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 1.52,
                    "deg": 299.586
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 05:00:00"
            },
            {
                "dt": 1554012000,
                "main": {
                    "temp": 285.152,
                    "temp_min": 285.152,
                    "temp_max": 285.152,
                    "pressure": 1024.93,
                    "sea_level": 1024.93,
                    "grnd_level": 1011.704,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 1.11,
                    "deg": 288.747
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 06:00:00"
            },
            {
                "dt": 1554015600,
                "main": {
                    "temp": 284.977,
                    "temp_min": 284.977,
                    "temp_max": 284.977,
                    "pressure": 1024.641,
                    "sea_level": 1024.641,
                    "grnd_level": 1011.521,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 39
                },
                "wind": {
                    "speed": 1.48,
                    "deg": 288.85
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 07:00:00"
            },
            {
                "dt": 1554019200,
                "main": {
                    "temp": 284.733,
                    "temp_min": 284.733,
                    "temp_max": 284.733,
                    "pressure": 1024.529,
                    "sea_level": 1024.529,
                    "grnd_level": 1011.302,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 47
                },
                "wind": {
                    "speed": 1.1,
                    "deg": 297.705
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 08:00:00"
            },
            {
                "dt": 1554022800,
                "main": {
                    "temp": 284.506,
                    "temp_min": 284.506,
                    "temp_max": 284.506,
                    "pressure": 1024.47,
                    "sea_level": 1024.47,
                    "grnd_level": 1011.156,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 54
                },
                "wind": {
                    "speed": 1.06,
                    "deg": 304.531
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 09:00:00"
            },
            {
                "dt": 1554026400,
                "main": {
                    "temp": 284.368,
                    "temp_min": 284.368,
                    "temp_max": 284.368,
                    "pressure": 1024.318,
                    "sea_level": 1024.318,
                    "grnd_level": 1010.949,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 61
                },
                "wind": {
                    "speed": 1.11,
                    "deg": 313.937
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 10:00:00"
            },
            {
                "dt": 1554030000,
                "main": {
                    "temp": 284.2,
                    "temp_min": 284.2,
                    "temp_max": 284.2,
                    "pressure": 1024.172,
                    "sea_level": 1024.172,
                    "grnd_level": 1010.773,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 63
                },
                "wind": {
                    "speed": 1.11,
                    "deg": 323.47
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 11:00:00"
            },
            {
                "dt": 1554033600,
                "main": {
                    "temp": 284.083,
                    "temp_min": 284.083,
                    "temp_max": 284.083,
                    "pressure": 1024.132,
                    "sea_level": 1024.132,
                    "grnd_level": 1010.753,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 1.13,
                    "deg": 330.631
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 12:00:00"
            },
            {
                "dt": 1554037200,
                "main": {
                    "temp": 283.921,
                    "temp_min": 283.921,
                    "temp_max": 283.921,
                    "pressure": 1024.121,
                    "sea_level": 1024.121,
                    "grnd_level": 1010.717,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 43
                },
                "wind": {
                    "speed": 1,
                    "deg": 349.952
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-03-31 13:00:00"
            },
            {
                "dt": 1554040800,
                "main": {
                    "temp": 283.835,
                    "temp_min": 283.835,
                    "temp_max": 283.835,
                    "pressure": 1024.185,
                    "sea_level": 1024.185,
                    "grnd_level": 1010.794,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 0.92,
                    "deg": 355.835
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 14:00:00"
            },
            {
                "dt": 1554044400,
                "main": {
                    "temp": 285.1,
                    "temp_min": 285.1,
                    "temp_max": 285.1,
                    "pressure": 1024.272,
                    "sea_level": 1024.272,
                    "grnd_level": 1010.99,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 47
                },
                "wind": {
                    "speed": 0.97,
                    "deg": 352.222
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 15:00:00"
            },
            {
                "dt": 1554048000,
                "main": {
                    "temp": 286.995,
                    "temp_min": 286.995,
                    "temp_max": 286.995,
                    "pressure": 1024.177,
                    "sea_level": 1024.177,
                    "grnd_level": 1011.159,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 1.35,
                    "deg": 337.56
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 16:00:00"
            },
            {
                "dt": 1554051600,
                "main": {
                    "temp": 288.9,
                    "temp_min": 288.9,
                    "temp_max": 288.9,
                    "pressure": 1023.992,
                    "sea_level": 1023.992,
                    "grnd_level": 1011.112,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 1.69,
                    "deg": 347.482
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-03-31 17:00:00"
            }
        ],
        "city": {
            "id": 420006353,
            "name": "Mountain View",
            "coord": {
                "lat": 37.3894,
                "lon": -122.0833
            },
            "country": "US"
        }
    },
    ['https://api.openweathermap.org/data/2.5/onecall/timemachine?exclude=minutely&lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02&dt=1595100167']: {
        "lat": 50.07,
        "lon": 14.42,
        "timezone": "Europe/Prague",
        "timezone_offset": 7200,
        "current": {
            "dt": 1595100167,
            "sunrise": 1595041993,
            "sunset": 1595099011,
            "temp": 290.57,
            "feels_like": 291.96,
            "pressure": 1015,
            "humidity": 93,
            "dew_point": 289.43,
            "uvi": 6.74,
            "clouds": 22,
            "visibility": 10000,
            "wind_speed": 1,
            "wind_deg": 0,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "rain": {
                "1h": 3.75
            }
        },
        "hourly": [
            {
                "dt": 1595030400,
                "temp": 285.16,
                "feels_like": 283.71,
                "pressure": 1019,
                "humidity": 87,
                "dew_point": 283.07,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.1,
                "wind_deg": 290,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ]
            },
            {
                "dt": 1595034000,
                "temp": 284.99,
                "feels_like": 284.19,
                "pressure": 1019,
                "humidity": 93,
                "dew_point": 283.9,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 1.5,
                "wind_deg": 280,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ]
            },
            {
                "dt": 1595037600,
                "temp": 284.66,
                "feels_like": 283,
                "pressure": 1019,
                "humidity": 93,
                "dew_point": 283.57,
                "clouds": 28,
                "visibility": 10000,
                "wind_speed": 2.6,
                "wind_deg": 300,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ]
            },
            {
                "dt": 1595041200,
                "temp": 284.39,
                "feels_like": 283.43,
                "pressure": 1019,
                "humidity": 93,
                "dew_point": 283.3,
                "clouds": 21,
                "visibility": 10000,
                "wind_speed": 1.5,
                "wind_deg": 280,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ]
            },
            {
                "dt": 1595044800,
                "temp": 284.83,
                "feels_like": 283.22,
                "pressure": 1019,
                "humidity": 93,
                "dew_point": 283.74,
                "clouds": 15,
                "visibility": 10000,
                "wind_speed": 2.6,
                "wind_deg": 290,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ]
            },
            {
                "dt": 1595048400,
                "temp": 285.57,
                "feels_like": 284.52,
                "pressure": 1020,
                "humidity": 93,
                "dew_point": 284.47,
                "clouds": 12,
                "visibility": 10000,
                "wind_speed": 2.1,
                "wind_deg": 290,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ]
            },
            {
                "dt": 1595052000,
                "temp": 286.82,
                "feels_like": 285.48,
                "pressure": 1019,
                "humidity": 87,
                "dew_point": 284.7,
                "clouds": 11,
                "visibility": 10000,
                "wind_speed": 2.6,
                "wind_deg": 320,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ]
            },
            {
                "dt": 1595055600,
                "temp": 288.33,
                "feels_like": 287.1,
                "pressure": 1019,
                "humidity": 87,
                "dew_point": 286.18,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 3.1,
                "wind_deg": 310,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ]
            },
            {
                "dt": 1595059200,
                "temp": 290.07,
                "feels_like": 288.09,
                "pressure": 1016,
                "humidity": 77,
                "dew_point": 286.02,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 4.1,
                "wind_deg": 320,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ]
            },
            {
                "dt": 1595062800,
                "temp": 291.94,
                "feels_like": 290.62,
                "pressure": 1016,
                "humidity": 68,
                "dew_point": 285.92,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 3.1,
                "wind_deg": 330,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ]
            },
            {
                "dt": 1595066400,
                "temp": 292.99,
                "feels_like": 292.32,
                "pressure": 1015,
                "humidity": 63,
                "dew_point": 285.75,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 2.1,
                "wind_deg": 20,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ]
            },
            {
                "dt": 1595070000,
                "temp": 293.21,
                "feels_like": 293.1,
                "pressure": 1016,
                "humidity": 64,
                "dew_point": 286.2,
                "clouds": 46,
                "visibility": 10000,
                "wind_speed": 1.5,
                "wind_deg": 20,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 0.16
                }
            },
            {
                "dt": 1595073600,
                "temp": 295.23,
                "feels_like": 293.61,
                "pressure": 1014,
                "humidity": 56,
                "dew_point": 286.05,
                "clouds": 52,
                "visibility": 10000,
                "wind_speed": 3.6,
                "wind_deg": 330,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ]
            },
            {
                "dt": 1595077200,
                "temp": 295.77,
                "feels_like": 295.36,
                "pressure": 1011,
                "humidity": 56,
                "dew_point": 286.56,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 2.1,
                "wind_deg": 70,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ]
            },
            {
                "dt": 1595080800,
                "temp": 296.24,
                "feels_like": 295.07,
                "pressure": 1018,
                "humidity": 50,
                "dew_point": 285.26,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 2.6,
                "wind_deg": 20,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ]
            },
            {
                "dt": 1595084400,
                "temp": 296.18,
                "feels_like": 294.99,
                "pressure": 1016,
                "humidity": 50,
                "dew_point": 285.21,
                "clouds": 67,
                "visibility": 10000,
                "wind_speed": 2.6,
                "wind_deg": 20,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 0.77
                }
            },
            {
                "dt": 1595088000,
                "temp": 296.54,
                "feels_like": 296.51,
                "pressure": 1005,
                "humidity": 53,
                "dew_point": 286.43,
                "clouds": 71,
                "visibility": 10000,
                "wind_speed": 1.5,
                "wind_deg": 60,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 1.2
                }
            },
            {
                "dt": 1595091600,
                "temp": 295.94,
                "feels_like": 295.18,
                "pressure": 1014,
                "humidity": 47,
                "dew_point": 284.05,
                "clouds": 40,
                "visibility": 10000,
                "wind_speed": 1.5,
                "wind_deg": 360,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ]
            },
            {
                "dt": 1595095200,
                "temp": 293.34,
                "feels_like": 290.07,
                "pressure": 1018,
                "humidity": 93,
                "dew_point": 292.17,
                "clouds": 75,
                "visibility": 1800,
                "wind_speed": 9.3,
                "wind_deg": 90,
                "weather": [
                    {
                        "id": 202,
                        "main": "Thunderstorm",
                        "description": "thunderstorm with heavy rain",
                        "icon": "11d"
                    },
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 2.79
                }
            },
            {
                "dt": 1595098800,
                "temp": 291.06,
                "feels_like": 291.87,
                "pressure": 1014,
                "humidity": 93,
                "dew_point": 289.91,
                "clouds": 22,
                "visibility": 10000,
                "wind_speed": 2.1,
                "wind_deg": 320,
                "weather": [
                    {
                        "id": 502,
                        "main": "Rain",
                        "description": "heavy intensity rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 4.32
                }
            },
            {
                "dt": 1595102400,
                "temp": 290.28,
                "feels_like": 291.56,
                "pressure": 1016,
                "humidity": 93,
                "dew_point": 289.14,
                "clouds": 48,
                "visibility": 10000,
                "wind_speed": 1,
                "wind_deg": 0,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "rain": {
                    "1h": 0.38
                }
            },
            {
                "dt": 1595106000,
                "temp": 290.2,
                "feels_like": 291.35,
                "pressure": 1016,
                "humidity": 93,
                "dew_point": 289.06,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 1.15,
                "wind_deg": 359,
                "weather": [
                    {
                        "id": 520,
                        "main": "Rain",
                        "description": "light intensity shower rain",
                        "icon": "09n"
                    }
                ]
            },
            {
                "dt": 1595109600,
                "temp": 290.05,
                "feels_like": 291.69,
                "pressure": 1018,
                "humidity": 100,
                "dew_point": 290.05,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 1,
                "wind_deg": 0,
                "weather": [
                    {
                        "id": 521,
                        "main": "Rain",
                        "description": "shower rain",
                        "icon": "09n"
                    }
                ],
                "rain": {
                    "1h": 0.64
                }
            },
            {
                "dt": 1595113200,
                "temp": 289.82,
                "feels_like": 290.16,
                "pressure": 1016,
                "humidity": 93,
                "dew_point": 288.68,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 2.1,
                "wind_deg": 320,
                "weather": [
                    {
                        "id": 520,
                        "main": "Rain",
                        "description": "light intensity shower rain",
                        "icon": "09n"
                    }
                ],
                "rain": {
                    "1h": 0.38
                }
            }
        ],
    },
    ['https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02']: {
        "lat": 50.07,
        "lon": 14.42,
        "timezone": "Europe/Prague",
        "timezone_offset": 7200,
        "current": {
            "dt": 1595155575,
            "sunrise": 1595128465,
            "sunset": 1595185347,
            "temp": 298.82,
            "feels_like": 299.52,
            "pressure": 1016,
            "humidity": 53,
            "dew_point": 288.53,
            "uvi": 6.98,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 1.5,
            "wind_deg": 0,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "rain": {}
        },
        "hourly": [
            {
                "dt": 1595152800,
                "temp": 298.82,
                "feels_like": 299.06,
                "pressure": 1016,
                "humidity": 53,
                "dew_point": 288.53,
                "clouds": 40,
                "visibility": 10000,
                "wind_speed": 2.16,
                "wind_deg": 344,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0.44
            },
            {
                "dt": 1595156400,
                "temp": 298.73,
                "feels_like": 298.85,
                "pressure": 1016,
                "humidity": 52,
                "dew_point": 288.15,
                "clouds": 20,
                "visibility": 10000,
                "wind_speed": 2.13,
                "wind_deg": 352,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "pop": 0.54
            },
            {
                "dt": 1595160000,
                "temp": 299.25,
                "feels_like": 299.15,
                "pressure": 1015,
                "humidity": 49,
                "dew_point": 287.71,
                "clouds": 9,
                "visibility": 10000,
                "wind_speed": 2.22,
                "wind_deg": 4,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0.62
            },
            {
                "dt": 1595163600,
                "temp": 299.81,
                "feels_like": 299.45,
                "pressure": 1015,
                "humidity": 46,
                "dew_point": 287.24,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 2.35,
                "wind_deg": 15,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0.75
            },
            {
                "dt": 1595167200,
                "temp": 300,
                "feels_like": 299.62,
                "pressure": 1015,
                "humidity": 46,
                "dew_point": 287.42,
                "clouds": 20,
                "visibility": 10000,
                "wind_speed": 2.47,
                "wind_deg": 15,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "pop": 0.79
            },
            {
                "dt": 1595170800,
                "temp": 299.57,
                "feels_like": 299.51,
                "pressure": 1015,
                "humidity": 49,
                "dew_point": 288.17,
                "clouds": 46,
                "visibility": 10000,
                "wind_speed": 2.31,
                "wind_deg": 12,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.87,
                "rain": {
                    "1h": 0.18
                }
            },
            {
                "dt": 1595174400,
                "temp": 298.78,
                "feels_like": 299.6,
                "pressure": 1014,
                "humidity": 55,
                "dew_point": 289.18,
                "clouds": 60,
                "visibility": 10000,
                "wind_speed": 1.62,
                "wind_deg": 18,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.96,
                "rain": {
                    "1h": 0.43
                }
            },
            {
                "dt": 1595178000,
                "temp": 297.1,
                "feels_like": 299.03,
                "pressure": 1014,
                "humidity": 66,
                "dew_point": 290.39,
                "clouds": 68,
                "visibility": 10000,
                "wind_speed": 0.76,
                "wind_deg": 5,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "pop": 1,
                "rain": {
                    "1h": 1.03
                }
            },
            {
                "dt": 1595181600,
                "temp": 295.92,
                "feels_like": 297.8,
                "pressure": 1014,
                "humidity": 69,
                "dew_point": 290.08,
                "clouds": 66,
                "visibility": 10000,
                "wind_speed": 0.59,
                "wind_deg": 342,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 1,
                "rain": {
                    "1h": 0.21
                }
            },
            {
                "dt": 1595185200,
                "temp": 293.88,
                "feels_like": 295.49,
                "pressure": 1015,
                "humidity": 73,
                "dew_point": 289,
                "clouds": 40,
                "visibility": 10000,
                "wind_speed": 0.38,
                "wind_deg": 317,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0.04
            },
            {
                "dt": 1595188800,
                "temp": 293.05,
                "feels_like": 294.39,
                "pressure": 1015,
                "humidity": 76,
                "dew_point": 288.77,
                "clouds": 58,
                "visibility": 10000,
                "wind_speed": 0.67,
                "wind_deg": 261,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.03
            },
            {
                "dt": 1595192400,
                "temp": 292.48,
                "feels_like": 293.56,
                "pressure": 1015,
                "humidity": 78,
                "dew_point": 288.63,
                "clouds": 71,
                "visibility": 10000,
                "wind_speed": 0.97,
                "wind_deg": 264,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.03
            },
            {
                "dt": 1595196000,
                "temp": 292.11,
                "feels_like": 293.01,
                "pressure": 1015,
                "humidity": 79,
                "dew_point": 288.53,
                "clouds": 77,
                "visibility": 10000,
                "wind_speed": 1.15,
                "wind_deg": 263,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.03
            },
            {
                "dt": 1595199600,
                "temp": 291.64,
                "feels_like": 292.41,
                "pressure": 1015,
                "humidity": 80,
                "dew_point": 288.27,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 1.2,
                "wind_deg": 261,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.03
            },
            {
                "dt": 1595203200,
                "temp": 291.32,
                "feels_like": 291.78,
                "pressure": 1015,
                "humidity": 81,
                "dew_point": 288.09,
                "clouds": 79,
                "visibility": 10000,
                "wind_speed": 1.57,
                "wind_deg": 267,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.03
            },
            {
                "dt": 1595206800,
                "temp": 291.03,
                "feels_like": 291.56,
                "pressure": 1015,
                "humidity": 82,
                "dew_point": 287.93,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.43,
                "wind_deg": 260,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.17
            },
            {
                "dt": 1595210400,
                "temp": 290.7,
                "feels_like": 291.02,
                "pressure": 1015,
                "humidity": 82,
                "dew_point": 287.74,
                "clouds": 97,
                "visibility": 10000,
                "wind_speed": 1.57,
                "wind_deg": 248,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.22
            },
            {
                "dt": 1595214000,
                "temp": 290.37,
                "feels_like": 290.66,
                "pressure": 1015,
                "humidity": 84,
                "dew_point": 287.66,
                "clouds": 95,
                "visibility": 10000,
                "wind_speed": 1.64,
                "wind_deg": 247,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.31
            },
            {
                "dt": 1595217600,
                "temp": 290.2,
                "feels_like": 290.35,
                "pressure": 1015,
                "humidity": 85,
                "dew_point": 287.81,
                "clouds": 77,
                "visibility": 10000,
                "wind_speed": 1.85,
                "wind_deg": 263,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.36,
                "rain": {
                    "1h": 0.33
                }
            },
            {
                "dt": 1595221200,
                "temp": 291.59,
                "feels_like": 291.99,
                "pressure": 1015,
                "humidity": 81,
                "dew_point": 288.42,
                "clouds": 63,
                "visibility": 10000,
                "wind_speed": 1.8,
                "wind_deg": 260,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.44,
                "rain": {
                    "1h": 0.3
                }
            },
            {
                "dt": 1595224800,
                "temp": 293.25,
                "feels_like": 293.62,
                "pressure": 1015,
                "humidity": 76,
                "dew_point": 288.93,
                "clouds": 53,
                "visibility": 10000,
                "wind_speed": 2.17,
                "wind_deg": 267,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.36
            },
            {
                "dt": 1595228400,
                "temp": 294.98,
                "feels_like": 295.37,
                "pressure": 1016,
                "humidity": 68,
                "dew_point": 289.02,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.09,
                "wind_deg": 285,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0.46
            },
            {
                "dt": 1595232000,
                "temp": 296.61,
                "feels_like": 296.8,
                "pressure": 1015,
                "humidity": 61,
                "dew_point": 288.85,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 2.3,
                "wind_deg": 303,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.79,
                "rain": {
                    "1h": 0.79
                }
            },
            {
                "dt": 1595235600,
                "temp": 297.89,
                "feels_like": 297.54,
                "pressure": 1015,
                "humidity": 54,
                "dew_point": 288.13,
                "clouds": 35,
                "visibility": 10000,
                "wind_speed": 2.7,
                "wind_deg": 295,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.86,
                "rain": {
                    "1h": 0.19
                }
            },
            {
                "dt": 1595239200,
                "temp": 298.38,
                "feels_like": 297.7,
                "pressure": 1015,
                "humidity": 52,
                "dew_point": 288.03,
                "clouds": 52,
                "visibility": 10000,
                "wind_speed": 3.11,
                "wind_deg": 290,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.9,
                "rain": {
                    "1h": 0.13
                }
            },
            {
                "dt": 1595242800,
                "temp": 299.19,
                "feels_like": 298.49,
                "pressure": 1015,
                "humidity": 49,
                "dew_point": 287.84,
                "clouds": 62,
                "visibility": 10000,
                "wind_speed": 3.05,
                "wind_deg": 289,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.87
            },
            {
                "dt": 1595246400,
                "temp": 299.42,
                "feels_like": 297.79,
                "pressure": 1016,
                "humidity": 49,
                "dew_point": 288.03,
                "clouds": 68,
                "visibility": 10000,
                "wind_speed": 4.48,
                "wind_deg": 295,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.96,
                "rain": {
                    "1h": 0.25
                }
            },
            {
                "dt": 1595250000,
                "temp": 297.88,
                "feels_like": 296.35,
                "pressure": 1016,
                "humidity": 57,
                "dew_point": 288.89,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 4.82,
                "wind_deg": 307,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.99,
                "rain": {
                    "1h": 0.74
                }
            },
            {
                "dt": 1595253600,
                "temp": 297.54,
                "feels_like": 296.17,
                "pressure": 1016,
                "humidity": 58,
                "dew_point": 288.86,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 4.57,
                "wind_deg": 317,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.99,
                "rain": {
                    "1h": 0.59
                }
            },
            {
                "dt": 1595257200,
                "temp": 297.33,
                "feels_like": 296.16,
                "pressure": 1016,
                "humidity": 58,
                "dew_point": 288.73,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 4.18,
                "wind_deg": 326,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.99,
                "rain": {
                    "1h": 0.2
                }
            },
            {
                "dt": 1595260800,
                "temp": 297.06,
                "feels_like": 296.01,
                "pressure": 1017,
                "humidity": 59,
                "dew_point": 288.74,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 4.02,
                "wind_deg": 327,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.96,
                "rain": {
                    "1h": 0.11
                }
            },
            {
                "dt": 1595264400,
                "temp": 295.83,
                "feels_like": 294.97,
                "pressure": 1017,
                "humidity": 64,
                "dew_point": 288.87,
                "clouds": 79,
                "visibility": 10000,
                "wind_speed": 3.81,
                "wind_deg": 325,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.97,
                "rain": {
                    "1h": 0.34
                }
            },
            {
                "dt": 1595268000,
                "temp": 294.1,
                "feels_like": 293.44,
                "pressure": 1018,
                "humidity": 69,
                "dew_point": 288.33,
                "clouds": 66,
                "visibility": 10000,
                "wind_speed": 3.27,
                "wind_deg": 332,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.97
            },
            {
                "dt": 1595271600,
                "temp": 292.15,
                "feels_like": 291.42,
                "pressure": 1019,
                "humidity": 74,
                "dew_point": 287.55,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.98,
                "wind_deg": 336,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595275200,
                "temp": 291.13,
                "feels_like": 290.44,
                "pressure": 1020,
                "humidity": 79,
                "dew_point": 287.46,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.93,
                "wind_deg": 334,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595278800,
                "temp": 290.38,
                "feels_like": 289.69,
                "pressure": 1020,
                "humidity": 82,
                "dew_point": 287.35,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.86,
                "wind_deg": 330,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595282400,
                "temp": 289.67,
                "feels_like": 289.04,
                "pressure": 1020,
                "humidity": 83,
                "dew_point": 286.92,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 2.52,
                "wind_deg": 323,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595286000,
                "temp": 289.14,
                "feels_like": 288.88,
                "pressure": 1021,
                "humidity": 84,
                "dew_point": 286.49,
                "clouds": 16,
                "visibility": 10000,
                "wind_speed": 1.84,
                "wind_deg": 322,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595289600,
                "temp": 288.5,
                "feels_like": 288.37,
                "pressure": 1021,
                "humidity": 85,
                "dew_point": 286.04,
                "clouds": 15,
                "visibility": 10000,
                "wind_speed": 1.45,
                "wind_deg": 320,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595293200,
                "temp": 288.15,
                "feels_like": 288.03,
                "pressure": 1021,
                "humidity": 84,
                "dew_point": 285.56,
                "clouds": 11,
                "visibility": 10000,
                "wind_speed": 1.2,
                "wind_deg": 323,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595296800,
                "temp": 288.48,
                "feels_like": 288.33,
                "pressure": 1021,
                "humidity": 83,
                "dew_point": 285.66,
                "clouds": 50,
                "visibility": 10000,
                "wind_speed": 1.3,
                "wind_deg": 326,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595300400,
                "temp": 287.63,
                "feels_like": 287.11,
                "pressure": 1021,
                "humidity": 84,
                "dew_point": 285.1,
                "clouds": 41,
                "visibility": 10000,
                "wind_speed": 1.55,
                "wind_deg": 336,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595304000,
                "temp": 287.57,
                "feels_like": 287.13,
                "pressure": 1021,
                "humidity": 84,
                "dew_point": 285.08,
                "clouds": 32,
                "visibility": 10000,
                "wind_speed": 1.41,
                "wind_deg": 346,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595307600,
                "temp": 289,
                "feels_like": 288.88,
                "pressure": 1021,
                "humidity": 80,
                "dew_point": 285.6,
                "clouds": 29,
                "visibility": 10000,
                "wind_speed": 1.23,
                "wind_deg": 345,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595311200,
                "temp": 290.36,
                "feels_like": 289.87,
                "pressure": 1021,
                "humidity": 73,
                "dew_point": 285.58,
                "clouds": 29,
                "visibility": 10000,
                "wind_speed": 1.73,
                "wind_deg": 3,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595314800,
                "temp": 291.62,
                "feels_like": 291,
                "pressure": 1021,
                "humidity": 67,
                "dew_point": 285.53,
                "clouds": 25,
                "visibility": 10000,
                "wind_speed": 1.87,
                "wind_deg": 18,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595318400,
                "temp": 292.44,
                "feels_like": 291.79,
                "pressure": 1021,
                "humidity": 63,
                "dew_point": 285.44,
                "clouds": 46,
                "visibility": 10000,
                "wind_speed": 1.84,
                "wind_deg": 25,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1595322000,
                "temp": 293.44,
                "feels_like": 292.94,
                "pressure": 1021,
                "humidity": 60,
                "dew_point": 285.59,
                "clouds": 55,
                "visibility": 10000,
                "wind_speed": 1.72,
                "wind_deg": 22,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            }
        ],
        "daily": [
            {
                "dt": 1595156400,
                "sunrise": 1595128465,
                "sunset": 1595185347,
                "temp": {
                    "day": 299.09,
                    "min": 291.32,
                    "max": 299.41,
                    "night": 291.32,
                    "eve": 296.11,
                    "morn": 298.82
                },
                "feels_like": {
                    "day": 299.05,
                    "night": 291.78,
                    "eve": 297.97,
                    "morn": 298.94
                },
                "pressure": 1016,
                "humidity": 50,
                "dew_point": 287.88,
                "wind_speed": 2.22,
                "wind_deg": 4,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 20,
                "pop": 1,
                "rain": 1.83,
                "uvi": 6.98
            },
            {
                "dt": 1595242800,
                "sunrise": 1595214939,
                "sunset": 1595271681,
                "temp": {
                    "day": 299.42,
                    "min": 288.5,
                    "max": 299.42,
                    "night": 288.5,
                    "eve": 294.1,
                    "morn": 293.25
                },
                "feels_like": {
                    "day": 297.79,
                    "night": 288.37,
                    "eve": 293.44,
                    "morn": 293.62
                },
                "pressure": 1016,
                "humidity": 49,
                "dew_point": 288.03,
                "wind_speed": 4.48,
                "wind_deg": 295,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 68,
                "pop": 0.99,
                "rain": 4.19,
                "uvi": 7.22
            },
            {
                "dt": 1595329200,
                "sunrise": 1595301414,
                "sunset": 1595358013,
                "temp": {
                    "day": 296.49,
                    "min": 289.61,
                    "max": 296.49,
                    "night": 289.61,
                    "eve": 293.14,
                    "morn": 290.36
                },
                "feels_like": {
                    "day": 295.91,
                    "night": 287.15,
                    "eve": 291.58,
                    "morn": 289.87
                },
                "pressure": 1020,
                "humidity": 50,
                "dew_point": 285.76,
                "wind_speed": 1.86,
                "wind_deg": 343,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 49,
                "pop": 0.38,
                "rain": 0.25,
                "uvi": 6.91
            },
            {
                "dt": 1595415600,
                "sunrise": 1595387891,
                "sunset": 1595444342,
                "temp": {
                    "day": 294.12,
                    "min": 286.24,
                    "max": 294.7,
                    "night": 286.24,
                    "eve": 291.57,
                    "morn": 288.78
                },
                "feels_like": {
                    "day": 291.75,
                    "night": 284.6,
                    "eve": 289.38,
                    "morn": 286.83
                },
                "pressure": 1021,
                "humidity": 43,
                "dew_point": 281.35,
                "wind_speed": 2.69,
                "wind_deg": 336,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": 13,
                "pop": 0,
                "uvi": 7
            },
            {
                "dt": 1595502000,
                "sunrise": 1595474368,
                "sunset": 1595530669,
                "temp": {
                    "day": 296.94,
                    "min": 288.47,
                    "max": 296.94,
                    "night": 289.52,
                    "eve": 293.93,
                    "morn": 288.47
                },
                "feels_like": {
                    "day": 296.52,
                    "night": 289.6,
                    "eve": 293.34,
                    "morn": 287.24
                },
                "pressure": 1013,
                "humidity": 44,
                "dew_point": 284.28,
                "wind_speed": 0.98,
                "wind_deg": 107,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 18,
                "pop": 0.35,
                "rain": 0.43,
                "uvi": 7
            },
            {
                "dt": 1595588400,
                "sunrise": 1595560847,
                "sunset": 1595616994,
                "temp": {
                    "day": 297.31,
                    "min": 286.67,
                    "max": 297.31,
                    "night": 286.67,
                    "eve": 292.14,
                    "morn": 291.31
                },
                "feels_like": {
                    "day": 293.68,
                    "night": 285.11,
                    "eve": 290.67,
                    "morn": 289.5
                },
                "pressure": 1009,
                "humidity": 45,
                "dew_point": 284.86,
                "wind_speed": 5.84,
                "wind_deg": 273,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 42,
                "pop": 0.97,
                "rain": 2.04,
                "uvi": 6.4
            },
            {
                "dt": 1595674800,
                "sunrise": 1595647326,
                "sunset": 1595703317,
                "temp": {
                    "day": 292.51,
                    "min": 285.54,
                    "max": 293.02,
                    "night": 285.54,
                    "eve": 290.58,
                    "morn": 287.13
                },
                "feels_like": {
                    "day": 289.83,
                    "night": 284.07,
                    "eve": 288.89,
                    "morn": 284.33
                },
                "pressure": 1013,
                "humidity": 44,
                "dew_point": 280.21,
                "wind_speed": 2.76,
                "wind_deg": 334,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 97,
                "pop": 0,
                "uvi": 6.73
            },
            {
                "dt": 1595761200,
                "sunrise": 1595733807,
                "sunset": 1595789637,
                "temp": {
                    "day": 295.91,
                    "min": 288.33,
                    "max": 296.41,
                    "night": 288.54,
                    "eve": 293.72,
                    "morn": 288.33
                },
                "feels_like": {
                    "day": 294.67,
                    "night": 286.62,
                    "eve": 292.42,
                    "morn": 287.07
                },
                "pressure": 1012,
                "humidity": 44,
                "dew_point": 283.12,
                "wind_speed": 1.78,
                "wind_deg": 190,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": 15,
                "pop": 0,
                "uvi": 6.66
            }
        ]
    },
    ['https://api.openweathermap.org/data/2.5/forecast/daily?cnt=16&id=524901&appid=439d4b804bc8187953eb36d2a8c26a02']: { "cod": "200", "message": 0, "city": { "geoname_id": 524901, "name": "Moscow", "lat": 55.7522, "lon": 37.6156, "country": "RU", "iso2": "RU", "type": "city", "population": 0 }, "cnt": 7, "list": [{ "dt": 1485766800, "temp": { "day": 262.65, "min": 261.41, "max": 262.65, "night": 261.41, "eve": 262.65, "morn": 262.65 }, "pressure": 1024.53, "humidity": 76, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 4.57, "deg": 225, "clouds": 0, "snow": 0.01 }, { "dt": 1485853200, "temp": { "day": 262.31, "min": 260.98, "max": 265.44, "night": 265.44, "eve": 264.18, "morn": 261.46 }, "pressure": 1018.1, "humidity": 91, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 4.1, "deg": 249, "clouds": 88, "snow": 1.44 }, { "dt": 1485939600, "temp": { "day": 270.27, "min": 266.9, "max": 270.59, "night": 268.06, "eve": 269.66, "morn": 266.9 }, "pressure": 1010.85, "humidity": 92, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 4.53, "deg": 298, "clouds": 64, "snow": 0.92 }, { "dt": 1486026000, "temp": { "day": 263.46, "min": 255.19, "max": 264.02, "night": 255.59, "eve": 259.68, "morn": 263.38 }, "pressure": 1019.32, "humidity": 84, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 3.06, "deg": 344, "clouds": 0 }, { "dt": 1486112400, "temp": { "day": 265.69, "min": 256.55, "max": 266, "night": 256.55, "eve": 260.09, "morn": 266 }, "pressure": 1012.2, "humidity": 0, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 7.35, "deg": 24, "clouds": 45, "snow": 0.21 }, { "dt": 1486198800, "temp": { "day": 259.95, "min": 254.73, "max": 259.95, "night": 257.13, "eve": 254.73, "morn": 257.02 }, "pressure": 1029.5, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 2.6, "deg": 331, "clouds": 29 }, { "dt": 1486285200, "temp": { "day": 263.13, "min": 259.11, "max": 263.13, "night": 262.01, "eve": 261.32, "morn": 259.11 }, "pressure": 1023.21, "humidity": 0, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 5.33, "deg": 234, "clouds": 46, "snow": 0.04 }] },
    ['https://api.openweathermap.org/data/2.5/forecast/daily?cnt=16&lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02']: { "cod": "200", "message": 0, "city": { "geoname_id": 1907296, "name": "Tawarano", "lat": 35.0164, "lon": 139.0077, "country": "JP", "iso2": "JP", "type": "", "population": 0 }, "cnt": 10, "list": [{ "dt": 1485741600, "temp": { "day": 285.51, "min": 285.51, "max": 285.51, "night": 285.51, "eve": 285.51, "morn": 285.51 }, "pressure": 1013.75, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01n" }], "speed": 5.52, "deg": 311, "clouds": 0 }, { "dt": 1485828000, "temp": { "day": 282.27, "min": 282.27, "max": 284.66, "night": 284.66, "eve": 282.78, "morn": 282.56 }, "pressure": 1023.68, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 5.46, "deg": 66, "clouds": 0 }, { "dt": 1485914400, "temp": { "day": 284.83, "min": 283.21, "max": 285.7, "night": 284.16, "eve": 285.49, "morn": 283.21 }, "pressure": 1017.39, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "02d" }], "speed": 13.76, "deg": 260, "clouds": 8 }, { "dt": 1486000800, "temp": { "day": 283.71, "min": 281.86, "max": 285.13, "night": 283.81, "eve": 284.76, "morn": 281.86 }, "pressure": 1017.36, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 8.95, "deg": 288, "clouds": 0 }, { "dt": 1486087200, "temp": { "day": 280, "min": 275.68, "max": 283.75, "night": 278.79, "eve": 283.75, "morn": 275.68 }, "pressure": 996.2, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 5.92, "deg": 295, "clouds": 0 }, { "dt": 1486173600, "temp": { "day": 279.4, "min": 276.69, "max": 283.22, "night": 277.58, "eve": 283.22, "morn": 276.69 }, "pressure": 998.07, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 3.71, "deg": 314, "clouds": 0 }, { "dt": 1486260000, "temp": { "day": 280.88, "min": 276.28, "max": 284.66, "night": 281.2, "eve": 284.66, "morn": 276.28 }, "pressure": 997.4, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 2.1, "deg": 337, "clouds": 66, "rain": 0.28 }, { "dt": 1486346400, "temp": { "day": 281.58, "min": 278.74, "max": 283.76, "night": 278.74, "eve": 283.76, "morn": 279.15 }, "pressure": 991.11, "humidity": 0, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "speed": 2.69, "deg": 2, "clouds": 4, "rain": 3.72 }, { "dt": 1486432800, "temp": { "day": 277.62, "min": 275.86, "max": 281.14, "night": 276.45, "eve": 281.14, "morn": 275.86 }, "pressure": 993.37, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 2.05, "deg": 353, "clouds": 47, "rain": 0.52, "snow": 0.03 }, { "dt": 1486519200, "temp": { "day": 279.26, "min": 275.51, "max": 281.61, "night": 276.55, "eve": 281.61, "morn": 275.51 }, "pressure": 991.72, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 3.47, "deg": 326, "clouds": 2, "rain": 0.35 }] },
    ['https://api.openweathermap.org/data/2.5/forecast/daily?cnt=16&zip=94040&appid=439d4b804bc8187953eb36d2a8c26a02']: { "city": { "id": 0, "name": "Mountain View", "coord": { "lon": -122.088, "lat": 37.3855 }, "country": "US", "population": 0 }, "cod": "200", "message": 2.1505307, "cnt": 7, "list": [{ "dt": 1519070400, "temp": { "day": 283.99, "min": 271.86, "max": 283.99, "night": 271.86, "eve": 278.3, "morn": 280.44 }, "pressure": 989.94, "humidity": 52, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 3.36, "deg": 325, "clouds": 20, "rain": 0.31 }, { "dt": 1519156800, "temp": { "day": 282.68, "min": 268.17, "max": 282.68, "night": 271.62, "eve": 277.16, "morn": 268.17 }, "pressure": 996.36, "humidity": 50, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 1.25, "deg": 245, "clouds": 0 }, { "dt": 1519243200, "temp": { "day": 280.88, "min": 271.62, "max": 280.98, "night": 274.19, "eve": 277.8, "morn": 271.62 }, "pressure": 996.59, "humidity": 84, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 1.46, "deg": 232, "clouds": 92, "rain": 1.3 }, { "dt": 1519329600, "temp": { "day": 283.8, "min": 282.02, "max": 285.94, "night": 284.02, "eve": 285.94, "morn": 282.02 }, "pressure": 1014.12, "humidity": 0, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "speed": 6.4, "deg": 173, "clouds": 57, "rain": 11.41 }, { "dt": 1519416000, "temp": { "day": 284.36, "min": 281.5, "max": 285.85, "night": 281.5, "eve": 285.85, "morn": 283.32 }, "pressure": 1014.73, "humidity": 0, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "speed": 4.23, "deg": 114, "clouds": 89, "rain": 9.29 }, { "dt": 1519502400, "temp": { "day": 285.58, "min": 279.27, "max": 288.96, "night": 282.02, "eve": 288.96, "morn": 279.27 }, "pressure": 1015.81, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 1.27, "deg": 57, "clouds": 9 }, { "dt": 1519588800, "temp": { "day": 287.05, "min": 279.96, "max": 290.51, "night": 282.65, "eve": 290.51, "morn": 279.96 }, "pressure": 1012.12, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 1.75, "deg": 54, "clouds": 1 }] },
    ['https://pro.openweathermap.org/data/2.5/climate/daily?id=524901&appid=439d4b804bc8187953eb36d2a8c26a02']: { "cod": "200", "message": 0, "city": { "geoname_id": 524901, "name": "Moscow", "lat": 55.7522, "lon": 37.6156, "country": "RU", "iso2": "RU", "type": "city", "population": 0 }, "cnt": 7, "list": [{ "dt": 1485766800, "temp": { "day": 262.65, "min": 261.41, "max": 262.65, "night": 261.41, "eve": 262.65, "morn": 262.65 }, "pressure": 1024.53, "humidity": 76, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 4.57, "deg": 225, "clouds": 0, "snow": 0.01 }, { "dt": 1485853200, "temp": { "day": 262.31, "min": 260.98, "max": 265.44, "night": 265.44, "eve": 264.18, "morn": 261.46 }, "pressure": 1018.1, "humidity": 91, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 4.1, "deg": 249, "clouds": 88, "snow": 1.44 }, { "dt": 1485939600, "temp": { "day": 270.27, "min": 266.9, "max": 270.59, "night": 268.06, "eve": 269.66, "morn": 266.9 }, "pressure": 1010.85, "humidity": 92, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 4.53, "deg": 298, "clouds": 64, "snow": 0.92 }, { "dt": 1486026000, "temp": { "day": 263.46, "min": 255.19, "max": 264.02, "night": 255.59, "eve": 259.68, "morn": 263.38 }, "pressure": 1019.32, "humidity": 84, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 3.06, "deg": 344, "clouds": 0 }, { "dt": 1486112400, "temp": { "day": 265.69, "min": 256.55, "max": 266, "night": 256.55, "eve": 260.09, "morn": 266 }, "pressure": 1012.2, "humidity": 0, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 7.35, "deg": 24, "clouds": 45, "snow": 0.21 }, { "dt": 1486198800, "temp": { "day": 259.95, "min": 254.73, "max": 259.95, "night": 257.13, "eve": 254.73, "morn": 257.02 }, "pressure": 1029.5, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 2.6, "deg": 331, "clouds": 29 }, { "dt": 1486285200, "temp": { "day": 263.13, "min": 259.11, "max": 263.13, "night": 262.01, "eve": 261.32, "morn": 259.11 }, "pressure": 1023.21, "humidity": 0, "weather": [{ "id": 600, "main": "Snow", "description": "light snow", "icon": "13d" }], "speed": 5.33, "deg": 234, "clouds": 46, "snow": 0.04 }] },
    ['https://pro.openweathermap.org/data/2.5/climate/daily?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02']: { "cod": "200", "message": 0, "city": { "geoname_id": 1907296, "name": "Tawarano", "lat": 35.0164, "lon": 139.0077, "country": "JP", "iso2": "JP", "type": "", "population": 0 }, "cnt": 10, "list": [{ "dt": 1485741600, "temp": { "day": 285.51, "min": 285.51, "max": 285.51, "night": 285.51, "eve": 285.51, "morn": 285.51 }, "pressure": 1013.75, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01n" }], "speed": 5.52, "deg": 311, "clouds": 0 }, { "dt": 1485828000, "temp": { "day": 282.27, "min": 282.27, "max": 284.66, "night": 284.66, "eve": 282.78, "morn": 282.56 }, "pressure": 1023.68, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 5.46, "deg": 66, "clouds": 0 }, { "dt": 1485914400, "temp": { "day": 284.83, "min": 283.21, "max": 285.7, "night": 284.16, "eve": 285.49, "morn": 283.21 }, "pressure": 1017.39, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "02d" }], "speed": 13.76, "deg": 260, "clouds": 8 }, { "dt": 1486000800, "temp": { "day": 283.71, "min": 281.86, "max": 285.13, "night": 283.81, "eve": 284.76, "morn": 281.86 }, "pressure": 1017.36, "humidity": 100, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 8.95, "deg": 288, "clouds": 0 }, { "dt": 1486087200, "temp": { "day": 280, "min": 275.68, "max": 283.75, "night": 278.79, "eve": 283.75, "morn": 275.68 }, "pressure": 996.2, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 5.92, "deg": 295, "clouds": 0 }, { "dt": 1486173600, "temp": { "day": 279.4, "min": 276.69, "max": 283.22, "night": 277.58, "eve": 283.22, "morn": 276.69 }, "pressure": 998.07, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 3.71, "deg": 314, "clouds": 0 }, { "dt": 1486260000, "temp": { "day": 280.88, "min": 276.28, "max": 284.66, "night": 281.2, "eve": 284.66, "morn": 276.28 }, "pressure": 997.4, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 2.1, "deg": 337, "clouds": 66, "rain": 0.28 }, { "dt": 1486346400, "temp": { "day": 281.58, "min": 278.74, "max": 283.76, "night": 278.74, "eve": 283.76, "morn": 279.15 }, "pressure": 991.11, "humidity": 0, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "speed": 2.69, "deg": 2, "clouds": 4, "rain": 3.72 }, { "dt": 1486432800, "temp": { "day": 277.62, "min": 275.86, "max": 281.14, "night": 276.45, "eve": 281.14, "morn": 275.86 }, "pressure": 993.37, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 2.05, "deg": 353, "clouds": 47, "rain": 0.52, "snow": 0.03 }, { "dt": 1486519200, "temp": { "day": 279.26, "min": 275.51, "max": 281.61, "night": 276.55, "eve": 281.61, "morn": 275.51 }, "pressure": 991.72, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 3.47, "deg": 326, "clouds": 2, "rain": 0.35 }] },
    ['https://pro.openweathermap.org/data/2.5/climate/daily?zip=94040&appid=439d4b804bc8187953eb36d2a8c26a02']: { "city": { "id": 0, "name": "Mountain View", "coord": { "lon": -122.088, "lat": 37.3855 }, "country": "US", "population": 0 }, "cod": "200", "message": 2.1505307, "cnt": 7, "list": [{ "dt": 1519070400, "temp": { "day": 283.99, "min": 271.86, "max": 283.99, "night": 271.86, "eve": 278.3, "morn": 280.44 }, "pressure": 989.94, "humidity": 52, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 3.36, "deg": 325, "clouds": 20, "rain": 0.31 }, { "dt": 1519156800, "temp": { "day": 282.68, "min": 268.17, "max": 282.68, "night": 271.62, "eve": 277.16, "morn": 268.17 }, "pressure": 996.36, "humidity": 50, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 1.25, "deg": 245, "clouds": 0 }, { "dt": 1519243200, "temp": { "day": 280.88, "min": 271.62, "max": 280.98, "night": 274.19, "eve": 277.8, "morn": 271.62 }, "pressure": 996.59, "humidity": 84, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 1.46, "deg": 232, "clouds": 92, "rain": 1.3 }, { "dt": 1519329600, "temp": { "day": 283.8, "min": 282.02, "max": 285.94, "night": 284.02, "eve": 285.94, "morn": 282.02 }, "pressure": 1014.12, "humidity": 0, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "speed": 6.4, "deg": 173, "clouds": 57, "rain": 11.41 }, { "dt": 1519416000, "temp": { "day": 284.36, "min": 281.5, "max": 285.85, "night": 281.5, "eve": 285.85, "morn": 283.32 }, "pressure": 1014.73, "humidity": 0, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "speed": 4.23, "deg": 114, "clouds": 89, "rain": 9.29 }, { "dt": 1519502400, "temp": { "day": 285.58, "min": 279.27, "max": 288.96, "night": 282.02, "eve": 288.96, "morn": 279.27 }, "pressure": 1015.81, "humidity": 0, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "speed": 1.27, "deg": 57, "clouds": 9 }, { "dt": 1519588800, "temp": { "day": 287.05, "min": 279.96, "max": 290.51, "night": 282.65, "eve": 290.51, "morn": 279.96 }, "pressure": 1012.12, "humidity": 0, "weather": [{ "id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d" }], "speed": 1.75, "deg": 54, "clouds": 1 }] },
    ['https://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=439d4b804bc8187953eb36d2a8c26a02']: {
        "cod": "200",
        "message": 0.0032,
        "cnt": 36,
        "list": [
            {
                "dt": 1487246400,
                "main": {
                    "temp": 286.67,
                    "temp_min": 281.556,
                    "temp_max": 286.67,
                    "pressure": 972.73,
                    "sea_level": 1046.46,
                    "grnd_level": 972.73,
                    "humidity": 75,
                    "temp_kf": 5.11
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.81,
                    "deg": 247.501
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-16 12:00:00"
            },
            {
                "dt": 1487257200,
                "main": {
                    "temp": 285.66,
                    "temp_min": 281.821,
                    "temp_max": 285.66,
                    "pressure": 970.91,
                    "sea_level": 1044.32,
                    "grnd_level": 970.91,
                    "humidity": 70,
                    "temp_kf": 3.84
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.59,
                    "deg": 290.501
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-16 15:00:00"
            },
            {
                "dt": 1487268000,
                "main": {
                    "temp": 277.05,
                    "temp_min": 274.498,
                    "temp_max": 277.05,
                    "pressure": 970.44,
                    "sea_level": 1044.7,
                    "grnd_level": 970.44,
                    "humidity": 90,
                    "temp_kf": 2.56
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.41,
                    "deg": 263.5
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-16 18:00:00"
            },
            {
                "dt": 1487278800,
                "main": {
                    "temp": 272.78,
                    "temp_min": 271.503,
                    "temp_max": 272.78,
                    "pressure": 969.32,
                    "sea_level": 1044.14,
                    "grnd_level": 969.32,
                    "humidity": 80,
                    "temp_kf": 1.28
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.24,
                    "deg": 205.502
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-16 21:00:00"
            },
            {
                "dt": 1487289600,
                "main": {
                    "temp": 273.341,
                    "temp_min": 273.341,
                    "temp_max": 273.341,
                    "pressure": 968.14,
                    "sea_level": 1042.96,
                    "grnd_level": 968.14,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 3.59,
                    "deg": 224.003
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-17 00:00:00"
            },
            {
                "dt": 1487300400,
                "main": {
                    "temp": 275.568,
                    "temp_min": 275.568,
                    "temp_max": 275.568,
                    "pressure": 966.6,
                    "sea_level": 1041.39,
                    "grnd_level": 966.6,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 3.77,
                    "deg": 237.002
                },
                "rain": {
                    "3h": 0.32
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-17 03:00:00"
            },
            {
                "dt": 1487311200,
                "main": {
                    "temp": 276.478,
                    "temp_min": 276.478,
                    "temp_max": 276.478,
                    "pressure": 966.45,
                    "sea_level": 1041.21,
                    "grnd_level": 966.45,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 268.005
                },
                "rain": {
                    "3h": 4.9
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-17 06:00:00"
            },
            {
                "dt": 1487322000,
                "main": {
                    "temp": 276.67,
                    "temp_min": 276.67,
                    "temp_max": 276.67,
                    "pressure": 967.41,
                    "sea_level": 1041.95,
                    "grnd_level": 967.41,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 2.6,
                    "deg": 266.504
                },
                "rain": {
                    "3h": 1.37
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-17 09:00:00"
            },
            {
                "dt": 1487332800,
                "main": {
                    "temp": 278.253,
                    "temp_min": 278.253,
                    "temp_max": 278.253,
                    "pressure": 966.98,
                    "sea_level": 1040.89,
                    "grnd_level": 966.98,
                    "humidity": 95,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.17,
                    "deg": 261.501
                },
                "rain": {
                    "3h": 0.12
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-17 12:00:00"
            },
            {
                "dt": 1487343600,
                "main": {
                    "temp": 276.455,
                    "temp_min": 276.455,
                    "temp_max": 276.455,
                    "pressure": 966.38,
                    "sea_level": 1040.17,
                    "grnd_level": 966.38,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.21,
                    "deg": 268.001
                },
                "rain": {
                    "3h": 2.12
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-17 15:00:00"
            },
            {
                "dt": 1487354400,
                "main": {
                    "temp": 275.639,
                    "temp_min": 275.639,
                    "temp_max": 275.639,
                    "pressure": 966.39,
                    "sea_level": 1040.65,
                    "grnd_level": 966.39,
                    "humidity": 95,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3.17,
                    "deg": 258.001
                },
                "rain": {
                    "3h": 0.7
                },
                "snow": {
                    "3h": 0.0775
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-17 18:00:00"
            },
            {
                "dt": 1487365200,
                "main": {
                    "temp": 275.459,
                    "temp_min": 275.459,
                    "temp_max": 275.459,
                    "pressure": 966.3,
                    "sea_level": 1040.8,
                    "grnd_level": 966.3,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3.71,
                    "deg": 265.503
                },
                "rain": {
                    "3h": 1.16
                },
                "snow": {
                    "3h": 0.075
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-17 21:00:00"
            },
            {
                "dt": 1487376000,
                "main": {
                    "temp": 275.035,
                    "temp_min": 275.035,
                    "temp_max": 275.035,
                    "pressure": 966.43,
                    "sea_level": 1041.02,
                    "grnd_level": 966.43,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.56,
                    "deg": 273.5
                },
                "rain": {
                    "3h": 1.37
                },
                "snow": {
                    "3h": 0.1525
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-18 00:00:00"
            },
            {
                "dt": 1487386800,
                "main": {
                    "temp": 274.965,
                    "temp_min": 274.965,
                    "temp_max": 274.965,
                    "pressure": 966.36,
                    "sea_level": 1041.17,
                    "grnd_level": 966.36,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 2.66,
                    "deg": 285.502
                },
                "rain": {
                    "3h": 0.79
                },
                "snow": {
                    "3h": 0.52
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-18 03:00:00"
            },
            {
                "dt": 1487397600,
                "main": {
                    "temp": 274.562,
                    "temp_min": 274.562,
                    "temp_max": 274.562,
                    "pressure": 966.75,
                    "sea_level": 1041.57,
                    "grnd_level": 966.75,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 1.46,
                    "deg": 276.5
                },
                "rain": {
                    "3h": 0.08
                },
                "snow": {
                    "3h": 0.06
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-18 06:00:00"
            },
            {
                "dt": 1487408400,
                "main": {
                    "temp": 275.648,
                    "temp_min": 275.648,
                    "temp_max": 275.648,
                    "pressure": 967.21,
                    "sea_level": 1041.74,
                    "grnd_level": 967.21,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 1.5,
                    "deg": 251.008
                },
                "rain": {
                    "3h": 0.02
                },
                "snow": {
                    "3h": 0.03
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-18 09:00:00"
            },
            {
                "dt": 1487419200,
                "main": {
                    "temp": 277.927,
                    "temp_min": 277.927,
                    "temp_max": 277.927,
                    "pressure": 966.06,
                    "sea_level": 1039.98,
                    "grnd_level": 966.06,
                    "humidity": 95,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 0.86,
                    "deg": 244.004
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-18 12:00:00"
            },
            {
                "dt": 1487430000,
                "main": {
                    "temp": 278.367,
                    "temp_min": 278.367,
                    "temp_max": 278.367,
                    "pressure": 964.57,
                    "sea_level": 1038.35,
                    "grnd_level": 964.57,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 79.5024
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-18 15:00:00"
            },
            {
                "dt": 1487440800,
                "main": {
                    "temp": 273.797,
                    "temp_min": 273.797,
                    "temp_max": 273.797,
                    "pressure": 964.13,
                    "sea_level": 1038.48,
                    "grnd_level": 964.13,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.42,
                    "deg": 77.0026
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-18 18:00:00"
            },
            {
                "dt": 1487451600,
                "main": {
                    "temp": 271.239,
                    "temp_min": 271.239,
                    "temp_max": 271.239,
                    "pressure": 963.39,
                    "sea_level": 1038.21,
                    "grnd_level": 963.39,
                    "humidity": 93,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.42,
                    "deg": 95.5017
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-18 21:00:00"
            },
            {
                "dt": 1487462400,
                "main": {
                    "temp": 269.553,
                    "temp_min": 269.553,
                    "temp_max": 269.553,
                    "pressure": 962.39,
                    "sea_level": 1037.44,
                    "grnd_level": 962.39,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.96,
                    "deg": 101.004
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-19 00:00:00"
            },
            {
                "dt": 1487473200,
                "main": {
                    "temp": 268.198,
                    "temp_min": 268.198,
                    "temp_max": 268.198,
                    "pressure": 961.28,
                    "sea_level": 1036.51,
                    "grnd_level": 961.28,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.06,
                    "deg": 121.5
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-19 03:00:00"
            },
            {
                "dt": 1487484000,
                "main": {
                    "temp": 267.295,
                    "temp_min": 267.295,
                    "temp_max": 267.295,
                    "pressure": 961.16,
                    "sea_level": 1036.45,
                    "grnd_level": 961.16,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.17,
                    "deg": 155.005
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-19 06:00:00"
            },
            {
                "dt": 1487494800,
                "main": {
                    "temp": 272.956,
                    "temp_min": 272.956,
                    "temp_max": 272.956,
                    "pressure": 962.03,
                    "sea_level": 1036.85,
                    "grnd_level": 962.03,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.66,
                    "deg": 195.002
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-19 09:00:00"
            },
            {
                "dt": 1487505600,
                "main": {
                    "temp": 277.422,
                    "temp_min": 277.422,
                    "temp_max": 277.422,
                    "pressure": 962.23,
                    "sea_level": 1036.06,
                    "grnd_level": 962.23,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.32,
                    "deg": 357.003
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-19 12:00:00"
            },
            {
                "dt": 1487516400,
                "main": {
                    "temp": 277.984,
                    "temp_min": 277.984,
                    "temp_max": 277.984,
                    "pressure": 962.15,
                    "sea_level": 1035.86,
                    "grnd_level": 962.15,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.58,
                    "deg": 48.5031
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-19 15:00:00"
            },
            {
                "dt": 1487527200,
                "main": {
                    "temp": 272.459,
                    "temp_min": 272.459,
                    "temp_max": 272.459,
                    "pressure": 963.31,
                    "sea_level": 1037.81,
                    "grnd_level": 963.31,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.16,
                    "deg": 75.5042
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-19 18:00:00"
            },
            {
                "dt": 1487538000,
                "main": {
                    "temp": 269.473,
                    "temp_min": 269.473,
                    "temp_max": 269.473,
                    "pressure": 964.65,
                    "sea_level": 1039.76,
                    "grnd_level": 964.65,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.12,
                    "deg": 174.002
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-19 21:00:00"
            },
            {
                "dt": 1487548800,
                "main": {
                    "temp": 268.793,
                    "temp_min": 268.793,
                    "temp_max": 268.793,
                    "pressure": 965.92,
                    "sea_level": 1041.32,
                    "grnd_level": 965.92,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.11,
                    "deg": 207.502
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-20 00:00:00"
            },
            {
                "dt": 1487559600,
                "main": {
                    "temp": 268.106,
                    "temp_min": 268.106,
                    "temp_max": 268.106,
                    "pressure": 966.4,
                    "sea_level": 1042.18,
                    "grnd_level": 966.4,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.67,
                    "deg": 191.001
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-20 03:00:00"
            },
            {
                "dt": 1487570400,
                "main": {
                    "temp": 267.655,
                    "temp_min": 267.655,
                    "temp_max": 267.655,
                    "pressure": 967.4,
                    "sea_level": 1043.43,
                    "grnd_level": 967.4,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.61,
                    "deg": 194.001
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-20 06:00:00"
            },
            {
                "dt": 1487581200,
                "main": {
                    "temp": 273.75,
                    "temp_min": 273.75,
                    "temp_max": 273.75,
                    "pressure": 968.84,
                    "sea_level": 1044.23,
                    "grnd_level": 968.84,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.49,
                    "deg": 208.5
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-20 09:00:00"
            },
            {
                "dt": 1487592000,
                "main": {
                    "temp": 279.302,
                    "temp_min": 279.302,
                    "temp_max": 279.302,
                    "pressure": 968.37,
                    "sea_level": 1042.52,
                    "grnd_level": 968.37,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.46,
                    "deg": 252.001
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-20 12:00:00"
            },
            {
                "dt": 1487602800,
                "main": {
                    "temp": 279.343,
                    "temp_min": 279.343,
                    "temp_max": 279.343,
                    "pressure": 967.9,
                    "sea_level": 1041.64,
                    "grnd_level": 967.9,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.21,
                    "deg": 268.001
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-20 15:00:00"
            },
            {
                "dt": 1487613600,
                "main": {
                    "temp": 274.443,
                    "temp_min": 274.443,
                    "temp_max": 274.443,
                    "pressure": 968.19,
                    "sea_level": 1042.66,
                    "grnd_level": 968.19,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 3.27,
                    "deg": 257.501
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-20 18:00:00"
            },
            {
                "dt": 1487624400,
                "main": {
                    "temp": 272.424,
                    "temp_min": 272.424,
                    "temp_max": 272.424,
                    "pressure": 968.38,
                    "sea_level": 1043.17,
                    "grnd_level": 968.38,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 3.57,
                    "deg": 255.503
                },
                "rain": {},
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-20 21:00:00"
            }
        ],
        "city": {
            "id": 6940463,
            "name": "Altstadt",
            "coord": {
                "lat": 48.137,
                "lon": 11.5752
            },
            "country": "none"
        }
    },
    ['https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=439d4b804bc8187953eb36d2a8c26a02']: {
        "cod": "200",
        "message": 0.0036,
        "cnt": 40,
        "list": [
            {
                "dt": 1485799200,
                "main": {
                    "temp": 261.45,
                    "temp_min": 259.086,
                    "temp_max": 261.45,
                    "pressure": 1023.48,
                    "sea_level": 1045.39,
                    "grnd_level": 1023.48,
                    "humidity": 79,
                    "temp_kf": 2.37
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 4.77,
                    "deg": 232.505
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-30 18:00:00"
            },
            {
                "dt": 1485810000,
                "main": {
                    "temp": 261.41,
                    "temp_min": 259.638,
                    "temp_max": 261.41,
                    "pressure": 1022.41,
                    "sea_level": 1044.35,
                    "grnd_level": 1022.41,
                    "humidity": 76,
                    "temp_kf": 1.78
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 32
                },
                "wind": {
                    "speed": 4.76,
                    "deg": 240.503
                },
                "snow": {
                    "3h": 0.011
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-30 21:00:00"
            },
            {
                "dt": 1485820800,
                "main": {
                    "temp": 261.76,
                    "temp_min": 260.571,
                    "temp_max": 261.76,
                    "pressure": 1021.34,
                    "sea_level": 1043.21,
                    "grnd_level": 1021.34,
                    "humidity": 84,
                    "temp_kf": 1.18
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 4.71,
                    "deg": 243
                },
                "snow": {
                    "3h": 0.058
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 00:00:00"
            },
            {
                "dt": 1485831600,
                "main": {
                    "temp": 261.46,
                    "temp_min": 260.865,
                    "temp_max": 261.46,
                    "pressure": 1019.95,
                    "sea_level": 1041.79,
                    "grnd_level": 1019.95,
                    "humidity": 82,
                    "temp_kf": 0.59
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 4.46,
                    "deg": 244.5
                },
                "snow": {
                    "3h": 0.05225
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 03:00:00"
            },
            {
                "dt": 1485842400,
                "main": {
                    "temp": 260.981,
                    "temp_min": 260.981,
                    "temp_max": 260.981,
                    "pressure": 1018.96,
                    "sea_level": 1040.84,
                    "grnd_level": 1018.96,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 4.21,
                    "deg": 245.005
                },
                "snow": {
                    "3h": 0.19625
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-01-31 06:00:00"
            },
            {
                "dt": 1485853200,
                "main": {
                    "temp": 262.308,
                    "temp_min": 262.308,
                    "temp_max": 262.308,
                    "pressure": 1018.1,
                    "sea_level": 1039.77,
                    "grnd_level": 1018.1,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 4.1,
                    "deg": 249.006
                },
                "snow": {
                    "3h": 0.535
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-01-31 09:00:00"
            },
            {
                "dt": 1485864000,
                "main": {
                    "temp": 263.76,
                    "temp_min": 263.76,
                    "temp_max": 263.76,
                    "pressure": 1016.86,
                    "sea_level": 1038.4,
                    "grnd_level": 1016.86,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 3.87,
                    "deg": 254.5
                },
                "snow": {
                    "3h": 0.21
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-01-31 12:00:00"
            },
            {
                "dt": 1485874800,
                "main": {
                    "temp": 264.182,
                    "temp_min": 264.182,
                    "temp_max": 264.182,
                    "pressure": 1016.19,
                    "sea_level": 1037.77,
                    "grnd_level": 1016.19,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 3.67,
                    "deg": 257.001
                },
                "snow": {
                    "3h": 0.1375
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 15:00:00"
            },
            {
                "dt": 1485885600,
                "main": {
                    "temp": 264.67,
                    "temp_min": 264.67,
                    "temp_max": 264.67,
                    "pressure": 1015.32,
                    "sea_level": 1036.94,
                    "grnd_level": 1015.32,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3.61,
                    "deg": 262.503
                },
                "snow": {
                    "3h": 0.1425
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 18:00:00"
            },
            {
                "dt": 1485896400,
                "main": {
                    "temp": 265.436,
                    "temp_min": 265.436,
                    "temp_max": 265.436,
                    "pressure": 1014.27,
                    "sea_level": 1035.76,
                    "grnd_level": 1014.27,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 3.67,
                    "deg": 266.5
                },
                "snow": {
                    "3h": 0.1625
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 21:00:00"
            },
            {
                "dt": 1485907200,
                "main": {
                    "temp": 266.104,
                    "temp_min": 266.104,
                    "temp_max": 266.104,
                    "pressure": 1013.1,
                    "sea_level": 1034.62,
                    "grnd_level": 1013.1,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 269.004
                },
                "snow": {
                    "3h": 0.1025
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 00:00:00"
            },
            {
                "dt": 1485918000,
                "main": {
                    "temp": 266.904,
                    "temp_min": 266.904,
                    "temp_max": 266.904,
                    "pressure": 1011.96,
                    "sea_level": 1033.47,
                    "grnd_level": 1011.96,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 4.26,
                    "deg": 274.002
                },
                "snow": {
                    "3h": 0.12
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 03:00:00"
            },
            {
                "dt": 1485928800,
                "main": {
                    "temp": 268.102,
                    "temp_min": 268.102,
                    "temp_max": 268.102,
                    "pressure": 1011.23,
                    "sea_level": 1032.62,
                    "grnd_level": 1011.23,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 4.4,
                    "deg": 283.501
                },
                "snow": {
                    "3h": 0.13
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-01 06:00:00"
            },
            {
                "dt": 1485939600,
                "main": {
                    "temp": 270.269,
                    "temp_min": 270.269,
                    "temp_max": 270.269,
                    "pressure": 1010.85,
                    "sea_level": 1032.1,
                    "grnd_level": 1010.85,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 4.53,
                    "deg": 297.5
                },
                "snow": {
                    "3h": 0.1875
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-01 09:00:00"
            },
            {
                "dt": 1485950400,
                "main": {
                    "temp": 270.585,
                    "temp_min": 270.585,
                    "temp_max": 270.585,
                    "pressure": 1010.49,
                    "sea_level": 1031.65,
                    "grnd_level": 1010.49,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 4.31,
                    "deg": 302.004
                },
                "snow": {
                    "3h": 0.065
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-01 12:00:00"
            },
            {
                "dt": 1485961200,
                "main": {
                    "temp": 269.661,
                    "temp_min": 269.661,
                    "temp_max": 269.661,
                    "pressure": 1010.22,
                    "sea_level": 1031.49,
                    "grnd_level": 1010.22,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 4.91,
                    "deg": 296.5
                },
                "snow": {
                    "3h": 0.0825
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 15:00:00"
            },
            {
                "dt": 1485972000,
                "main": {
                    "temp": 269.155,
                    "temp_min": 269.155,
                    "temp_max": 269.155,
                    "pressure": 1009.95,
                    "sea_level": 1031.3,
                    "grnd_level": 1009.95,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 5.7,
                    "deg": 310.501
                },
                "snow": {
                    "3h": 0.11
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 18:00:00"
            },
            {
                "dt": 1485982800,
                "main": {
                    "temp": 268.056,
                    "temp_min": 268.056,
                    "temp_max": 268.056,
                    "pressure": 1011.21,
                    "sea_level": 1032.49,
                    "grnd_level": 1011.21,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 5.56,
                    "deg": 333
                },
                "snow": {
                    "3h": 0.225
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 21:00:00"
            },
            {
                "dt": 1485993600,
                "main": {
                    "temp": 265.803,
                    "temp_min": 265.803,
                    "temp_max": 265.803,
                    "pressure": 1013.79,
                    "sea_level": 1035.06,
                    "grnd_level": 1013.79,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 4.8,
                    "deg": 355.004
                },
                "snow": {
                    "3h": 0.03
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 00:00:00"
            },
            {
                "dt": 1486004400,
                "main": {
                    "temp": 263.381,
                    "temp_min": 263.381,
                    "temp_max": 263.381,
                    "pressure": 1015.66,
                    "sea_level": 1037.16,
                    "grnd_level": 1015.66,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.2,
                    "deg": 348.503
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 03:00:00"
            },
            {
                "dt": 1486015200,
                "main": {
                    "temp": 261.85,
                    "temp_min": 261.85,
                    "temp_max": 261.85,
                    "pressure": 1017.63,
                    "sea_level": 1039.22,
                    "grnd_level": 1017.63,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 345.502
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-02 06:00:00"
            },
            {
                "dt": 1486026000,
                "main": {
                    "temp": 263.455,
                    "temp_min": 263.455,
                    "temp_max": 263.455,
                    "pressure": 1019.32,
                    "sea_level": 1040.84,
                    "grnd_level": 1019.32,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.06,
                    "deg": 344.004
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-02 09:00:00"
            },
            {
                "dt": 1486036800,
                "main": {
                    "temp": 264.015,
                    "temp_min": 264.015,
                    "temp_max": 264.015,
                    "pressure": 1020.41,
                    "sea_level": 1041.88,
                    "grnd_level": 1020.41,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.52,
                    "deg": 334.501
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-02 12:00:00"
            },
            {
                "dt": 1486047600,
                "main": {
                    "temp": 259.684,
                    "temp_min": 259.684,
                    "temp_max": 259.684,
                    "pressure": 1021.52,
                    "sea_level": 1043.21,
                    "grnd_level": 1021.52,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.48,
                    "deg": 320.501
                },
                "snow": {
                    "3h": 0.0024999999999999
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 15:00:00"
            },
            {
                "dt": 1486058400,
                "main": {
                    "temp": 255.188,
                    "temp_min": 255.188,
                    "temp_max": 255.188,
                    "pressure": 1022.09,
                    "sea_level": 1044.09,
                    "grnd_level": 1022.09,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 1.23,
                    "deg": 283.003
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 18:00:00"
            },
            {
                "dt": 1486069200,
                "main": {
                    "temp": 255.594,
                    "temp_min": 255.594,
                    "temp_max": 255.594,
                    "pressure": 1022.03,
                    "sea_level": 1044.12,
                    "grnd_level": 1022.03,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 1.22,
                    "deg": 244.502
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 21:00:00"
            },
            {
                "dt": 1486080000,
                "main": {
                    "temp": 256.96,
                    "temp_min": 256.96,
                    "temp_max": 256.96,
                    "pressure": 1021.8,
                    "sea_level": 1043.77,
                    "grnd_level": 1021.8,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 1.23,
                    "deg": 237.506
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 00:00:00"
            },
            {
                "dt": 1486090800,
                "main": {
                    "temp": 258.109,
                    "temp_min": 258.109,
                    "temp_max": 258.109,
                    "pressure": 1020.97,
                    "sea_level": 1042.99,
                    "grnd_level": 1020.97,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 1.21,
                    "deg": 234.502
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 03:00:00"
            },
            {
                "dt": 1486101600,
                "main": {
                    "temp": 259.533,
                    "temp_min": 259.533,
                    "temp_max": 259.533,
                    "pressure": 1020.56,
                    "sea_level": 1042.53,
                    "grnd_level": 1020.56,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 1.21,
                    "deg": 229.509
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-03 06:00:00"
            },
            {
                "dt": 1486112400,
                "main": {
                    "temp": 263.438,
                    "temp_min": 263.438,
                    "temp_max": 263.438,
                    "pressure": 1020.46,
                    "sea_level": 1042.15,
                    "grnd_level": 1020.46,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 242.503
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-03 09:00:00"
            },
            {
                "dt": 1486123200,
                "main": {
                    "temp": 264.228,
                    "temp_min": 264.228,
                    "temp_max": 264.228,
                    "pressure": 1019.58,
                    "sea_level": 1041.24,
                    "grnd_level": 1019.58,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 1.58,
                    "deg": 242.503
                },
                "snow": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-03 12:00:00"
            },
            {
                "dt": 1486134000,
                "main": {
                    "temp": 261.153,
                    "temp_min": 261.153,
                    "temp_max": 261.153,
                    "pressure": 1019.63,
                    "sea_level": 1041.42,
                    "grnd_level": 1019.63,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 1.21,
                    "deg": 198.501
                },
                "snow": {
                    "3h": 0.0049999999999999
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 15:00:00"
            },
            {
                "dt": 1486144800,
                "main": {
                    "temp": 258.818,
                    "temp_min": 258.818,
                    "temp_max": 258.818,
                    "pressure": 1020.18,
                    "sea_level": 1042.03,
                    "grnd_level": 1020.18,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 1.21,
                    "deg": 209.002
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 18:00:00"
            },
            {
                "dt": 1486155600,
                "main": {
                    "temp": 257.218,
                    "temp_min": 257.218,
                    "temp_max": 257.218,
                    "pressure": 1020.43,
                    "sea_level": 1042.38,
                    "grnd_level": 1020.43,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 1.17,
                    "deg": 194.501
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 21:00:00"
            },
            {
                "dt": 1486166400,
                "main": {
                    "temp": 255.782,
                    "temp_min": 255.782,
                    "temp_max": 255.782,
                    "pressure": 1020.57,
                    "sea_level": 1042.75,
                    "grnd_level": 1020.57,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 1.21,
                    "deg": 175.001
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-04 00:00:00"
            },
            {
                "dt": 1486177200,
                "main": {
                    "temp": 254.819,
                    "temp_min": 254.819,
                    "temp_max": 254.819,
                    "pressure": 1020.99,
                    "sea_level": 1043.11,
                    "grnd_level": 1020.99,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 1.22,
                    "deg": 122.001
                },
                "snow": {
                    "3h": 0.0049999999999999
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-04 03:00:00"
            },
            {
                "dt": 1486188000,
                "main": {
                    "temp": 257.488,
                    "temp_min": 257.488,
                    "temp_max": 257.488,
                    "pressure": 1021.31,
                    "sea_level": 1043.48,
                    "grnd_level": 1021.31,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 2.13,
                    "deg": 155.501
                },
                "snow": {
                    "3h": 0.04
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-04 06:00:00"
            },
            {
                "dt": 1486198800,
                "main": {
                    "temp": 259.827,
                    "temp_min": 259.827,
                    "temp_max": 259.827,
                    "pressure": 1021.81,
                    "sea_level": 1043.67,
                    "grnd_level": 1021.81,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 600,
                        "main": "Snow",
                        "description": "light snow",
                        "icon": "13d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 2.07,
                    "deg": 170.005
                },
                "snow": {
                    "3h": 0.03
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-04 09:00:00"
            },
            {
                "dt": 1486209600,
                "main": {
                    "temp": 261.256,
                    "temp_min": 261.256,
                    "temp_max": 261.256,
                    "pressure": 1021.31,
                    "sea_level": 1043.05,
                    "grnd_level": 1021.31,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 2.32,
                    "deg": 175.001
                },
                "snow": {
                    "3h": 0.0049999999999999
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-04 12:00:00"
            },
            {
                "dt": 1486220400,
                "main": {
                    "temp": 260.26,
                    "temp_min": 260.26,
                    "temp_max": 260.26,
                    "pressure": 1021,
                    "sea_level": 1042.96,
                    "grnd_level": 1021,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 2.47,
                    "deg": 180.501
                },
                "snow": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-04 15:00:00"
            }
        ],
        "city": {
            "id": 524901,
            "name": "Moscow",
            "coord": {
                "lat": 55.7522,
                "lon": 37.6156
            },
            "country": "none"
        }
    },
    ['https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02']: {
        "cod": "200",
        "message": 0.0082,
        "cnt": 40,
        "list": [
            {
                "dt": 1485799200,
                "main": {
                    "temp": 283.76,
                    "temp_min": 283.76,
                    "temp_max": 283.761,
                    "pressure": 1017.24,
                    "sea_level": 1026.83,
                    "grnd_level": 1017.24,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.27,
                    "deg": 15.0048
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-30 18:00:00"
            },
            {
                "dt": 1485810000,
                "main": {
                    "temp": 282.56,
                    "temp_min": 282.56,
                    "temp_max": 282.563,
                    "pressure": 1020.06,
                    "sea_level": 1029.63,
                    "grnd_level": 1020.06,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 6.21,
                    "deg": 31.5035
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-30 21:00:00"
            },
            {
                "dt": 1485820800,
                "main": {
                    "temp": 282.3,
                    "temp_min": 282.296,
                    "temp_max": 282.3,
                    "pressure": 1022.71,
                    "sea_level": 1032.27,
                    "grnd_level": 1022.71,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 6.71,
                    "deg": 51.0002
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-01-31 00:00:00"
            },
            {
                "dt": 1485831600,
                "main": {
                    "temp": 282.27,
                    "temp_min": 282.265,
                    "temp_max": 282.27,
                    "pressure": 1023.68,
                    "sea_level": 1033.16,
                    "grnd_level": 1023.68,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.46,
                    "deg": 65.5
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-01-31 03:00:00"
            },
            {
                "dt": 1485842400,
                "main": {
                    "temp": 282.656,
                    "temp_min": 282.656,
                    "temp_max": 282.656,
                    "pressure": 1023.75,
                    "sea_level": 1033.22,
                    "grnd_level": 1023.75,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.11,
                    "deg": 84.0055
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-01-31 06:00:00"
            },
            {
                "dt": 1485853200,
                "main": {
                    "temp": 282.783,
                    "temp_min": 282.783,
                    "temp_max": 282.783,
                    "pressure": 1024.91,
                    "sea_level": 1034.46,
                    "grnd_level": 1024.91,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.6,
                    "deg": 89.0062
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 09:00:00"
            },
            {
                "dt": 1485864000,
                "main": {
                    "temp": 283.335,
                    "temp_min": 283.335,
                    "temp_max": 283.335,
                    "pressure": 1025.21,
                    "sea_level": 1034.83,
                    "grnd_level": 1025.21,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 3.37,
                    "deg": 115
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 12:00:00"
            },
            {
                "dt": 1485874800,
                "main": {
                    "temp": 284.657,
                    "temp_min": 284.657,
                    "temp_max": 284.657,
                    "pressure": 1023.65,
                    "sea_level": 1033.43,
                    "grnd_level": 1023.65,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 3.32,
                    "deg": 177.501
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 15:00:00"
            },
            {
                "dt": 1485885600,
                "main": {
                    "temp": 284.095,
                    "temp_min": 284.095,
                    "temp_max": 284.095,
                    "pressure": 1022.05,
                    "sea_level": 1031.79,
                    "grnd_level": 1022.05,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 4.26,
                    "deg": 254.003
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 18:00:00"
            },
            {
                "dt": 1485896400,
                "main": {
                    "temp": 283.211,
                    "temp_min": 283.211,
                    "temp_max": 283.211,
                    "pressure": 1021.33,
                    "sea_level": 1031.06,
                    "grnd_level": 1021.33,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 4.32,
                    "deg": 271.5
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-01-31 21:00:00"
            },
            {
                "dt": 1485907200,
                "main": {
                    "temp": 284.179,
                    "temp_min": 284.179,
                    "temp_max": 284.179,
                    "pressure": 1020.57,
                    "sea_level": 1030.28,
                    "grnd_level": 1020.57,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 10.16,
                    "deg": 256.504
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-01 00:00:00"
            },
            {
                "dt": 1485918000,
                "main": {
                    "temp": 284.829,
                    "temp_min": 284.829,
                    "temp_max": 284.829,
                    "pressure": 1017.39,
                    "sea_level": 1027.23,
                    "grnd_level": 1017.39,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 13.76,
                    "deg": 259.502
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-01 03:00:00"
            },
            {
                "dt": 1485928800,
                "main": {
                    "temp": 285.702,
                    "temp_min": 285.702,
                    "temp_max": 285.702,
                    "pressure": 1014.64,
                    "sea_level": 1024.23,
                    "grnd_level": 1014.64,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 12.75,
                    "deg": 264.001
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-01 06:00:00"
            },
            {
                "dt": 1485939600,
                "main": {
                    "temp": 285.494,
                    "temp_min": 285.494,
                    "temp_max": 285.494,
                    "pressure": 1014.1,
                    "sea_level": 1023.71,
                    "grnd_level": 1014.1,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 12.33,
                    "deg": 271.5
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 09:00:00"
            },
            {
                "dt": 1485950400,
                "main": {
                    "temp": 285.16,
                    "temp_min": 285.16,
                    "temp_max": 285.16,
                    "pressure": 1014.54,
                    "sea_level": 1024.27,
                    "grnd_level": 1014.54,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 12.21,
                    "deg": 278.504
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 12:00:00"
            },
            {
                "dt": 1485961200,
                "main": {
                    "temp": 284.161,
                    "temp_min": 284.161,
                    "temp_max": 284.161,
                    "pressure": 1016.13,
                    "sea_level": 1025.81,
                    "grnd_level": 1016.13,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 12.21,
                    "deg": 281
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 15:00:00"
            },
            {
                "dt": 1485972000,
                "main": {
                    "temp": 282.63,
                    "temp_min": 282.63,
                    "temp_max": 282.63,
                    "pressure": 1017.33,
                    "sea_level": 1027,
                    "grnd_level": 1017.33,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 9.3,
                    "deg": 297.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 18:00:00"
            },
            {
                "dt": 1485982800,
                "main": {
                    "temp": 281.856,
                    "temp_min": 281.856,
                    "temp_max": 281.856,
                    "pressure": 1018.51,
                    "sea_level": 1028.24,
                    "grnd_level": 1018.51,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 8.91,
                    "deg": 288
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-01 21:00:00"
            },
            {
                "dt": 1485993600,
                "main": {
                    "temp": 281.978,
                    "temp_min": 281.978,
                    "temp_max": 281.978,
                    "pressure": 1019.22,
                    "sea_level": 1028.89,
                    "grnd_level": 1019.22,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 9.15,
                    "deg": 286.504
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-02 00:00:00"
            },
            {
                "dt": 1486004400,
                "main": {
                    "temp": 283.706,
                    "temp_min": 283.706,
                    "temp_max": 283.706,
                    "pressure": 1017.36,
                    "sea_level": 1026.99,
                    "grnd_level": 1017.36,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 8.95,
                    "deg": 288.003
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-02 03:00:00"
            },
            {
                "dt": 1486015200,
                "main": {
                    "temp": 285.125,
                    "temp_min": 285.125,
                    "temp_max": 285.125,
                    "pressure": 1016.41,
                    "sea_level": 1026.05,
                    "grnd_level": 1016.41,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.56,
                    "deg": 294.002
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-02 06:00:00"
            },
            {
                "dt": 1486026000,
                "main": {
                    "temp": 284.755,
                    "temp_min": 284.755,
                    "temp_max": 284.755,
                    "pressure": 1018.18,
                    "sea_level": 1027.75,
                    "grnd_level": 1018.18,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 8.31,
                    "deg": 290.504
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 09:00:00"
            },
            {
                "dt": 1486036800,
                "main": {
                    "temp": 283.765,
                    "temp_min": 283.765,
                    "temp_max": 283.765,
                    "pressure": 1019.04,
                    "sea_level": 1028.51,
                    "grnd_level": 1019.04,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 8.87,
                    "deg": 283.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 12:00:00"
            },
            {
                "dt": 1486047600,
                "main": {
                    "temp": 283.809,
                    "temp_min": 283.809,
                    "temp_max": 283.809,
                    "pressure": 1018.6,
                    "sea_level": 1028.26,
                    "grnd_level": 1018.6,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 8.73,
                    "deg": 281.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 15:00:00"
            },
            {
                "dt": 1486058400,
                "main": {
                    "temp": 283.788,
                    "temp_min": 283.788,
                    "temp_max": 283.788,
                    "pressure": 1018.68,
                    "sea_level": 1028.33,
                    "grnd_level": 1018.68,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.8,
                    "deg": 281.503
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 18:00:00"
            },
            {
                "dt": 1486069200,
                "main": {
                    "temp": 283.569,
                    "temp_min": 283.569,
                    "temp_max": 283.569,
                    "pressure": 1019.28,
                    "sea_level": 1028.92,
                    "grnd_level": 1019.28,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.92,
                    "deg": 284.002
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-02 21:00:00"
            },
            {
                "dt": 1486080000,
                "main": {
                    "temp": 284.11,
                    "temp_min": 284.11,
                    "temp_max": 284.11,
                    "pressure": 1020.75,
                    "sea_level": 1030.35,
                    "grnd_level": 1020.75,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.83,
                    "deg": 284.506
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-03 00:00:00"
            },
            {
                "dt": 1486090800,
                "main": {
                    "temp": 285.034,
                    "temp_min": 285.034,
                    "temp_max": 285.034,
                    "pressure": 1020.08,
                    "sea_level": 1029.7,
                    "grnd_level": 1020.08,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.01,
                    "deg": 172.002
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-03 03:00:00"
            },
            {
                "dt": 1486101600,
                "main": {
                    "temp": 286.158,
                    "temp_min": 286.158,
                    "temp_max": 286.158,
                    "pressure": 1018.77,
                    "sea_level": 1028.39,
                    "grnd_level": 1018.77,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.71,
                    "deg": 181.009
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-03 06:00:00"
            },
            {
                "dt": 1486112400,
                "main": {
                    "temp": 286.138,
                    "temp_min": 286.138,
                    "temp_max": 286.138,
                    "pressure": 1019.17,
                    "sea_level": 1028.73,
                    "grnd_level": 1019.17,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 85.0026
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 09:00:00"
            },
            {
                "dt": 1486123200,
                "main": {
                    "temp": 285.952,
                    "temp_min": 285.952,
                    "temp_max": 285.952,
                    "pressure": 1019.74,
                    "sea_level": 1029.36,
                    "grnd_level": 1019.74,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.68,
                    "deg": 76.5032
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 12:00:00"
            },
            {
                "dt": 1486134000,
                "main": {
                    "temp": 285.828,
                    "temp_min": 285.828,
                    "temp_max": 285.828,
                    "pressure": 1019.23,
                    "sea_level": 1029.02,
                    "grnd_level": 1019.23,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.36,
                    "deg": 98.0014
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 15:00:00"
            },
            {
                "dt": 1486144800,
                "main": {
                    "temp": 285.168,
                    "temp_min": 285.168,
                    "temp_max": 285.168,
                    "pressure": 1018.15,
                    "sea_level": 1027.96,
                    "grnd_level": 1018.15,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.66,
                    "deg": 333.002
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 18:00:00"
            },
            {
                "dt": 1486155600,
                "main": {
                    "temp": 283.818,
                    "temp_min": 283.818,
                    "temp_max": 283.818,
                    "pressure": 1018.65,
                    "sea_level": 1028.36,
                    "grnd_level": 1018.65,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.77,
                    "deg": 359.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-03 21:00:00"
            },
            {
                "dt": 1486166400,
                "main": {
                    "temp": 283.157,
                    "temp_min": 283.157,
                    "temp_max": 283.157,
                    "pressure": 1019.84,
                    "sea_level": 1029.41,
                    "grnd_level": 1019.84,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.91,
                    "deg": 18.5013
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-04 00:00:00"
            },
            {
                "dt": 1486177200,
                "main": {
                    "temp": 283.494,
                    "temp_min": 283.494,
                    "temp_max": 283.494,
                    "pressure": 1018.56,
                    "sea_level": 1028.13,
                    "grnd_level": 1018.56,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.22,
                    "deg": 280.501
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-04 03:00:00"
            },
            {
                "dt": 1486188000,
                "main": {
                    "temp": 285.263,
                    "temp_min": 285.263,
                    "temp_max": 285.263,
                    "pressure": 1016.77,
                    "sea_level": 1026.41,
                    "grnd_level": 1016.77,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.88,
                    "deg": 273.501
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2017-02-04 06:00:00"
            },
            {
                "dt": 1486198800,
                "main": {
                    "temp": 285.927,
                    "temp_min": 285.927,
                    "temp_max": 285.927,
                    "pressure": 1017.03,
                    "sea_level": 1026.52,
                    "grnd_level": 1017.03,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 3.02,
                    "deg": 269.505
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-04 09:00:00"
            },
            {
                "dt": 1486209600,
                "main": {
                    "temp": 285.906,
                    "temp_min": 285.906,
                    "temp_max": 285.906,
                    "pressure": 1016.93,
                    "sea_level": 1026.64,
                    "grnd_level": 1016.93,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 3.77,
                    "deg": 261.501
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-04 12:00:00"
            },
            {
                "dt": 1486220400,
                "main": {
                    "temp": 285.51,
                    "temp_min": 285.51,
                    "temp_max": 285.51,
                    "pressure": 1016.46,
                    "sea_level": 1026.16,
                    "grnd_level": 1016.46,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 2.97,
                    "deg": 283.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2017-02-04 15:00:00"
            }
        ],
        "city": {
            "id": 1907296,
            "name": "Tawarano",
            "coord": {
                "lat": 35.0164,
                "lon": 139.0077
            },
            "country": "none"
        }
    }
};