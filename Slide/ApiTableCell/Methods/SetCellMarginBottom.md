# SetCellMarginBottom

Specifies an amount of space which shall be left between the bottom extent of the cell contents and the border of a specific individual table cell within a table.

## Syntax

expression.SetCellMarginBottom(nValue);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../../Enumerations/twips.md) &#124; null | If this value is null, then default table cell bottom margin shall be used, otherwise override the table cell bottom margin with specified value for the current cell. |

## Returns

This method doesn't return any data.

## Example

This example shows how to specifies an amount of space which shall be left between the bottom extent of the cell contents and the border of a specific individual table cell within a table.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
oCell.SetCellMarginBottom(600);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "SetCellMarginBottom.pptx");
builder.CloseFile();
```