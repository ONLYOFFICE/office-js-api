# CreatePatternFill

Creates a pattern fill to apply to the object using the selected pattern as the object background.

## Syntax

expression.CreatePatternFill(sPatternType, BgColor, FgColor);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sPatternType | Required | [PatternType](../../../Enumerations/PatternType.md) | 
The pattern type used for the fill selected from one of the available pattern types. |
| BgColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) | The background color used for the pattern creation. |
| FgColor | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md) | The foreground color used for the pattern creation. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

This example creates a pattern fill and applys it to the object using the selected pattern as the object background.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "CreatePatternFill.docx");
builder.CloseFile();
```