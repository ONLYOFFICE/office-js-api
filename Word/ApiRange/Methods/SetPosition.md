# SetPosition

Specifies the amount by which text is raised or lowered for the current Range in relation to the default\nbaseline of the surrounding non-positioned text.

## Syntax

```javascript
expression.SetPosition(nPosition);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../Enumeration/hps.md) |  | Specifies a positive (raised text) or negative (lowered text)\nmeasurement in half-points (1/144 of an inch). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example specifies the amount by which text is raised or lowered for the Range in relation to the default baseline of the surrounding non-positioned text.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the text raised 5 points (10 half-points).");
let range = doc.GetRange(22, 75);
range.SetPosition(10);
```
