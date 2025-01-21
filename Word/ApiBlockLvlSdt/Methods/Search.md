# Search

Searches for a scope of a content control object. The search results are a collection of ApiRange objects.

## Syntax

expression.Search(sText, isMatchCase);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

Array.\<[ApiRange](../../ApiRange/ApiRange.md)>

## Example

This example shows how to make a search in content control object.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph1 = Api.CreateParagraph();
oParagraph1.AddText("This is the first paragraph in the content control.");
oBlockLvlSdt.AddElement(oParagraph1, 0);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph in the content control.");
oBlockLvlSdt.AddElement(oParagraph2, 1);
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Search("paragraph")[1].SetBold(true);
```
