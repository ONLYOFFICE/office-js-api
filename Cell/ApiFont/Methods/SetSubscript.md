# SetSubscript

Sets the subscript property to the specified font.

## Syntax

expression.SetSubscript(isSubscript);

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isSubscript | Required | Boolean | Specifies that the text characters are displayed subscript. |

## Returns

This method doesn't return any data.

## Example

This example sets the subscript property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSubscript(true);
builder.SaveFile("xlsx", "SetSubscript.xlsx");
builder.CloseFile();
```