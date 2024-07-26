# SetVerticalTextAlign

Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

## Syntax

expression.SetVerticalTextAlign(VerticalAlign);

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| VerticalAlign | Required | VerticalTextAlign |  | The type of the vertical alignment for the shape inner contents. |

## Returns

This method doesn't return any data.

## Example

This example sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetContent();
var sClassType = oDrawing.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocContent.AddElement(0, oParagraph);
oDrawing.SetVerticalTextAlign("top");
```
