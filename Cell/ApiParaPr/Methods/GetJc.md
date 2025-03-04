# GetJc

Returns the paragraph contents justification.

## Syntax

```javascript
expression.GetJc();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"left" \| "right" \| "both" \| "center" \| undefined

## Example

This example shows how to get the paragraph contents justification.

```javascript editor-xlsx
// How to know the justification type of a paragraph.

// Create a paragraph set justification type, get it and display in the worksheet.

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
```
