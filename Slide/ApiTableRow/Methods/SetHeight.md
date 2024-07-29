# SetHeight

Sets the height to the current table row.

## Syntax

expression.SetHeight(nValue);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Optional | [EMU](../../Enumeration/EMU.md) |  | The row height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the height to the table row.

```javascript
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
oRow.SetHeight(30 * 36000);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
