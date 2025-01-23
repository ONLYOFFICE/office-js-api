# GetAllOleObjects

Returns a collection of OLE objects from the document content.

## Syntax

expression.GetAllOleObjects();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiOleObject[]](../../ApiOleObject/ApiOleObject.md)

## Example

This example showh how to get a collection of OLE objects from the document content.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let oleObject = Api.CreateOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 95 * 36000, 70 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
paragraph = Api.CreateParagraph();
paragraph.AddDrawing(oleObject);
let docContent = shape.GetDocContent();
docContent.AddElement(0, paragraph);
let oleObjects = docContent.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText("The application ID for the current OLE object: " + appId);
doc.Push(paragraph);
```
