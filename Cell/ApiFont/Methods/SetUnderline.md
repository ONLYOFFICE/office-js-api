# SetUnderline

Sets an underline of the type specified in the request to the current font.\
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetUnderline(Underline);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Underline | Required | [XlUnderlineStyle](../../Enumeration/XlUnderlineStyle.md) |  | Underline type. |

## Returns

This method doesn't return any data.

## Example

This example sets an underline of the type specified in the request to the font.

```javascript editor-xlsx
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetUnderline("xlUnderlineStyleSingle");
```
