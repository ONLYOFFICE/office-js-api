# GetIndex

Returns a sheet index.

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a sheet index.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let index = worksheet.GetIndex();
worksheet.GetRange("A1").SetValue("Index: ");
worksheet.GetRange("B1").SetValue(index);
```
