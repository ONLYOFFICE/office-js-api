# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the cell.

## Syntax

expression.AddElement(oCell, nPos, oElement);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell where the specified element will be added. |
| nPos | Required | number |  | The position in the cell where the specified element will be added. |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The document element which will be added at the current position. |

## Returns

This method doesn't return any data.