# GetUserId

Returns the user ID of the comment author.

## Syntax

expression.GetUserId();

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the user ID of the comment author.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetUserId("uid-1");
var sUserId = aComments[0].GetUserId();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment user ID: " + sUserId);
oDocument.Push(oParagraph);
```
