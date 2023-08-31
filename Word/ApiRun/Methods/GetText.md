# GetText

Returns a text from the text run.

## Syntax

expression.GetText(oPr);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oPr | Required | [RunGetTextPr](../../../Enumerations/RunGetTextPr.md) | The resulting string display properties. |

## Returns

String

## Example

This example returns a text from the text run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("\tThis is a text run");
oParagraph.AddElement(oRun);
var sText = oRun.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the specified run: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();
```