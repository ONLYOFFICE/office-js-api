# createWindow

Creates an input helper window.

## Syntax

```javascript
expression.createWindow();
```

`expression` - A variable that represents a [InputHelper](../InputHelper.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.init = function(text) {
    if (!window.isInit) {
        window.isInit = true;
        window.Asc.plugin.currentText = "";
        window.Asc.plugin.createInputHelper();
        window.Asc.plugin.getInputHelper().createWindow();
    }
};
```
