# SetShd

Specifies the shading applied to the contents of the table cell.

## Syntax

expression.SetShd(sType, r, g, b, isAuto?);

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../../Enumerations/ShdType.md) &#124; [ApiFill](../../ApiFill/ApiFill.md) | The shading type applied to the contents of the current table. Can be ShdType or ApiFill. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| isAuto | Optional | Boolean | The true value disables the table cell contents shading. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example specifies the shading applied to the contents of the table cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add add an orange shading to all cells:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetShd("clear", 255, 111, 61, false);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();
```