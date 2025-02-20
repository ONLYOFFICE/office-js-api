# AddOleObject

Adds an OLE object to the current document position.

## Syntax

```javascript
expression.AddOleObject(data);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | [OLEProperties](../../Enumeration/OLEProperties.md) |  | The OLE object properties. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-xlsx
var _param = {
    "data": "{data}",
    "imgSrc": "https://link-to-the-image.jpg",
    "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
};
window.Asc.plugin.executeMethod ("AddOleObject", [_param], function() {
    window.Asc.plugin.executeCommand ("close", "");
});
```
