# FromJSON

Converts the specified JSON object into the Document Builder object of the corresponding type.

## Syntax

expression.FromJSON(sMessage);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sMessage | Required | JSON | The JSON object to convert. |

## Returns

This method doesn't return any data.

## Example

This example transforms paragraph to JSON then restore it from JSON.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a new paragraph");
var json = oParagraph.ToJSON(false, true);
var oParagraphFromJSON = Api.FromJSON(json);
oParagraphFromJSON.SetBold(true);
oDocument.AddElement(0, oParagraphFromJSON);
builder.SaveFile("docx", "FromJSON.docx");
builder.CloseFile();
```