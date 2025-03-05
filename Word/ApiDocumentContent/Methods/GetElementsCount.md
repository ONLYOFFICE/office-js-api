# GetElementsCount

Returns a number of elements in the current document.

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a number of elements in the current document content.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = docContent.GetElement(0);
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of elements inside the shape: " + docContent.GetElementsCount());
doc.Push(paragraph);
```
