# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If the value of the sLineRule parameter is "auto", then the value of the nLine parameter will be interpreted as 240ths of a line.

## Syntax

expression.SetSpacingLine(nLine, sLineRule);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nLine | Required | [twips](../../../Enumerations/twips.md) &#124; [line240](../../../Enumerations/line240.md) | The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line. |
| sLineRule | Required | [LineRule](../../../Enumerations/LineRule.md) | The rule that determines the measuring units of the line spacing. |

## Returns

This method doesn't return any data.

## Example

This example sets the paragraph line spacing.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
builder.SaveFile("xlsx", "SetSpacingLine.xlsx");
builder.CloseFile();
```