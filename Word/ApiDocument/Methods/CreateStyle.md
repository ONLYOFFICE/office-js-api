# CreateStyle

Creates a new style with the specified type and name. If there is a style with the same name it will be replaced with a new one.

## Syntax

expression.CreateStyle(sStyleName, sType?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sStyleName | Required | String | The name of the style which will be created. |
| sType | Optional | [StyleType](../../../Enumerations/StyleType.md) | The document element which the style will be applied to. Default value is "paragraph". |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example creates a new style with the "Heading 1" type and "paragraph" name.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oHeading1Style = oDocument.CreateStyle("Heading 1", "paragraph");
var oParaPr = oHeading1Style.GetParaPr();
oParaPr.SetKeepNext(true);
oParaPr.SetKeepLines(true);
oParaPr.SetSpacingAfter(240);
var oTextPr = oHeading1Style.GetTextPr();
oTextPr.SetColor(0xff, 0x68, 0x00, false);
oTextPr.SetFontSize(40);
oTextPr.SetFontFamily("Calibri Light");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oHeading1Style);
oParagraph.AddText("This is a heading with a style created above");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a text.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetStyle.docx");
builder.CloseFile();
```