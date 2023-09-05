# RemoveElement

Removes an element using the position specified.
<br>If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph), a new empty run is automatically created. If you want to add content to this run, use the [ApiParagraph#GetElement](./GetElement.md) method.

## Syntax

expression.RemoveElement(nPos);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The element position which we want to remove from the paragraph. |

## Returns

This method doesn't return any data.

## Example

This example removes an element using the position specified.

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
oRun.AddText("This is the first paragraph element. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the second paragraph element. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the third paragraph element (it will be removed from the paragraph and we will not see it). ");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
oRun = Api.CreateRun();
oRun.AddText("This is the fourth paragraph element - it became the third, because we removed the previous run from the paragraph. ");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
oRun = Api.CreateRun();
oRun.AddText("Please note that line breaks are not counted into paragraph elements!");
oParagraph.AddElement(oRun);
oParagraph.RemoveElement(3);
builder.SaveFile("xlsx", "RemoveElement.xlsx");
builder.CloseFile();
```