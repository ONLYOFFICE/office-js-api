# SetVertAlign

Specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text:
**"baseline"** - the characters in the current text run will be aligned by the default text baseline.
**"subscript"** - the characters in the current text run will be aligned below the default text baseline.
**"superscript"** - the characters in the current text run will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(sType);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" \| "subscript" \| "superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

```javascript editor-xlsx
// How to change vertical alignment of a text.

// Make text superscript.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetVertAlign("superscript");
oParagraph.SetJc("left");
oRun.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
oParagraph.AddElement(oRun);
```
