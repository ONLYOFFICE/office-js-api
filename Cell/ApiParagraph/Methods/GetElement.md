# GetElement

Returns a paragraph element using the position specified.

## Syntax

expression.GetElement(nPos);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The position where the element which content we want to get must be located. |

## Returns

[ParagraphContent](../../../Enumerations/ParagraphContent.md)

## Example

This example shows how to get a paragraph element using the position specified.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.RemoveAllElements();
var oRun = Api.CreateRun();
oRun.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the text for the third run. It ends the paragraph.");
oParagraph.AddElement(oRun);
oRun = oParagraph.GetElement(2);
oRun.SetBold(true);
builder.SaveFile("xlsx", "GetElement.xlsx");
builder.CloseFile();
```