# CreateSection

Creates a new document section which ends at the specified paragraph. Allows to set local parameters to the current section - page size, footer, header, columns, etc.

## Syntax

expression.CreateSection(oParagraph);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oParagraph | Required | [ApiParagraph](../../ApiParagraph/ApiParagraph.md) | The paragraph after which a new document section will be inserted. Paragraph must be in a document. |

## Returns

[ApiSection](../../ApiSection/ApiSection.md) &#124; null

## Example

This example creates a new document section which ends at the specified paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("Scroll down to see the new section.");
var oSection = oDocument.CreateSection(oParagraph);
oSection.SetEqualColumns(1, 720);
oSection.SetPageSize(12240, 15840);
oSection.SetPageMargins(1440, 1440, 1440, 1440);
oSection.SetHeaderDistance(720);
oSection.SetFooterDistance(576);
oParagraph = Api.CreateParagraph();
oParagraph.SetSpacingBefore(100, true);
oParagraph.SetSpacingAfter(360);
oParagraph.AddText("This is a paragraph in a new section");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "CreateSection.docx");
builder.CloseFile();
```