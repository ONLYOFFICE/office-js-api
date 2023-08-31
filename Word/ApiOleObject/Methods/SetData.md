# SetData

Sets the data to the current OLE object.

## Syntax

expression.SetData(sData);

`expression` - A variable that represents a [ApiOleObject](../ApiOleObject.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sData | Required | String | The OLE object string data. |

## Returns

Boolean

## Example

This example sets the data to the current OLE object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oOleObject = Api.CreateOleObject("https://api.onlyoffice.com/content/img/docbuilder/examples/ole-object-image.png", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oOleObject);
oOleObject.SetData("https://youtu.be/eJxpkjQG6Ew");
builder.SaveFile("docx", "SetData.docx");
builder.CloseFile();
```