# SetTextPr

Sets the text properties to the current Range.

## Syntax

expression.SetTextPr(oTextPr);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required/Optional | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | The properties that will be set to the content of the content control. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't set text properties)

## Example

This example sets the text properties to the Range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oTextPr = oParagraph.GetTextPr();
oTextPr.SetItalic(true);
var oRange = oDocument.GetRange(0, 24);
oRange.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();
```