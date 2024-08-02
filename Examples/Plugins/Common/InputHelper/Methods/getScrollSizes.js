function getInputHelperSize () {
    var _size = window.Asc.plugin.getInputHelper().getScrollSizes();
    var _width = 200;
    var _height = _size.h;
    var _heightMin = window.Asc.plugin.getInputHelper().getItemsHeight(Math.min(5, window.Asc.plugin.getInputHelper().getItems().length));
    if (_width > 400)
        _width = 400;
    if (_height > _heightMin)
        _height = _heightMin;
        _width += 30;
        return { w: _width, h : _height };
}