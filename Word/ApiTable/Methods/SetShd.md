# SetShd

Specifies the shading which shall be applied to the extents of the current table.<br>Inherited From: [ApiTablePr#SetShd](../../ApiTablePr/Methods/SetShd.md)

## Syntax

expression.SetShd(sType, r, g, b, isAuto?);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../../Enumerations/ShdType.md) &#124; [ApiFill](../../ApiFill/ApiFill.md) | The shading type applied to the extents of the current table. |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| isAuto | Optional | boolean | The true value disables the SetShd method use. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example specifies the shading which shall be applied to the extents of the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We added an orange shading to the table:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.SetShd("clear", 255, 111, 61, false);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetShd.docx");
builder.CloseFile();
```