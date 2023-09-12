# AddHyperlink

Adds a hyperlink to a paragraph.

## Syntax

expression.AddHyperlink(sLink, sScreenTipText?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLink | Required | String | The link address. |
| sScreenTipText | Optional | String | The screen tip text. Default value is "". |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) &#124; null (returns null if params are invalid)

## Example

This example adds a hyperlink to a paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");
builder.SaveFile("docx", "AddHyperlink.docx");
builder.CloseFile();
```