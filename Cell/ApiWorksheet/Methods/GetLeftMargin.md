# GetLeftMargin

Returns the left margin of the sheet.

## Syntax

```javascript
expression.GetLeftMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
