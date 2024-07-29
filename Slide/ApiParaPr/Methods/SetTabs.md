# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.**Warning**: The lengths of aPos array and aVal array **MUST BE** equal to each other.

## Syntax

expression.SetTabs(aPos, aVal);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | Required | Array.<[twips](../../Enumeration/twips.md)> |  | An array of the positions of custom tab stops with respect to the current page marginsmeasured in twentieths of a point (1/1440 of an inch). |
| aVal | Required | Array.<[TabJc](../../Enumeration/TabJc.md)> |  | An array of the styles of custom tab stops, which determines the behavior of the tabstop and the alignment which will be applied to text entered at the current custom tab stop. |

## Returns

This method doesn't return any data.

## Example

This example sets a sequence of custom tab stops which will be used for any tab characters in the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle);
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 1 inch left");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 3 inches center");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 5 inches right");
```
