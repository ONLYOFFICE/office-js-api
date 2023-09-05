# CreateHyperlink

Description

## Syntax

expression.CreateHyperlink(sLink, sDisplay, sScreenTipText);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sLink | Required | String | The hyperlink address. |
| sDisplay | Required | String | The text to display the hyperlink. |
| sScreenTipText | Required | String | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

This example creates hyperlink and pastes it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oHyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
var sType = oHyperlink.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oHyperlink, 0);
oParagraph.AddLineBreak();
oParagraph.AddText("Class type of the created object: " + sType);
builder.SaveFile("docx", "CreateHyperlink.docx");
builder.CloseFile();
```