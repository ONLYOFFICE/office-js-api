# AddColumns

Adds the new columns to the current table.

## Syntax

expression.AddColumns(nCount, isBefore?);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number | Count of columns to be added. |
| isBefore | Optional | Boolean | Specifies if the new columns will be added before or after the current cell. Default value is "false". |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) &#124; null (returns null if parent table doesn't exist)

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
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new columns were added after this cell.");
oTable.GetCell(0, 0).AddColumns(2, false);
builder.SaveFile("docx", "AddColumns.docx");
builder.CloseFile();
```