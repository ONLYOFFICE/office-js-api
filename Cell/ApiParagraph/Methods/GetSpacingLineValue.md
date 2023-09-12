# GetSpacingLineValue

Returns the paragraph line spacing value.<br>Inherited From: [ApiParaPr#GetSpacingLineValue](../../ApiParaPr/Methods/GetSpacingLineValue.md)

## Syntax

expression.GetSpacingLineValue();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md)  | [line240](../../../Enumerations/line240.md) &#124; undefined

## Example

This example shows how to get the paragraph line spacing value.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 80 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddLineBreak();
var nSpacingLineValue = oParagraph.GetSpacingLineValue();
oParagraph.AddText("Spacing line value: " + nSpacingLineValue);
builder.SaveFile("xlsx", "GetSpacingLineValue.xlsx");
builder.CloseFile();
```