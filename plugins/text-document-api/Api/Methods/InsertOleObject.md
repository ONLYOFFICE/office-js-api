# InsertOleObject

Inserts the OLE object at the current document position.

## Syntax

```javascript
expression.InsertOleObject(NewObject, bSelect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NewObject | Required | [OLEObjectData](../../Enumeration/OLEObjectData.md) |  | The OLEObjectData object. |
| bSelect | Required | boolean |  | Defines if the OLE object will be selected after inserting into the document (**true**) or not (**false**). |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("InsertOleObject", [
    {
        "Data": "{data}",
        "ImageData": "data:image/png;base64,image-in-the-base64-format",
        "ApplicationId": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
        "Width": 70,
        "Height": 70,
        "WidthPix": 60 * 36000,
        "HeightPix": 60 * 36000
    },
true]);
```
