# InsertPivotExistingWorksheet

Inserts PivotTable on existing worksheet.

## Syntax

expression.InsertPivotExistingWorksheet(dataRef, pivotRef, confirmation);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Source data range. |
| pivotRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Range in which the table will be located. |
| confirmation | Required | bool |  | Replace the data in pivotRef (if it exists) or create a dialog box for this (if it exists). |

## Returns

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)