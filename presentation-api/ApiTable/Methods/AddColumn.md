# AddColumn

Adds a new column to the end of the current table.

## Syntax

```javascript
expression.AddColumn(oCell, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | If not specified, a new column will be added to the end of the table. |
| isBefore | Optional | boolean | false | Add a new column before or after the specified cell. If no cell is specified,\ then this parameter will be ignored. |

## Returns

This method doesn't return any data.

## Example

This example adds a new column to the table.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
oPresentation.SetSizes(300 * 36000, 190 * 36000);
var oTable = Api.CreateTable(2, 4);
oTable.SetPosition(0 * 36000, 60 * 36000);
oTable.AddColumn(1, true);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(1);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("New column was added here.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
