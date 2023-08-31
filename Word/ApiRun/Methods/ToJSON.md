# ToJSON

Converts the ApiRun object into the JSON object.

## Syntax

expression.ToJSON(bWriteStyles);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | Boolean | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiRun object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run");
var json = oRun.ToJSON(true);
var oRunFromJSON = Api.FromJSON(json);
oRunFromJSON.SetBold(true);
oParagraph.AddElement(oRunFromJSON);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```