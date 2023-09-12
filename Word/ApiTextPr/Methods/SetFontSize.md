# SetFontSize

Sets the font size to the characters of the current text run.

## Syntax

expression.SetFontSize(nSize);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSize | Required | [hps](../../../Enumerations/hps.md) | The text size value measured in half-points (1/144 of an inch). |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets the font size to the characters of the current text run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(30);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font size set to 15 points using the text properties.");
builder.SaveFile("docx", "SetFontSize.docx");
builder.CloseFile();
```