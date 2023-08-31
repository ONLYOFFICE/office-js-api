# InsertInContentControl

Wraps the current table object with a content control.

## Syntax

expression.InsertInContentControl(nType);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nType | Required | Number | Defines if this method returns the ApiBlockLvlSdt (nType === 1) or ApiTable (any value except 1) object. |

## Returns

[ApiTable](../ApiTable.md) &#124; [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example wraps the current table object with a content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oBlockLvlSdt = oTable.InsertInContentControl(1);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "InsertInContentControl.docx");
builder.CloseFile();
```