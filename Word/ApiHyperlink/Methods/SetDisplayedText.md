# SetDisplayedText

Sets the hyperlink display text.

## Syntax

expression.SetDisplayedText(sDisplay);

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sDisplay | Required | String | The text to display the hyperlink. |

## Returns

Boolean

## Example

This example sets the hyperlink display text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
oHyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");
builder.SaveFile("docx", "SetDisplayedText.docx");
builder.CloseFile();
```