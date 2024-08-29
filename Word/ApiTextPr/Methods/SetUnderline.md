# SetUnderline

Specifies that the contents of the run are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

## Syntax

expression.SetUnderline(isUnderline);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies that the contents of the current run are displayed underlined. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that the contents of the current run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

```javascript
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetUnderline(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text underlined with a single line.");
```
