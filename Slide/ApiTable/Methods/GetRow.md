# GetRow

Returns a row by its index.

## Syntax

expression.GetRow(nIndex);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | Number | The row index (position) in the table. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) &#124; null (returns null if param is invalid)

## Example

This example shows how to get a row by its index.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.AddRow(1, true);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text in the first row.");
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "GetRow.pptx");
builder.CloseFile();
```