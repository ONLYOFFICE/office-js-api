# EditOleObject

Edits an OLE object in the document.

## Syntax

```javascript
expression.EditOleObject(data);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | [OLEProperties](../../Enumeration/OLEProperties.md) |  | The OLE object properties. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
var _param = {
    "data": "{data}",
    "imgSrc": "https://link-to-the-image.jpg",
    "objectId": "5_556",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
};
window.Asc.plugin.executeMethod ("EditOleObject", [_param], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
