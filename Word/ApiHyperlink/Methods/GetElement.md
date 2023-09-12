# GetElement

Returns the hyperlink element using the position specified.

## Syntax

expression.GetElement(nPos);

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The position where the element which content we want to get must be located. |

## Returns

[ParagraphContent](../../../Enumerations/ParagraphContent.md) &#124; null

## Example

This example shows how to get the hyperlink element using the position specified.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("Api Document Builder.");
oParagraph.AddElement(oRun1, 0);
var oRun2 = Api.CreateRun();
oRun2.AddText(" ONLYOFFICE for developers");
oParagraph.AddElement(oRun2, 1);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var oElement = oHyperlink.GetElement(1);
oParagraph = Api.CreateParagraph();
oParagraph.AddElement(oElement);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetElement.docx");
builder.CloseFile();
```