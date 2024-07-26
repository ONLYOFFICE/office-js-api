# AddProtectedRange

Creates a protected range of the specified type from the selected data range of the current sheet.

## Syntax

expression.AddProtectedRange(sTitle, sDataRange);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title which will be displayed for the current protected range. |
| sDataRange | Required | string |  | The selected cell range which will be used to get the data for the protected range. |

## Returns

ApiProtectedRange, null