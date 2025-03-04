# GetIndRight

Returns the paragraph right side indentation.

## Syntax

```javascript
expression.GetIndRight();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md) \| undefined

## Example

This example shows how to get the paragraph right side indentation.

```javascript editor-xlsx
// How to get a right indent of a paragraph.

// Get the right paragraph indent by the side.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetIndRight(2880);
oParaPr.SetJc("right");
oParagraph.AddText("This is the first paragraph with the right offset of 2 inches set to it. ");
oParagraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
var nIndRight = oParaPr.GetIndRight();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Right indent: " + nIndRight);
oDocContent.Push(oParagraph);
```
