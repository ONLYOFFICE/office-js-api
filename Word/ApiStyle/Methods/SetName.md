# SetName

Sets a name of the current style.

## Syntax

expression.SetName(sStyleName);

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sStyleName | Required | String | The name which will be used for the current style. |

## Returns

This method doesn't return any data.

## Example

This example sets a name of the current style.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
oTableStyle.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var sTableStyleName = oTableStyle.GetName();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table style name = " + sTableStyleName);
builder.SaveFile("docx", "SetName.docx");
builder.CloseFile();
```