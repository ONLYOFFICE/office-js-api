# GetTopMargin

Returns the top margin of the sheet.

## Syntax

```javascript
expression.GetTopMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the top margin of the sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
```
