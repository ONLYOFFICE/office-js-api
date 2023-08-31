# SetBackgroundColor

Sets the background color to all cells in the current table.

## Syntax

expression.SetBackgroundColor(r, g, b, bNone);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../../Enumerations/byte.md) | Red color component value. |
| g | Required | [byte](../../../Enumerations/byte.md) | Green color component value. |
| b | Required | [byte](../../../Enumerations/byte.md) | Blue color component value. |
| bNone | Required | Boolean | Defines that background color will not be set. |

## Returns

Boolean

## Example

This example sets the background color to all cells in the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(4, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.SetBackgroundColor(255, 111, 61, false);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetBackgroundColor.docx");
builder.CloseFile();
```