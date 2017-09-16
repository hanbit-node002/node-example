require('bootstrap/dist/css/bootstrap.min.css');
require('fullcalendar/dist/fullcalendar.min.css');
require('bootstrap');
require('fullcalendar');

require('../style/index.scss');

$('#calendar').fullCalendar({
    height: '100%',
    header: {
        left: 'prev,next,today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
    },
    dayClick: function(date, jsEvent, view) {
        doAction('addEvent', {
            title: '새 일정',
            date: date
        });
    }
});

function doAction(actionId, option) {
    switch (actionId) {
        case 'addEvent': {
            addEvent(option.date, option.title);
            break;
        }
    }

    updateCalendar();
}

function addEvent(date, title) {
    events.push({
        title: title,
        start: date.format()
    });
}

var events = [];

function updateCalendar() {
    $('#calendar').fullCalendar('removeEvents');
    $('#calendar').fullCalendar('addEventSource', events);
    $('#calendar').fullCalendar('render');
}







