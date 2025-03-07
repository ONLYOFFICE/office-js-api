# GetName

Returns a sheet name.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a sheet name.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let name = worksheet.GetName();
worksheet.GetRange("A1").SetValue("Name: ");
worksheet.GetRange("B1").SetValue(name);
```
