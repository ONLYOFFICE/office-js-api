# GetAllOleObjects

Returns a collection of OLE objects from the document content.<br>Inherited From: [ApiDocumentContent#GetAllOleObjects](../../ApiDocumentContent/Methods/GetAllOleObjects.md)

## Syntax

expression.GetAllOleObjects();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiOleObject](../../ApiOleObject/ApiOleObject.md)>

## Example

This example showh how to get a collection of OLE objects from the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oOleObject = Api.CreateOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 95 * 36000, 70 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(oOleObject);
var aOleObjects = oDocument.GetAllOleObjects();
var sAppId = aOleObjects[0].GetApplicationId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The application ID for the current OLE object: " + sAppId);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllOleObjects.docx");
builder.CloseFile();
```