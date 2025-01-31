# Push

Adds an element to the current paragraph.

## Syntax

```javascript
expression.Push(oElement);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | The document element which will be added at the current position. Returns false if the oElement type is not supported by a paragraph. |

## Returns

boolean

## Example

This example adds a oRun to the paragraph.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is run #0, you must not push it to take effect.");
paragraph.AddElement(run);
paragraph.AddLineBreak();
for (let i = 0; i < 5; ++i) {
	run = Api.CreateRun();
	run.AddText("This is run #" + (i + 1) + ", you must push it to take effect.");
	paragraph.AddLineBreak();
	paragraph.Push(run);
}
```
