# SetVerPosition

Sets the absolute measurement for the vertical positioning of the floating object.

## Syntax

expression.SetVerPosition(sRelativeFrom, nDistance);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | Required | [RelFromV](../../../Enumerations/RelFromV.md) | The document element which will be taken as a countdown point for the object vertical alignment. |
| nDistance | Required | [EMU](../../../Enumerations/Emu.md) | The distance from the bottom part of the document element to the floating object measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the absolute measurement for the vertical positioning of the floating object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with a shape. ");
oParagraph.AddText("The text wraps the rectangular box that bounds the object. ");
oParagraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 1908000, 1404000, oFill, oStroke);
oDrawing.SetDistances(457200, 457200, 457200, 0);
oDrawing.SetWrappingStyle("square");
oDrawing.SetVerPosition("page", 914400);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The shape is aligned to the top of the page, and outstands from the page top 1 inch.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetVerPosition.docx");
builder.CloseFile();
```