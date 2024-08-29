# RemoveReplies

Removes the specified comment replies.

## Syntax

expression.RemoveReplies(nPos, nCount, bRemoveAll);

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | false | The position of the first comment reply to remove. |
| nCount | Optional | Number | true | A number of comment replies to remove. |
| bRemoveAll | Optional | boolean | false | Specifies whether to remove all comment replies or not. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example



```javascript
var oPresentation = Api.GetPresentation();
Api.pluginMethod_AddComment({"UserName": "John Smith", "Text": "Comment 1"});
var arrComments = oPresentation.GetAllComments();
arrComments[0].AddReply("Reply 1", "John Smith", "uid-1");
arrComments[0].AddReply("Reply 2", "John Smith", "uid-1");
arrComments[0].RemoveReplies(0, 1, false);
var oReply = arrComments[0].GetReply(0);
var oSlide1 = oPresentation.GetSlideByIndex(0);
oSlide1.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Comment replies count: " + arrComments[0].GetRepliesCount());
oSlide1.AddObject(oShape);
```
