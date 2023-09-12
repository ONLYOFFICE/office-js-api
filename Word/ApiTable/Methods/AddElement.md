# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the cell.

## Syntax

expression.AddElement(oCell, nPos, oElement);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) | The cell where the specified element will be added. |
| nPos | Required | Number | The position in the cell where the specified element will be added. |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The document element which will be added at the current position. |

## Returns

Boolean

## Example

This example adds a paragraph using its position in the cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text in the first cell.");
var oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();
```