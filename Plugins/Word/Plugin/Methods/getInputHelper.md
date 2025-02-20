# getInputHelper

Defines the method used to get the &#123;@link inputhelper InputHelper object&#125;.

## Syntax

```javascript
expression.getInputHelper();
```

`expression` - A variable that represents a [Plugin](../Plugin.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[InputHelper](../../InputHelper/InputHelper.md)

## Example

```javascript editor-docx
window.Asc.plugin.init = function(text) {
    if (!window.isInit) {
        window.isInit = true;
        window.Asc.plugin.currentContentControl = null;
        window.Asc.plugin.createInputHelper();
        window.Asc.plugin.getInputHelper().createWindow();
    }
};
```
