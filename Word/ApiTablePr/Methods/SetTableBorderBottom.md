# SetTableBorderBottom

Sets the border which will be displayed at the bottom of the current table.

## Syntax

expression.SetTableBorderBottom(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../../Enumerations/BorderType.md) | The border style. |
| nSize | Required | [pt_8](../../../Enumerations/pt_8.md) | The width of the current bottom border measured in eighths of a point. |
| nSpace | Required | [pt](../../../Enumerations/pt.md) | The spacing offset in the bottom part of the table measured in points used to place this border. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example sets the border which will be displayed at the bottom of the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We add the bottom 4 point black border:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
oTable.SetTableLook(true, true, true, true, true, true);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableBorderBottom.docx");
builder.CloseFile();
```