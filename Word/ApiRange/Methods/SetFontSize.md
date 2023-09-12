# SetFontSize

Sets the font size to the characters of the current text Range.

## Syntax

expression.SetFontSize(FontSize);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSize | Required | [hps](../../../Enumerations/hps.md) | The text size value measured in half-points (1/144 of an inch). |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't set font size)

## Example

This example sets the font size to the characters of the text Range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetFontSize(14);
builder.SaveFile("docx", "SetFontSize.docx");
builder.CloseFile();
```