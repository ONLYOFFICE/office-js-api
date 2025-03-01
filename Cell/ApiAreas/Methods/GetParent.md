# GetParent

Returns the parent object for the specified collection.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the parent object for the specified collection.

```javascript editor-xlsx
// How to get a parent of the collection.

// Find a collection parent of the selected range.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
var oAreas = oRange.GetAreas();
var oParent = oAreas.GetParent();
var sType = oParent.GetClassType();
oRange = oWorksheet.GetRange('A4');
oRange.SetValue("The areas parent: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B4').Paste(oParent);
oRange = oWorksheet.GetRange('A5');
oRange.SetValue("The type of the areas parent: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B5').SetValue(sType);
```
