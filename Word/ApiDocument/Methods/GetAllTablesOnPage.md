# GetAllTablesOnPage

Returns a collection of tables on a given absolute page.
<br>This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page.

## Syntax

expression.GetAllTablesOnPage(nPage);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPage | Required | Number | The page number. |

## Returns

Array<[ApiTable](../../ApiTable/ApiTable.md)>

## Example

This example shows how to get a collection of tables on a given absolute page.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 50);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var arrTables = oDocument.GetAllTablesOnPage(0);
var oRow_1 = arrTables[0].GetRow(0);
oRow_1.Remove();
builder.SaveFile("docx", "GetAllTablesOnPage.docx");
builder.CloseFile();
```