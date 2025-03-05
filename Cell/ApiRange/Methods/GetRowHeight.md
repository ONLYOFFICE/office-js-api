# GetRowHeight

Returns the row height value.

## Syntax

```javascript
expression.GetRowHeight();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[pt](../../Enumeration/pt.md)

## Example

This example shows how to get the row height value.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let height = worksheet.GetRange("A1").GetRowHeight();
worksheet.GetRange("A1").SetValue("Height: ");
worksheet.GetRange("B1").SetValue(height);
```
