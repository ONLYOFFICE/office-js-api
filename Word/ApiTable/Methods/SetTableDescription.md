# SetTableDescription

Sets the table description.<br>Inherited From: [ApiTablePr#SetTableDescription](../../ApiTablePr/Methods/SetTableDescription.md)

## Syntax

expression.SetTableDescription(sDescr);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sDescr | Required | String | The table description to be set. |

## Returns

Boolean

## Example

This example sets the table description.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableDescription("Empty table");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table description: " + oTable.GetTableDescription());
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableDescription.docx");
builder.CloseFile();
```