# RemoveRow

Removes a table row with the specified cell.

## Syntax

expression.RemoveRow(oCell);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) | The table cell from the row which will be removed. |

## Returns

Boolean

## Example

This example removes a table row with the specified cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and remove one row (the second one), so that it becomes 3x2:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetRow(1).GetCell(0);
oTable.RemoveRow(oCell);
oDocument.Push(oTable);
builder.SaveFile("docx", "RemoveRow.docx");
builder.CloseFile();
```