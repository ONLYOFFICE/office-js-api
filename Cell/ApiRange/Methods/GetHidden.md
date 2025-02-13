# GetHidden

Returns the value hiding property. The specified range must span an entire column or row.

## Syntax

```javascript
expression.GetHidden();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to get the value hiding property.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRows("1:3");
oRange.SetHidden(true);
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
var bHidden = oRange.GetHidden();
oWorksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + bHidden);
```
