require('bootstrap/dist/css/bootstrap.min.css');
require('fullcalendar/dist/fullcalendar.min.css');
require('bootstrap');
require('fullcalendar');

require('../style/index.scss');

var dispatcher = require('./framework/dispatcher');
var model = require('./framework/model');

dispatcher.setModel(model);

$('#calendar').fullCalendar({
    header: {
        left: 'prev,next,today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
    },
    dayClick: function(date, jsEvent, view) {
        dispatcher.doAction('addEvent', {
            title: '새 일정',
            date: date
        });
    }
});

$('#calendar').on('node.update', function() {
    updateCalendar();
});

function updateCalendar() {
    $('#calendar').fullCalendar('removeEvents');
    $('#calendar').fullCalendar('addEventSource', model.events);
    $('#calendar').fullCalendar('render');
}







