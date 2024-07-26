# SetPaddings

Sets the text paddings to the current shape.

## Syntax

expression.SetPaddings(nLeft, nTop, nRight, nBottom);

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | EMU |  | Left padding. |
| nTop | Required | EMU |  | Top padding. |
| nRight | Required | EMU |  | Right padding. |
| nBottom | Required | EMU |  | Bottom padding. |

## Returns

This method doesn't return any data.

## Example

This example sets the text paddings to the current shape.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetDocContent();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text with paddings set to it.");
oDocContent.Push(oParagraph);
oDrawing.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
```
