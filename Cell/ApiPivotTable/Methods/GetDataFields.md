# GetDataFields

Returns an collection that represents either a single PivotTable data fieldor a collection of all visible data fields.

## Syntax

expression.GetDataFields(field);

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Required | number &#124;string &#124;undefined |  | The name or index of the field to be returned. |

## Returns

Array.<[ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md)>, ApiPivotDataField, null