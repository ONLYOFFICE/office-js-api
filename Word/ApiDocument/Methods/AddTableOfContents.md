# AddTableOfContents

Adds a table of content to the current document.
<br>Please note that the new table of contents replaces the existing table of contents.

## Syntax

expression.AddTableOfContents(oTocPr?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oTocPr | Optional | [TocPr](../../../Enumerations/TocPr.md) | Table of contents properties. Default value is "{}". |

## Returns

This method doesn't return any data.

## Example

This example adds a table of content to the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNewDocumentStyle = oDocument.GetStyle("Heading 1");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 1");
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 2");
oDocument.Push(oParagraph);
var oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
builder.SaveFile("docx", "AddTableOfContents.docx");
builder.CloseFile();
```