# ChangeOleObjects

Changes multiple OLE objects with the *InternalIds* specified in OLE object data.

## Syntax

```javascript
expression.ChangeOleObjects(arrObjectData);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrObjectData | Required | [OLEObjectData](../../Enumeration/OLEObjectData.md)[] |  | An array of OLE object data. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("ChangeOleObjects", [
    [
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
    ]
]);
```
