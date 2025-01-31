# RemoveAllElements

Removes all the elements from the current document or from the current document element.
💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add
content to this paragraph, use the &#123;@link ApiDocumentContent#GetElement&#125; method.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes all the elements from the current document or from the current document content.

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
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.AddElement(0, paragraph);
```
