# getScrollSizes

Returns the sizes of the input helper scrolled window. Returns an object with width and height parameters.

## Syntax

```javascript
expression.getScrollSizes();
```

`expression` - A variable that represents a [InputHelper](../InputHelper.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

```javascript editor-docx
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
```
