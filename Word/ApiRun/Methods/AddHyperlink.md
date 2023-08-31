# AddHyperlink

Adds a hyperlink to the current run.

## Syntax

expression.AddHyperlink(sLink, sScreenTipText);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLink | Required | String | The link address. |
| sScreenTipText | Required | String | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) &#124; null

## Example

This example adds a hyperlink to the run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oRun.AddHyperlink("https://www.onlyoffice.com", "main page");
builder.SaveFile("docx", "AddHyperlink.docx");
builder.CloseFile();
```