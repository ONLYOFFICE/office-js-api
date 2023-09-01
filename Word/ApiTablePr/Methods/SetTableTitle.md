# SetTableTitle

Sets the table title (caption).

## Syntax

expression.SetTableTitle(sTitle);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | String | The table title to be set. |

## Returns

Boolean

## Example

This example sets the table title.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableTitle("Table 1");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table title: " + oTablePr.GetTableTitle());
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableTitle.docx");
builder.CloseFile();
```