# SetHighlight

Specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.

## Syntax

expression.SetHighlight(sColor);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | highlightColor |  | Available highlight color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.

```javascript
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetHighlight("lightGray");
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text highlighted with light gray color using the text properties.");
```
