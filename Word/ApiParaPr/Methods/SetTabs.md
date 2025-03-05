# SetTabs

Specifies a sequence of custom tab stops which will be used for any tab characters in the current paragraph.**Warning**: The lengths of aPos array and aVal array **MUST BE** equal to each other.

## Syntax

```javascript
expression.SetTabs(aPos, aVal);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aPos | Required | [twips](../../Enumeration/twips.md)[] |  | An array of the positions of custom tab stops with respect to the current page margins measured in twentieths of a point (1/1440 of an inch). |
| aVal | Required | [TabJc](../../Enumeration/TabJc.md)[] |  | An array of the styles of custom tab stops, which determines the behavior of the tab stop and the alignment which will be applied to text entered at the current custom tab stop. |

## Returns

This method doesn't return any data.

## Example

This example sets a sequence of custom tab stops which will be used for any tab characters in the paragraph.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");
```
