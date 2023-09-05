# ToJSON

Converts the ApiBlockLvlSdt object into the JSON object.

## Syntax

expression.ToJSON(bWriteNumberings, bWriteStyles);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | Boolean | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | Boolean | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiBlockLvlSdt object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.SetAlias("№1");
var json = oBlockLvlSdt.ToJSON(false, true);
var oBlockLvlSdtFromJSON = Api.FromJSON(json);
oBlockLvlSdtFromJSON.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdtFromJSON);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```