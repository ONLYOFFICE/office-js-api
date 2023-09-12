# Parent

Returns the parent object for the specified collection. **Read-only**

## Syntax

expression.Parent;

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the parent object for the specified collection.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
var oAreas = oRange.GetAreas();
var oParent = oAreas.Parent;
var sType = oParent.GetClassType();
oRange = oWorksheet.GetRange('A4');
oRange.SetValue("The areas parent: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B4').Paste(oParent);
oRange = oWorksheet.GetRange('A5');
oRange.SetValue("The type of the areas parent: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B5').SetValue(sType);
builder.SaveFile("xlsx", "Parent.xlsx");
builder.CloseFile();
```