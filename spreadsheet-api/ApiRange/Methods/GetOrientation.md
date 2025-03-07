# GetOrientation

Returns the current range angle.

## Syntax

```javascript
expression.GetOrientation();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Angle](../../Enumeration/Angle.md)

## Example

This example shows how to get the range angle.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
let range = worksheet.GetRange("A1:B1");
range.SetOrientation("xlUpward");
let orientation = range.GetOrientation();
worksheet.GetRange("A3").SetValue("Orientation: " + orientation);
```
