# GetContent

Returns an array of document elements from the current ApiDocumentContent object.<br>Inherited From: [ApiDocumentContent#GetContent](../../ApiDocumentContent/Methods/GetContent.md)

## Syntax

expression.GetContent(bGetCopies);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bGetCopies | Required | Boolean | Specifies if the copies of the document elements will be returned or not. |

## Returns

Array<[DocumentElement](../../../Enumerations/DocumentElement.md)>

## Example

This example shows how to get an array of document elements from the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This paragraph is the first document element.");
oDocument.AddElement(0, oParagraph);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.AddElement(1, oTable);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This table is the second document element.");
var oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This block text content control is the third document element.");
oDocument.AddElement(2, oBlockLvlSdt);
var aDocElements = oDocument.GetContent(false);
aDocElements[0].SetBold(true);
aDocElements[1].SetBackgroundColor(255, 111, 61, false);
aDocElements[2].Search("block text content control")[0].SetBold(true);
builder.SaveFile("docx", "GetContent.docx");
builder.CloseFile();
```