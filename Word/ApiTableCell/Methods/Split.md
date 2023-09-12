# Split

Splits the cell into a given number of rows and columns.

## Syntax

expression.Split(nRow?, nCol?);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nRow | Optional | Number | Count of rows into which the cell will be split. Default value is "1". |
| nCol | Optional | Number | Count of columns into which the cell will be split. Default value is "1". |

## Returns

[ApiTable](../ApiTable.md) &#124; null (returns null if parent table doesn't exist)

## Example

This example splits the cell into a given number of rows and columns.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCell = oTable.GetCell(0, 0);
oCell.Split(2, 2);
builder.SaveFile("docx", "Split.docx");
builder.CloseFile();
```