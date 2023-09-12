# GetAllTablesOnPage

Returns a collection of tables on a given absolute page.
<br>This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page.

## Syntax

expression.GetAllTablesOnPage(nPage);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPage | Required | Number | Page number. If it is not specified, an empty array will be returned. |

## Returns

Array<[ApiTable](../../ApiTable/ApiTable.md)>

## Example

This example shows how to get a collection of tables on a given absolute page.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
oBlockLvlSdt.AddElement(oTable1, 0);
var oTable2 = Api.CreateTable(2, 2);
oTable2.SetWidth("percent", 100);
oTable2.SetStyle(oTableStyle);
oBlockLvlSdt.AddElement(oTable2, 1);
oDocument.AddElement(0, oBlockLvlSdt);
var aTables = oBlockLvlSdt.GetAllTablesOnPage(0);
var oCell = aTables[0].GetRow(1).GetCell(0);
aTables[0].RemoveRow(oCell);
builder.SaveFile("docx", "GetAllTablesOnPage.docx");
builder.CloseFile();
```