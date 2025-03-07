# ChangeOleObject

Changes the OLE object with the *InternalId* specified in OLE object data.

## Syntax

```javascript
expression.ChangeOleObject(ObjectData);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ObjectData | Required | [OLEObjectData](../../Enumeration/OLEObjectData.md) |  | The OLEObjectData object. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("ChangeOleObject", [
    {
        "Data": "{data}",
        "ImageData": "data:image/png;base64,image-in-the-base64-format",
        "ApplicationId": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
        "InternalId": "5_556",
        "ParaDrawingId": "1_713",
        "Width": 70,
        "Height": 70,
        "WidthPix": 60 * 36000,
        "HeightPix": 60 * 36000
    }
]);
```
