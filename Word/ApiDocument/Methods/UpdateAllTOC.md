# UpdateAllTOC

Updates all tables of contents in the current document.

## Syntax

expression.UpdateAllTOC(bOnlyPageNumbers?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bOnlyPageNumbers | Optional | Boolean | Specifies that only page numbers will be updated. Default value is "false". |

## Returns

This method doesn't return any data.

## Example

This example updates all tables of contents in the current document.

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
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 2");
oDocument.AddElement(3, oParagraph);
oDocument.UpdateAllTOC(false);
builder.SaveFile("docx", "UpdateAllTOC.docx");
builder.CloseFile();
```