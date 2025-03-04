# GetPageOrientation

Returns the page orientation.

## Syntax

```javascript
expression.GetPageOrientation();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PageOrientation](../../Enumeration/PageOrientation.md)

## Example

This example shows how to get the page orientation.

```javascript editor-xlsx
// How to get orientation of the sheet.

// Get a sheet orientation.

var oWorksheet = Api.GetActiveSheet();
var sPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(sPageOrientation);
```
