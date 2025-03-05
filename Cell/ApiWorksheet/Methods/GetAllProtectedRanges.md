# GetAllProtectedRanges

Returns all protected ranges from the current worksheet.

## Syntax

```javascript
expression.GetAllProtectedRanges();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md)[] \| null

## Example

This example shows how to get an object that represents all protected ranges.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange1", "Sheet1!$A$1:$B$1");
worksheet.AddProtectedRange("protectedRange2", "Sheet1!$A$2:$B$2");
let protectedRanges = worksheet.GetAllProtectedRanges();
protectedRanges[0].SetTitle("protectedRangeNew1");
protectedRanges[1].SetTitle("protectedRangeNew2");
```
