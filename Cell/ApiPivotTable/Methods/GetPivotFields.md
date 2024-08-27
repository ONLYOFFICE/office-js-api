# GetPivotFields

Returns an collection that represents either a single PivotTable field

## Syntax

expression.GetPivotFields(field);

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Optional | string &#124;number |  | The name or index of the field to be returned. |

## Returns

Array.<[ApiPivotField](../../ApiPivotField/ApiPivotField.md)>, ApiPivotField, ApiPivotDataField, null