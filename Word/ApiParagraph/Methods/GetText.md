# GetText

Returns the paragraph text.

## Syntax

expression.GetText(oPr);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oPr | Required | [ParaGetTextPr](../../../Enumerations/ParaGetTextPr) | The resulting string display properties. |

## Returns

String

## Example

This example shows how to get the paragraph text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("\tThis is just a sample text.");
var sText = oParagraph.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the first paragraph: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();
```