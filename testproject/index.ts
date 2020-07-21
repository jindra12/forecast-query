import forecast, { Forecast } from 'forecast-query';
import $ from 'jquery';

const writeInTable = (date: Date, rain: number, clouds: number, weather: string) => $('#weather').append(
    `<tr><td>${date.toString()}</td><td>${rain}</td><td>${clouds}</td><td>${weather}</td></tr>`
)

const writeWeatherWithDate = async (weather: Forecast) => writeInTable(weather.dates[0], await weather.rain() || 0, await weather.clouds() || 0, (await weather.is())?.description || '');

$('#send').click(async () => {
    const key = $('#apiKey').val();
    if (key && typeof key === 'string') {
        const weather = forecast(key).around(50.08804, 14.42076);
        $('#table').css('display', 'table');
        $('#weather').remove('tr');
        await writeWeatherWithDate(weather);
        weather.yesterday();
        await writeWeatherWithDate(weather);
        weather.hour(3);
        await writeWeatherWithDate(weather);
        console.log([weather.dates[0].toString(), weather.dates[1].toString()]);
        console.log(weather.response.map(res => new Date(res.weather.dt).toString()));
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
    }
});
