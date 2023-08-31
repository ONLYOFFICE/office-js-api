# AddHyperlink

Adds a hyperlink to the specified range.

## Syntax

expression.AddHyperlink(sLink, sScreenTipText);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLink | Required | String | The link address. |
| sScreenTipText | Required | String | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) &#124; null

## Example

This example adds a hyperlink to the specified range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 9);
oRange.AddHyperlink("https://www.onlyoffice.com/", "Main portal");
builder.SaveFile("docx", "AddHyperlink.docx");
builder.CloseFile();
```