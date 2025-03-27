# AddProtectedRange

Creates a protected range of the specified type from the selected data range of the current sheet.

## Syntax

```javascript
expression.AddProtectedRange(sTitle, sDataRange);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title which will be displayed for the current protected range. |
| sDataRange | Required | string |  | The selected cell range which will be used to get the data for the protected range. |

## Returns

[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md) \| null

## Example

This example adds a new name to a range of cells.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.AddProtectedRange("protectedRange", "Sheet1!$A$1:$B$1");
```
