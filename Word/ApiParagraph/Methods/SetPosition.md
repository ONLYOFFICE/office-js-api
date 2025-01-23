# SetPosition

Specifies an amount by which text is raised or lowered for this paragraph in relation to the default
baseline of the surrounding non-positioned text.

## Syntax

expression.SetPosition(nPosition);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../Enumeration/hps.md) |  | Specifies a positive (raised text) or negative (lowered text) measurement in half-points (1/144 of an inch). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example specifies an amount by which text is raised or lowered for this paragraph in relation to the default baseline of the surrounding non-positioned text.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is a paragraph with the text lowered 15 points (30 half-points).");
doc.Push(paragraph2);
paragraph2.SetPosition(-30);
```
