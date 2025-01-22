# EditOleObject

Edits an OLE object in the document.

## Syntax

expression.EditOleObject(data);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | [OLEProperties](../../Enumeration/OLEProperties.md) |  | The OLE object properties. |

## Returns

This method doesn't return any data.

## Example

```javascript
var _param = &#123;
    "data": "&#123;data&#125;",
    "imgSrc": "https://link-to-the-image.jpg",
    "objectId": "5_556",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
&#125;;
window.Asc.plugin.executeMethod ("EditOleObject", [_param], function () &#123;
    window.Asc.plugin.executeCommand ("close", "");
&#125;);
