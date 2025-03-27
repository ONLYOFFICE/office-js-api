# GetClassType

Returns a type of the ApiSchemeColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiSchemeColor](../ApiSchemeColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"schemeColor"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let schemeColor = Api.CreateSchemeColor("dk1");
let fill = Api.CreateSolidFill(schemeColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("curvedUpArrow", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
let classType = schemeColor.GetClassType();
worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 10);
worksheet.GetRange("A1").SetValue("Class Type = ");
worksheet.GetRange("B1").SetValue(classType);
```
