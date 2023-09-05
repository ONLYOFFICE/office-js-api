# CreateTable

Creates a new table with a specified number of rows and columns.

## Syntax

expression.CreateTable(nCols, nCols);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nCols | Required | Number | Number of columns. |
| nCols | Required | Number | Number of rows. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

This example creates a 3x3 table and inserts it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTable.SetWidth("percent", 100);
builder.SaveFile("docx", "CreateTable.docx");
builder.CloseFile();
```