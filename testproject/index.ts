import forecast from 'forecast-query';
import $ from 'jquery';

$('#send').click(async () => {
    const key = $('#apiKey').val();
    if (key && typeof key === 'string') {
        $('#table').css('display', 'table');
        const today = new Date();
        const fourDaysLater = new Date();
        fourDaysLater.setDate(fourDaysLater.getDate() + 4);
        const list = forecast(key)
            .around(50.08804, 14.42076)
            .at(today, fourDaysLater)
            .list('hour');
        console.log(await list.clouds());
        console.log(await list.percipitation('rain'));
        console.log(await list.cloudy());
    }
});
