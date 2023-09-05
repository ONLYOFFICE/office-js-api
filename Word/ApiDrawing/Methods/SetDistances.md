# SetDistances

Specifies the minimum distance which will be maintained between the edges of the current drawing object and any subsequent text.

## Syntax

expression.SetDistances(nLeft, nTop, nRight, nBottom);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | [EMU](../../../Enumerations/Emu.md) | The distance from the left side of the current object and the subsequent text run measured in English measure units. |
| nTop | Required | [EMU](../../../Enumerations/Emu.md) | The distance from the top side of the current object and the preceding text run measured in English measure units. |
| nRight | Required | [EMU](../../../Enumerations/Emu.md) | The distance from the right side of the current object and the subsequent text run measured in English measure units. |
| nBottom | Required | [EMU](../../../Enumerations/Emu.md) | The distance from the bottom side of the current object and the subsequent text run measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example specifies the minimum distance which will be maintained between the edges of the drawing object and any subsequent text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with a shape. ");
oParagraph.AddText("The text wraps the rectangular box that bounds the object. ");
oParagraph.AddText("The distance between the shape and the text is 1 inch (914400 English measure units).");
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 1908000, 1404000, oFill, oStroke);
oDrawing.SetDistances(914400, 0, 914400, 0);
oDrawing.SetWrappingStyle("square");
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is another paragraph.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetDistances.docx");
builder.CloseFile();
```