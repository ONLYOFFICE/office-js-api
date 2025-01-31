# GetAllOleObjects

Returns a collection of OLE objects in the paragraph.

## Syntax

```javascript
expression.GetAllOleObjects();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiOleObject[]](../../ApiOleObject/ApiOleObject.md)

## Example

This example shows how to get a collection of OLE objects in the paragraph.

```javascript
let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject("https://i.ytimg.com/vi_webp/SKGz4pmnpgY/sddefault.webp", 130 * 36000, 90 * 36000, "https://youtu.be/SKGz4pmnpgY", "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}");
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let oleObjects = paragraph.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText("The application ID for the current OLE object: " + appId);
doc.Push(paragraph);
```
