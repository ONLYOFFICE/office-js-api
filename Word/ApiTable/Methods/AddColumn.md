# AddColumn

Adds a new column to the end of the current table.

## Syntax

expression.AddColumn(oCell?, isBefore?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) | If not specified, a new column will be added to the end of the table. Default value is "null". |
| isBefore | Optional | Boolean | Add a new column before or after the specified cell. If no cell is specified, then this parameter will be ignored. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example adds a new column to the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 2x2 table and add a new column, so that it becomes 3x2:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.AddColumn(oTable.GetRow(0).GetCell(1), true);
oDocument.Push(oTable);
builder.SaveFile("docx", "AddColumn.docx");
builder.CloseFile();
```