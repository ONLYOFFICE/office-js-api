# SetSize

Sets the font size property to the specified font.

## Syntax

expression.SetSize(Size);

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Size | Required | Number | Font size. |

## Returns

This method doesn't return any data.

## Example

This example sets the font size property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSize(18);
builder.SaveFile("xlsx", "SetSize.xlsx");
builder.CloseFile();
```