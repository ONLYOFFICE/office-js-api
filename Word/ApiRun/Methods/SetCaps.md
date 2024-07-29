# SetCaps

Specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

## Syntax

expression.SetCaps(isCaps);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | boolean |  | Specifies that the contents of the current run are displayed capitalized. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

```javascript
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetCaps(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text set to capital letters using the text properties.");
```
