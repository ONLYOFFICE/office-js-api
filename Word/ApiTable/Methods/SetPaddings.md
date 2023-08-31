# SetPaddings

Sets the table paddings. If table is inline, then only left padding is applied.

## Syntax

expression.SetPaddings(nLeft, nTop, nRight, nBottom);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | Number | Left padding. |
| nTop | Required | Number | Top padding. |
| nRight | Required | Number | Right padding. |
| nBottom | Required | Number | Bottom padding. |

## Returns

Boolean

## Example

This example sets the table paddings.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
oTable.SetPaddings(10, 10, 5, 5);
builder.SaveFile("docx", "SetPaddings.docx");
builder.CloseFile();
```