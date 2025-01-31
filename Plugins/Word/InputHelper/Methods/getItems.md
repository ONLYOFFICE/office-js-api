# getItems

Returns an array of the &#123;@link global#InputHelperItem InputHelperItem&#125; objects that contain all the items from the input helper.

## Syntax

```javascript
expression.getItems();
```

`expression` - A variable that represents a [InputHelper](../InputHelper.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[InputHelperItem[]](../../Enumeration/InputHelperItem.md)

## Example

```javascript
function getInputHelperSize () {
    var _size = window.Asc.plugin.getInputHelper().getScrollSizes();
    var _width = 150;
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
