# SetPosition

Specifies an amount by which text is raised or lowered for this paragraph in relation to the defaultbaseline of the surrounding non-positioned text.

## Syntax

expression.SetPosition(nPosition);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../Enumeration/hps.md) |  | Specifies a positive (raised text) or negative (lowered text)measurement in half-points (1/144 of an inch). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example specifies an amount by which text is raised or lowered for this paragraph in relation to the default baseline of the surrounding non-positioned text.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. ");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is a paragraph with the text lowered 15 points (30 half-points).");
oDocument.Push(oParagraph2);
oParagraph2.SetPosition(-30);
```
