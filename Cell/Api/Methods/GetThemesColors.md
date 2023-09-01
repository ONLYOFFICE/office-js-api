# GetThemesColors

Returns a list of all the available theme colors for the spreadsheet.

## Syntax

expression.GetThemesColors();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<String>

## Example

This example shows how to get a list of all the available theme colors for the spreadsheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
	oWorksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
builder.SaveFile("xlsx", "GetThemesColors.xlsx");
builder.CloseFile();
```