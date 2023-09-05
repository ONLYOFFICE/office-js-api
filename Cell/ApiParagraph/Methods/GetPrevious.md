# GetPrevious

Returns the previous paragraph.

## Syntax

expression.GetPrevious();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiParagraph](../ApiParagraph.md) &#124; null

## Example

This example shows how to get the previous paragraph.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
oDocContent.RemoveAllElements();
var oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText("This is the first paragraph.");
oDocContent.Push(oParagraph1);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph.");
oDocContent.Push(oParagraph2);
var oPreviousParagraph = oParagraph2.GetPrevious();
oPreviousParagraph.SetBold(true);
builder.SaveFile("xlsx", "GetPrevious.xlsx");
builder.CloseFile();
```