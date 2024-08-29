# Move

Moves field inside category.

## Syntax

expression.Move(type, index);

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [PivotMoveFieldType](../../Enumeration/PivotMoveFieldType.md) &#124; [PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md) |  | The type of the field to move. |
| index | Required | number &#124; undefined |  | The index of the field in new category. |

## Returns

This method doesn't return any data.