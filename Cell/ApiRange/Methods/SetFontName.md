# SetFontName

Sets the specified font family as the font name for the current cell range.

## Syntax

expression.SetFontName(sName);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sName | Required | String | The font family name used for the current cell range. |

## Returns

This method doesn't return any data.

## Example

This example sets the specified font family as the font name for the cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A2").SetValue("2");
var oRange = oWorksheet.GetRange("A1:D5");
oRange.SetFontName("Arial");
builder.SaveFile("xlsx", "SetFontName.xlsx");
builder.CloseFile();
```