# SetApplicationId

Sets the application ID to the current OLE object.

## Syntax

expression.SetApplicationId(sAppId);

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sAppId | Required | String | The application ID associated with the curent OLE object. |

## Returns

Boolean

## Example

This example sets the application ID to the current OLE object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oOleObject);
oOleObject.SetApplicationId("asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}");
builder.SaveFile("docx", "SetApplicationId.docx");
builder.CloseFile();
```