# SetPaddings

Sets the text paddings to the current shape.

## Syntax

```javascript
expression.SetPaddings(nLeft, nTop, nRight, nBottom);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | [EMU](../../Enumeration/EMU.md) |  | Left padding. |
| nTop | Required | [EMU](../../Enumeration/EMU.md) |  | Top padding. |
| nRight | Required | [EMU](../../Enumeration/EMU.md) |  | Right padding. |
| nBottom | Required | [EMU](../../Enumeration/EMU.md) |  | Bottom padding. |

## Returns

boolean

## Example

This example sets the text paddings to the current shape.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text with paddings set to it.");
docContent.Push(paragraph);
drawing.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
```
