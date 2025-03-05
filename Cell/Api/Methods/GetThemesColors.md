# GetThemesColors

Returns a list of all the available theme colors for the spreadsheet.

## Syntax

```javascript
expression.GetThemesColors();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

This example shows how to get a list of all the available theme colors for the spreadsheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
```
