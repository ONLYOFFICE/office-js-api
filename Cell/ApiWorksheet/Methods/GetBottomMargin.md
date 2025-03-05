# GetBottomMargin

Returns the bottom margin of the sheet.

## Syntax

```javascript
expression.GetBottomMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the bottom margin of the sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
