# UpdateAllFields

Updates all fields in the document.

## Syntax

expression.UpdateAllFields(bBySelection);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bBySelection | Optional | boolean | false | Specifies whether all fields will be updated within the selection. |

## Returns

This method doesn't return any data.

## Example

This example updates all fields in the current document.

```javascript
let oDocument = Api.GetDocument();
let oNewDocumentStyle = oDocument.GetStyle("Heading 1");
let oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 1");
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 2");
oDocument.Push(oParagraph);
let oTocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
oDocument.AddTableOfContents(oTocPr);
oNewDocumentStyle = oDocument.GetStyle("Heading 2");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oNewDocumentStyle);
oParagraph.AddText("Heading 3");
oDocument.AddElement(3, oParagraph);
oDocument.UpdateAllFields();
```
