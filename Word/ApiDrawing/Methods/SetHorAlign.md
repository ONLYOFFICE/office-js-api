# SetHorAlign

Specifies how the floating object will be horizontally aligned.

## Syntax

expression.SetHorAlign(sRelativeFrom, sAlign);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Optional | RelFromH | "page" | The document element which will be taken as a countdown point for the object horizontal alignment. |
| sAlign | Optional | "left" &#124;"right" &#124;"center" | "left" | The alignment type which will be used for the object horizontal alignment. |

## Returns

This method doesn't return any data.

## Example

This example specifies how the floating object will be horizontally aligned.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with a shape. ");
oParagraph.AddText("The text wraps the rectangular box that bounds the object. ");
oParagraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 1908000, 1404000, oFill, oStroke);
oDrawing.SetDistances(457200, 457200, 457200, 0);
oDrawing.SetWrappingStyle("square");
oDrawing.SetHorAlign("page", "center");
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is another paragraph.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The shape is aligned at the center of the page horizontally.");
oDocument.Push(oParagraph);
```
