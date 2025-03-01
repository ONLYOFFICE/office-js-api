# AddTableOfContents

Adds a table of content to the current document.
💡 Please note that the new table of contents replaces the existing table of contents.

## Syntax

```javascript
expression.AddTableOfContents(oTocPr);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTocPr | Optional | [TocPr](../../Enumeration/TocPr.md) | &#123;&#125; | Table of contents properties. |

## Returns

boolean

## Example

This example adds a table of content to the document.

```javascript editor-docx
let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
newDocumentStyle = doc.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 2");
doc.Push(paragraph);
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);
```
