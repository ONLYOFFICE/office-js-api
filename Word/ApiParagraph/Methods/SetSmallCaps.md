# SetSmallCaps

Specifies that all the small letter characters in this paragraph are formatted for display only as their capital
letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

expression.SetSmallCaps(isSmallCaps);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean |  | Specifies if the contents of the current paragraph are displayed capitalized two points smaller or not. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example specifies that all the small letter characters in this paragraph are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the font set to small capitalized letters.");
oParagraph.SetSmallCaps(true);
```
