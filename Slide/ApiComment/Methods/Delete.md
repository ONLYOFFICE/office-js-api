# Delete

Deletes the current comment from the document.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example delets the comment from the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].Delete();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The comment to the first paragraph was deleted");
oDocument.Push(oParagraph);
```
