# SetBasedOn

Specifies the reference to the parent style which this style inherits from in the style hierarchy.

## Syntax

expression.SetBasedOn(oStyle);

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) | The parent style which the style inherits properties from. |

## Returns

This method doesn't return any data.

## Example

This example specifies the reference to the parent style which this style inherits from in the style hierarchy.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetBasedOn.docx");
builder.CloseFile();
```