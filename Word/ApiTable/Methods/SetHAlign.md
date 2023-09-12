# SetHAlign

Sets the horizontal alignment to the table.

## Syntax

expression.SetHAlign(sType);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HorAlign](../../../Enumerations/HorAlign.md) | Horizontal alignment type. |

## Returns

Boolean (returns false if param is invalid)

## Example

This example sets the horizontal alignment to the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
oTable.SetHAlign("center");
builder.SaveFile("docx", "SetHAlign.docx");
builder.CloseFile();
```