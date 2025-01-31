# GetRange

Returns a Range object that represents the part of the document contained in the document content.

## Syntax

```javascript
expression.GetRange(Start, End);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Required | Number |  | Start position index in the current element. |
| End | Required | Number |  | End position index in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get a Range object that represents the part of the document contained in the specified document content.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample paragraph.");
docContent.AddElement(0, paragraph);
let range = docContent.GetRange(8, 11);
range.SetBold(true);
```
