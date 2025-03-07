# GetDefName

Returns the ApiName object of the current range.

## Syntax

```javascript
expression.GetDefName();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiName](../../ApiName/ApiName.md)

## Example

This example shows how to get the ApiName object of the range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
let range = worksheet.GetRange("A1:B1");
let defName = range.GetDefName();
worksheet.GetRange("A3").SetValue("DefName: " + defName.GetName());
```
