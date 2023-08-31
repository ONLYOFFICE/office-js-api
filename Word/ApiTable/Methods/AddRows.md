# AddRows

Adds the new rows to the current table.

## Syntax

expression.AddRows(oCell?, nCount, isBefore?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) | The cell after which the new rows will be added. If not specified, the new rows will be added at the end of the table. Default value is "null". |
| nCount | Required | Number | Count of rows to be added. |
| isBefore | Optional | Boolean | Adds the new rows before (false) or after (true) the specified cell. If no cell is specified, then this parameter will be ignored. Default value is "false". |

## Returns

[ApiTable](../ApiTable.md)

## Example

This example adds the new rows to the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
oTable.AddRows(oCell, 2, false);
builder.SaveFile("docx", "AddRows.docx");
builder.CloseFile();
```