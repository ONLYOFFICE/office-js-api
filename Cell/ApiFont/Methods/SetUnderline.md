# SetUnderline

Sets an underline of the type specified in the request to the current font.

## Syntax

expression.SetUnderline(Underline);

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Underline | Required | [XlUnderlineStyle](../../../Enumerations/XlUnderlineStyle.md) | Underline type. |

## Returns

This method doesn't return any data.

## Example

This example sets an underline of the type specified in the request to the font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetUnderline("xlUnderlineStyleSingle");
builder.SaveFile("xlsx", "SetUnderline.xlsx");
builder.CloseFile();
```