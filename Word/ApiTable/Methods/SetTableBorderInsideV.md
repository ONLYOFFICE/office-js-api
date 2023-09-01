# SetTableBorderInsideV

Specifies the border which will be displayed on all vertical table cell borders which are not on the outmost edge of the parent table (all vertical borders which are not the leftmost or rightmost borders).<br>Inherited From: [ApiTablePr#SetTableBorderInsideV](../../ApiTablePr/Methods/SetTableBorderInsideV.md)

## Syntax

expression.SetTableBorderInsideV(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../../Enumerations/BorderType.md) | The border style. |
| nSize | Required | [pt_8](../../../Enumerations/pt_8.md) | The width of the current border measured in eighths of a point. |
| nSpace | Required | [pt](../../../Enumerations/pt.md) | The spacing offset in the vertical table cells of the table measured in points used to place this border. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example specifies the border which will be displayed on all vertical table cell borders which are not on the outmost edge of the parent table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add the inside vertical 4 point orange borders:");
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableBorderTop("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderLeft("single", 4, 0,51, 51, 51);
oTable.SetTableBorderRight("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderInsideV("single", 32, 0, 255, 111, 61);
oTable.SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableBorderInsideV.docx");
builder.CloseFile();
```