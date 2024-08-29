# MoveField

Moves field from one category to another.

## Syntax

expression.MoveField(identifier, type, index);

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| identifier | Required | number &#124; string |  | The index number or name of the field. |
| type | Required | [PivotMoveFieldType](../../Enumeration/PivotMoveFieldType.md) &#124; [PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md) |  | The type of the field to move. |
| index | Optional | number |  | The index of the field in new category. |

## Returns

This method doesn't return any data.