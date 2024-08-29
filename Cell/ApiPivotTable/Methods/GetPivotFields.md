# GetPivotFields

Returns an collection that represents either a single PivotTable field
or a collection of both the visible and hidden fields in the PivotTable report.

## Syntax

expression.GetPivotFields(field);

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Optional | string &#124; number |  | The name or index of the field to be returned. |

## Returns

Array.<[ApiPivotField](../../ApiPivotField/ApiPivotField.md)>, ApiPivotField, ApiPivotDataField, null