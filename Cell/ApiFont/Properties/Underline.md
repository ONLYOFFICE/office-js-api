# Underline

The font type of underline.

## Syntax

expression.Underline; &#124; expression.Underline = Underline;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Underline | Required | [XlUnderlineStyle](../../../Enumerations/XlUnderlineStyle.md) | Underline type. |

## Returns

[XlUnderlineStyle](../../../Enumerations/XlUnderlineStyle.md) &#124; null

## Example

This example sets an underline of the type specified in the request to the font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.Underline = "xlUnderlineStyleSingle";
builder.SaveFile("xlsx", "Underline.xlsx");
builder.CloseFile();
```