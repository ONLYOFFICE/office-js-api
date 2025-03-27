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
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1:D1");
range.SetValue("1");
range.Select();
let areas = range.GetAreas();
let parent = areas.GetParent();
let type = parent.GetClassType();
range = worksheet.GetRange('A4');
range.SetValue("The areas parent: ");
range.AutoFit(false, true);
worksheet.GetRange('B4').Paste(parent);
range = worksheet.GetRange('A5');
range.SetValue("The type of the areas parent: ");
range.AutoFit(false, true);
worksheet.GetRange('B5').SetValue(type);
```
