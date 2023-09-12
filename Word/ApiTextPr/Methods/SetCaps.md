# SetCaps

Specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

## Syntax

expression.SetCaps(isCaps);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | Boolean | Specifies that the contents of the current run are displayed capitalized. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetCaps(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text set to capital letters using the text properties.");
builder.SaveFile("docx", "SetCaps.docx");
builder.CloseFile();
```