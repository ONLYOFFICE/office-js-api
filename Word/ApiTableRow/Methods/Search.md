# Search

Searches for a scope of a table row object. The search results are a collection of ApiRange objects.

## Syntax

expression.Search(sText, isMatchCase?);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | Search string. |
| isMatchCase | Optional | Boolean | Case sensitive or not. Default value is "false". |

## Returns

Array<[ApiRange](../../ApiRange/ApiRange.md)>

## Example

This example shows how to make search in table cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oRow.GetCell(0).GetContent().GetElement(0).AddText("text");
oRow.GetCell(1).GetContent().GetElement(0).AddText("text");
oRow.GetCell(2).GetContent().GetElement(0).AddText("text");
oDocument.Push(oTable);
var aRowSearch = oRow.Search("tex", true);
aRowSearch[1].SetBold("true");
builder.SaveFile("docx", "Search.docx");
builder.CloseFile();
```