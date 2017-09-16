var model = {
    oldEvents: [],
    events: []
};

function init() {
    $.ajax({
        url: '/calendar/get',
        success: function(result) {
            model.events = result;
            update();
        }
    });
}

function update() {
    if (JSON.stringify(model.oldEvents) === JSON.stringify(model.events)) {
        return;
    }

    $('#calendar').trigger('node.update');

    model.oldEvents = JSON.parse(JSON.stringify(model.events));
}

module.exports = {
    data: model,
    init: init,
    update: update
};