# SetThemeColors

Sets the theme colors to the current spreadsheet.

## Syntax

```javascript
expression.SetThemeColors(sTheme);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTheme | Required | string |  | The color scheme that will be set to the current spreadsheet. |

## Returns

boolean

## Example

This example sets the theme colors to the current spreadsheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
Api.SetThemeColors(themes[3]);
worksheet.GetRange("C3").SetValue("The 'Apex' theme colors were set to the current spreadsheet.");
```
