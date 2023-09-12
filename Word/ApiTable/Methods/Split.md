# Split

Splits the cell into a given number of rows and columns.

## Syntax

expression.Split(oCell?, nRow?, nCol?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) | The cell which will be split. |
| nRow | Optional | Number | Count of rows into which the cell will be split. Defaulet value is "1". |
| nCol | Optional | Number | Count of columns into which the cell will be split. Defaulet value is "1". |

## Returns

[ApiTable](../ApiTable.md) &#124; null (returns null if can't split)

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
oTable.Split(oCell, 2, 2);
builder.SaveFile("docx", "Split.docx");
builder.CloseFile();
```