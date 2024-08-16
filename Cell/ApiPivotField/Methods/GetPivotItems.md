# GetPivotItems

Returns an object that represents either a single PivotTable item (a PivotItem object)or a collection of all the visible and hidden items (a PivotItems object) in the specified field.

## Syntax

expression.GetPivotItems(index);

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Optional | number |  | No description provided. |

## Returns

Array.<[ApiPivotItem](../../ApiPivotItem/ApiPivotItem.md)>, ApiPivotItem, null