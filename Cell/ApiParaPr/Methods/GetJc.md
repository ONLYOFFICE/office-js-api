# GetJc

Returns the paragraph contents justification.

## Syntax

expression.GetJc();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ContenJustification](../../../Enumerations/ContentJustification.md)

## Example

This example shows how to get the paragraph contents justification.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetJc("center");
oParagraph.AddText("This is a paragraph with the text in it aligned by the center. ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
var sJc = oParaPr.GetJc();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Justification: " + sJc);
oDocContent.Push(oParagraph);
builder.SaveFile("xlsx", "GetJc.xlsx");
builder.CloseFile();
```