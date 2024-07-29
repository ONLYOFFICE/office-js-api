# SHEETS

Returns the number of sheets in a reference.

## Syntax

expression.SHEETS(arg1);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is a reference for which you want to know the number of sheets it contains.  If omitted the number of sheets in the workbook containing the function is returned. |

## Returns

number, string, boolean