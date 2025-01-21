# InsertContent

Inserts an array of elements into the current position of the document.

## Syntax

expression.InsertContent(arrContent, isInline, oPr);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrContent | Required | Array.\<[DocumentElement](../../Enumeration/DocumentElement.md)> |  | An array of elements to insert. |
| isInline | Optional | boolean | false | Inline insert or not (works only for the last and the first element and only if it's a paragraph). |
| oPr | Optional | object |  | Specifies that text and paragraph document properties are preserved for the inserted elements.  The object should look like this: {"KeepTextOnly": true}. |

## Returns

boolean

## Example

This example inserts an array of elements into the current position of the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a sample text. It was inserted here.");
oDocument.InsertContent([oParagraph]);
```
