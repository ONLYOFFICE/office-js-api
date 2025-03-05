# GetActiveSheet

Returns an object that represents the active sheet.

## Syntax

```javascript
expression.GetActiveSheet();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

This example shows how to get an object that represents the active sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");
```
