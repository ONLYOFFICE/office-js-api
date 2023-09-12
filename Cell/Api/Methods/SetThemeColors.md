# SetThemeColors

Sets the theme colors to the current spreadsheet.

## Syntax

expression.SetThemeColors(sTheme);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTheme | Required | String | The color scheme that will be set to the current spreadsheet. |

## Returns

Boolean (returns false if sTheme isn't a string)

## Example

This example sets the theme colors to the current spreadsheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
	oWorksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
Api.SetThemeColors(themes[3]);
oWorksheet.GetRange("C3").SetValue("The 'Apex' theme colors were set to the current spreadsheet.");
builder.SaveFile("xlsx", "SetThemeColors.xlsx");
builder.CloseFile();
```