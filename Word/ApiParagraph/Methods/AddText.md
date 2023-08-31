# AddText

Adds some text to the current paragraph.

## Syntax

expression.AddText(sText?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Optional | String | The text that we want to insert into the current document element. Default value is "". |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example adds some text to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. Nothing special.");
builder.SaveFile("docx", "AddText.docx");
builder.CloseFile();
```