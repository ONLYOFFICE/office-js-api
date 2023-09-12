# SetJc

Specifies the alignment of the current table with respect to the text margins in the current section.<br>Inherited From: [ApiTablePr#SetJc](../../ApiTablePr/Methods/SetJc.md)

## Syntax

expression.SetJc(sJcType);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sJcType | Required | [HorAlign](../../../Enumerations/HorAlign.md) | The alignment type used for the current table placement. |

## Returns

This method doesn't return any data.

## Example

This example specifies the alignment of the table with respect to the text margins in the current section.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The table is aligned at the center of the page horizontally.");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 50);
oTable.SetStyle(oTableStyle);
oTable.SetJc("center");
oDocument.Push(oTable);
builder.SaveFile("docx", "SetJc.docx");
builder.CloseFile();
```