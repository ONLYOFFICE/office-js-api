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
// How to get name of the sheet.

// Get a sheet name.

var oWorksheet = Api.GetActiveSheet();
var sName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Name: ");
oWorksheet.GetRange("B1").SetValue(sName);
```
