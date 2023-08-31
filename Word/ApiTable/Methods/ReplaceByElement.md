# ReplaceByElement

Replaces the current table with a new element.

## Syntax

expression.ReplaceByElement(oElement);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The element to replace the current table with. |

## Returns

Boolean

## Example

This example replaces the current table with a paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.AddElement(0, oTable);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
oTable.SetStyle(oTableStyle);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The table was replaced with the current paragraph.");
oTable.ReplaceByElement(oParagraph);
builder.SaveFile("docx", "ReplaceByElement.docx");
builder.CloseFile();
```