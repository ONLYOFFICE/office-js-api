# ToJSON

Converts the ApiStyle object into the JSON object.

## Syntax

expression.ToJSON(bWriteNumberings);

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | Boolean | Specifies if the used numberings will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiStyle object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
var json = oTableStyle.ToJSON(false);
var oStyleFromJSON = Api.FromJSON(json);
oStyleFromJSON.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oStyleFromJSON);
oDocument.Push(oTable);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```