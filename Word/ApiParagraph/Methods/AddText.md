# AddText

Adds some text to the current paragraph.

## Syntax

```javascript
expression.AddText(sText);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Optional | string | "" | The text that we want to insert into the current document element. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example adds some text to the paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");
```
