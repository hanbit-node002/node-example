var oldEvents = [];
var events = [];

function update() {
    if (JSON.stringify(oldEvents) === JSON.stringify(events)) {
        return;
    }

    $('#calendar').trigger('node.update');

    oldEvents = JSON.parse(JSON.stringify(events));
}

module.exports = {
    events: events,
    update: update
};