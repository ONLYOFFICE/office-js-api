# AddRow

Adds a new row to the current table.

## Syntax

expression.AddRow(oCell?, isBefore?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) | If not specified, a new row will be added to the end of the table. Default value is "null". |
| isBefore | Optional | Boolean | Adds a new row before or after the specified cell. If no cell is specified, then this parameter will be ignored. Default value is "false". |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

This example adds a new row to the table.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.AddRow(1, true);
var oRow = oTable.GetRow(1);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("New row was added here.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "AddRow.pptx");
builder.CloseFile();
```