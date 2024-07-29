# CreateTable

Creates a new table with a specified number of rows and columns.

## Syntax

expression.CreateTable(nCols, nRows);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCols | Required | number |  | Number of columns. |
| nRows | Required | number |  | Number of rows. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

This example creates a 3x3 table and inserts it into the document.

```javascript
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTable.SetWidth("percent", 100);
```
