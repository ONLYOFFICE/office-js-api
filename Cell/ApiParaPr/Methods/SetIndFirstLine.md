# SetIndFirstLine

Sets the paragraph first line indentation.

## Syntax

expression.SetIndFirstLine(nValue);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../../Enumerations/twips.md) | The paragraph first line indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example sets the paragraph first line indentation.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetIndFirstLine(1440);
oParagraph.AddText("This is the first paragraph with the indent of 1 inch set to the first line. ");
oParagraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
builder.SaveFile("xlsx", "SetIndFirstLine.xlsx");
builder.CloseFile();
```