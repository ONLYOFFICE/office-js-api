# GetAllOleObjects

Returns a collection of OLE objects from the document content.

## Syntax

expression.GetAllOleObjects();

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiOleObject](../../ApiOleObject/ApiOleObject.md)>

## Example

This example showh how to get a collection of OLE objects from the document content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, oFill, oStroke);
oParagraph.AddDrawing(oShape);
var oOleObject = Api.CreateOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 95 * 36000, 70 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
oParagraph = Api.CreateParagraph();
oParagraph.AddDrawing(oOleObject);
var oDocContent = oShape.GetDocContent();
oDocContent.AddElement(0, oParagraph);
var aOleObjects = oDocContent.GetAllOleObjects();
var sAppId = aOleObjects[0].GetApplicationId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The application ID for the current OLE object: " + sAppId);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllOleObjects.docx");
builder.CloseFile();
```