# GetParagraph

Returns a paragraph from all the paragraphs that are in the range.

## Syntax

expression.GetParagraph(nPos);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The paragraph position in the range. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) &#124; null (returns null if position is invalid)

## Example

This example shows how to get a paragraph from all the paragraphs that are in the range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oFParagraph = oDocument.GetElement(0);
oFParagraph.AddText("First paragraph");
var oSParagraph = Api.CreateParagraph();
oSParagraph.AddText("Second Paragraph");
oDocument.Push(oSParagraph);
var oRange = oDocument.GetRange(0, 28);
var oRangeParagraph = oRange.GetParagraph(1);
oRangeParagraph.SetBold("true");
builder.SaveFile("docx", "GetParagraph.docx");
builder.CloseFile();
```