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
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 2x2 table and add a new row, so that it becomes 2x3:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.AddRow(oTable.GetRow(1).GetCell(0), true);
oDocument.Push(oTable);
builder.SaveFile("docx", "AddRow.docx");
builder.CloseFile();
```