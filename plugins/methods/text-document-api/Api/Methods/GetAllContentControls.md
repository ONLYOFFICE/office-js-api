# GetAllContentControls

Returns information about all the content controls that have been added to the page.

## Syntax

```javascript
expression.GetAllContentControls();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ContentControl](../../Enumeration/ContentControl.md)[]

## Example

```javascript
var flagInit = false;
window.Asc.plugin.init = function (text) {
    if (!flagInit) {
        this.executeMethod ("GetAllContentControls", null, function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].Tag == 11) {
                    this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
                    break;
                }
            }
        });
        flagInit = true;
        ...
    }
};
```
