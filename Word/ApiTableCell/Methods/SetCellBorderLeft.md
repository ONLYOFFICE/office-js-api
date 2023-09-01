# SetCellBorderLeft

Sets the border which will be displayed to the left of the current table cell.<br>Inherited From: [ApiTableCellPr#SetCellBorderLeft](../../ApiTableCellPr/Methods/SetCellBorderLeft.md)

## Syntax

expression.SetCellBorderLeft(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../../Enumerations/BorderType.md) | The border style. |
| nSize | Required | [pt_8](../../../Enumerations/pt_8.md) | The width of the current cell left border measured in eighths of a point. |
| nSpace | Required | [pt](../../../Enumerations/pt.md) | The spacing offset in the left part of the table cell measured in points used to place this border. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example sets the border which will be displayed to the left of the table cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add the left 4 point black border to cell #1:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.SetCellBorderLeft("single", 32, 0, 51, 51, 51);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetCellBorderLeft.docx");
builder.CloseFile();
```