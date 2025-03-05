# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.**Warning**: The lengths of aPos array and aVal array **MUST BE** equal to each other.

## Syntax

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | Required | [twips](../../Enumeration/twips.md)[] |  | An array of the positions of custom tab stops with respect to the current page margins measured in twentieths of a point (1/1440 of an inch). |
| aVal | Required | [TabJc](../../Enumeration/TabJc.md)[] |  | An array of the styles of custom tab stops, which determines the behavior of the tab stop and the alignment which will be applied to text entered at the current custom tab stop. |

## Returns

This method doesn't return any data.

## Example

This example sets a sequence of custom tab stops which will be used for any tab characters in the paragraph.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 150 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTabs([1440, 2880, 4320], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 2 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches right");
```
