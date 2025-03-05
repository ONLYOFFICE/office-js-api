# CreateOleObject

Creates an OLE object with the parameters specified.

## Syntax

```javascript
expression.CreateOleObject(imageSrc, width, height, data, appId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageSrc | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object width in English measure units. |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The OLE object height in English measure units. |
| data | Required | string |  | The OLE object string data. |
| appId | Required | string |  | The application ID associated with the current OLE object. |

## Returns

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## Example

This example creates an Ole object and inserts it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
```
