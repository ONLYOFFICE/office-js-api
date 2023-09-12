# ToJSON

Converts the ApiRange object into the JSON object.

## Syntax

expression.ToJSON(bWriteNumberings, bWriteStyles);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | Boolean | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | Boolean | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiRange object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);
var json = oRange.ToJSON(false, true);
var oRangeFromJSON = Api.FromJSON(json);
oDocument.Push(oRangeFromJSON[0]);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```