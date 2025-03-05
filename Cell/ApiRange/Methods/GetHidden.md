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

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRows("1:3");
range.SetHidden(true);
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let hidden = range.GetHidden();
worksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + hidden);
```
