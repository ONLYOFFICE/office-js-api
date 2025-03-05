# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

```javascript
expression.SetSpacing(nSpacing);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | Required | [twips](../../Enumeration/twips.md) |  | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets the text spacing measured in twentieths of a point.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.SetSpacing(2);
```
