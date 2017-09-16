var actions = require('../actions');
var model = {};

function doAction(actionId, option) {
    switch (actionId) {
        case 'addEvent': {
            actions.addEvent(model, option.date, option.title);
            break;
        }
    }

    $('#calendar').trigger('node.update');
}

module.exports = {
    setModel: function(_model) {
        model = _model;
    },
    doAction: doAction
};