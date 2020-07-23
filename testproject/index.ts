import forecast from 'forecast-query';
import $ from 'jquery';

$('#send').click(async () => {
    const key = $('#apiKey').val();
    if (key && typeof key === 'string') {
        $('#table').css('display', 'table');
        const weatherList: Array<{ date: Date, rain: number, clouds: number, weather: string }> = [];
        await forecast(key).around(50.08804, 14.42076)
            .subscribe(async (from, _, cast) => {
                weatherList.push({
                    date: from,
                    clouds: await cast.clouds() || 0,
                    rain: await cast.rain() || 0,
                    weather: (await cast.is())?.description || '',
                });
            })
            .yesterday()
            .hour(3)
            .hour(17)
            .today()
            .hour(19)
            .tomorrow()
            .hour(12)
            .dayAfterTomorrow()
            .clearSubscribers();
        console.log(weatherList.sort((a, b) => a.date.getTime() - b.date.getTime()));
    }
});
