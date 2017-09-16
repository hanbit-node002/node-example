module.exports = {
    addEvent: function(model, date, title) {
        model.events.push({
            title: title,
            start: date.format()
        });
    }
};