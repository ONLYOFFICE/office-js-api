# AddColumns

Adds the new columns to the current table.

## Syntax

expression.AddColumns(oCell?, nCount, isBefore?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) | The cell after which the new columns will be added. If not specified, the new columns will be added at the end of the table. Default value is "null". |
| nCount | Required | Number | Count of columns to be added. |
| isBefore | Optional | Boolean | Adds the new columns before (false) or after (true) the specified cell. If no cell is specified, then this parameter will be ignored. Default value is "false". |

## Returns

[ApiTable](../ApiTable.md)

## Example

This example adds the new columns to the table.


```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCell = oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new columns were added after this cell.");
oTable.AddColumns(oCell, 2, false);
builder.SaveFile("docx", "AddColumns.docx");
builder.CloseFile();
```