function render(res, view, model) {
    model.view = view;

    res.render(view, model);
}

module.exports = {
    render: render
};