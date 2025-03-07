# GetAllForms

Returns information about all the forms that have been added to the document.

## Syntax

```javascript
expression.GetAllForms();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ContentControl](../../Enumeration/ContentControl.md)[]

## Example

```javascript
window.Asc.plugin.executeMethod ("GetAllForms", null, function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].Tag == 11) {
            this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
            break;
        }
    }
});
```
