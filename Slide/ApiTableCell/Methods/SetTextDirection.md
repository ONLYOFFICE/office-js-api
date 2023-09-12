# SetTextDirection

Specifies the direction of the text flow for the current table cell.

## Syntax

expression.SetTextDirection(sType);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TextDirection](../../../Enumerations/TextDirection.md) | The type of the text flow direction. |

## Returns

This method doesn't return any data.

## Example

This example specifies the direction of the text flow for the current table cell.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
oRow.SetHeight(30 * 36000);
var oCell = oRow.GetCell(0);
oCell.SetTextDirection("tbrl");
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "SetTextDirection.pptx");
builder.CloseFile();
```