# AddRows

Adds the new rows to the current table.

## Syntax

expression.AddRows(nCount, isBefore?);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number | Count of rows to be added. |
| isBefore | Optional | Boolean | Specifies if the rows will be added before or after the current row. Default value is "false". |

## Returns

[ApiTable](../ApiTable.md) &#124; null (returns null if parent table doesn't exist)

## Example

This example adds the new rows to the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oRow.GetCell(0).GetContent().GetElement(0).AddText("Second row");
oTable.SetWidth("percent", 100);
oRow.AddRows(1, true);
oDocument.Push(oTable);
builder.SaveFile("docx", "AddRows.docx");
builder.CloseFile();
```