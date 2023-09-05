# SetName

Sets the font name property to the specified font.

## Syntax

expression.SetName(FontName);

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| FontName | Required | String | Font name. |

## Returns

This method doesn't return any data.

## Example

This example sets the font name property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetName("Font 1");
var sFontName = oFont.GetName();
oWorksheet.GetRange("B3").SetValue("Font name: " + sFontName);
builder.SaveFile("xlsx", "SetName.xlsx");
builder.CloseFile();
```