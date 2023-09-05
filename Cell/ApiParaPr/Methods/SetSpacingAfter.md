# SetSpacingAfter

Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it will be interpreted as false.

## Syntax

expression.SetSpacingAfter(nAfter, isAfterAuto?);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nAfter | Required | [twips](../../../Enumerations/twips.md) | The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isAfterAuto | Optional | Boolean | The true value disables the spacing after the current paragraph. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example sets the spacing after the current paragraph.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingAfter(1440);
oParagraph.AddText("This is an example of setting a space after a paragraph. ");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oDocContent.Push(oParagraph);
builder.SaveFile("xlsx", "SetSpacingAfter.xlsx");
builder.CloseFile();
```