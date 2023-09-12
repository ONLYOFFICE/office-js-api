# Fill

Sets the fill formatting properties to the current graphic object.

## Syntax

expression.Fill(oFill);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The fill type used to fill the graphic object. |

## Returns

Boolean (return false if param is invalid)

## Example

This example sets the fill formatting properties to the current graphic object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oCopyDrawing = oDrawing.Copy();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oCopyDrawing.Fill(oFill);
oParagraph.AddDrawing(oCopyDrawing);
builder.SaveFile("docx", "Fill.docx");
builder.CloseFile();
```