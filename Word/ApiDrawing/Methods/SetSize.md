# SetSize

Sets the size of the object (image, shape, chart) bounding box.

## Syntax

expression.SetSize(nWidth, nHeight);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The object width measured in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The object height measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the size of the shape bounding box.

```javascript
builder.CreateFile("docx");
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
oDrawing.SetSize(2 * 914400, 2 * 914400);
oParagraph.AddDrawing(oDrawing);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The shape was created with a size of 53x39 millimeters, then resized to the size of 2x2 inches.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetSize.docx");
builder.CloseFile();
```