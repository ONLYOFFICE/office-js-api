# GetSelectionType

Returns the type of the current selection.

## Syntax

```javascript
expression.GetSelectionType();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SelectionType](../../Enumeration/SelectionType.md)

## Example

```javascript editor-docx
window.Asc.plugin.executeMethod ("GetSelectionType", [], function(type) {
    switch (type) {
        case "none":
        case "drawing":
            window.Asc.plugin.executeMethod ("PasteText", [$("#txt_shower")[0].innerText], function (result) {
                paste_done = true;
            });
            break;
        case "text":
            window.Asc.plugin.callCommand (function() {
                Api.ReplaceTextSmart (Asc.scope.arr);
            }, undefined, undefined, function(result) {
                paste_done = true;
            });
            break;
    }
});
```
