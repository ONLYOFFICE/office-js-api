# SetDrawingPrFromDrawing

Sets the properties from another drawing to the current drawing. The following properties will be copied: horizontal and vertical alignment, distance between the edges of the current drawing object and any subsequent text, wrapping style, drawing name, title and description.

## Syntax

expression.SetDrawingPrFromDrawing(oAnotherDrawing);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oAnotherDrawing | Required | [ApiDrawing](../ApiDrawing.md) | The drawing which properties will be set to the current drawing. |

## Returns

Boolean

## Example

This example sets the properties from another drawing to the drawing.

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
var oDrawing1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, oFill, oStroke);
oDrawing1.SetDistances(457200, 457200, 457200, 0);
oDrawing1.SetWrappingStyle("square");
oDrawing1.SetHorAlign("page", "center");
oParagraph.AddDrawing(oDrawing1);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is another paragraph.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The shape is aligned at the center of the page horizontally.");
oDocument.Push(oParagraph);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing2 = Api.CreateShape("roundRect", 50 * 36000, 30 * 36000, oFill, oStroke);
oDrawing2.SetDrawingPrFromDrawing(oDrawing1);
oParagraph.AddDrawing(oDrawing2);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is another shape.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("It has the same properties (alignment type, distances and wrapping type) as the shape above.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetDrawingPrFromDrawing.docx");
builder.CloseFile();
```