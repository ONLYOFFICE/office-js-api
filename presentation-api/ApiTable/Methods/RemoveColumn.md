# RemoveColumn

Removes a table column with the specified cell.

## Syntax

```javascript
expression.RemoveColumn(oCell);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The table cell from the column which will be removed. |

## Returns

boolean

## Example

This example removes a table column with the specified cell.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(1);
oTable.RemoveColumn(oCell);
oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The second column was removed.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
