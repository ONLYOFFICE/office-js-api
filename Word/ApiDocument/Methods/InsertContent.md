# InsertContent

Inserts an array of elements into the current position of the document.

## Syntax

expression.InsertContent(arrContent, isInline?, oPr?);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| arrContent | Required | Array<[DocumentElement](../../../Enumerations/DocumentElement.md)> | An array of elements to insert. |
| isInline | Optional | Boolean | Inline insert or not (works only for the last and the first element and only if it's a paragraph). Default value is "false". |
| oPr | Optional | Object | Specifies that text and paragraph document properties are preserved for the inserted elements. The object should look like this: {"KeepTextOnly": true}. Default value is "undefined". |

## Returns

Boolean

## Example

This example inserts an array of elements into the current position of the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text. It was inserted here.");
oDocument.InsertContent([oParagraph]);
builder.SaveFile("docx", "InsertContent.docx");
builder.CloseFile();
```