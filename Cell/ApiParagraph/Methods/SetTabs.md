# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph. **Warning**: The lengths of aPos array and aVal array **MUST** BE equal to each other.
<br>Inherited From: [ApiParaPr#SetTabs](../../ApiParaPr/Methods/SetTabs.md)

## Syntax

expression.SetTabs(aPos, aVal);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| aPos | Required | Array<[twips](../../../Enumerations/twips.md)> | An array of the positions of custom tab stops with respect to the current page margins measured in twentieths of a point (1/1440 of an inch). |
| aVal | Required | Array<[TabJc](../../../Enumerations/TabJc.md)> | An array of the styles of custom tab stops, which determines the behavior of the tab stop and the alignment which will be applied to text entered at the current custom tab stop. |

## Returns

This method doesn't return any data.

## Example

This example sets a sequence of custom tab stops which will be used for any tab characters in the paragraph.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 150 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetTabs([1440, 2880, 4320], ["left", "center", "right"]);
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 1 inch left");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 2 inches center");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 3 inches right");
builder.SaveFile("xlsx", "SetTabs.xlsx");
builder.CloseFile();
```