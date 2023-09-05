# SetTime

Sets the timestamp of the comment creation in the current time zone format.

## Syntax

expression.SetTime(nTimeStamp);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | String &#124; Number | The timestamp of the comment creation in the current time zone format. |

## Returns

[ApiComment](../ApiComment.md)

## Example

This example sets the timestamp of the comment creation in the current time zone format.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text");
Api.AddComment(oParagraph, "comment", "John Smith");
var aComments = oDocument.GetAllComments();
aComments[0].SetTime("1672247153658");
var sTime = aComments[0].GetTime();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Comment creation timestamp: " + sTime);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTime.docx");
builder.CloseFile();
```