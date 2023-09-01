# SetWidth

Sets the preferred width to the current table.
<br>Tables are created with the [ApiTable#SetWidth](./SetWidth.md) method properties set by default, which always override the [ApiTablePr#SetWidth](./SetWidth.md) method properties. That is why there is no use to try and apply [ApiTablePr#SetWidth](./SetWidth.md). We recommend you to use the [ApiTablePr#SetWidth](./SetWidth.md) method instead.

## Syntax

expression.SetWidth(sType, nValue?);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../../Enumerations/TableWidth.md) | Type of the width value from one of the available width values types. |
| nValue | Optional | Number | The table width value measured in positive integers. Default value is "null". |

## Returns

This method doesn't return any data.

## Example

This example sets the preferred width to the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the table cells to preserve their size:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTablePr.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetWidth.docx");
builder.CloseFile();
```