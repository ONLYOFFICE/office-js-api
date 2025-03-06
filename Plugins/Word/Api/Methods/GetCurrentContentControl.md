# GetCurrentContentControl

Returns an identifier of the selected content control (i.e. the content control where the mouse cursor is currently positioned).

## Syntax

```javascript
expression.GetCurrentContentControl();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

```javascript
document.getElementById ("buttonIDChangeState").onclick = function () {
    var _Control = [];
    window.buttonIDChangeState_click = true;
    window.Asc.plugin.executeMethod("GetCurrentContentControl");
};
```
