# RemoveElement

Removes an element using the position specified.💡 If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph),a new empty run is automatically created. If you want to addcontent to this run, use the &#123;@link ApiParagraph#GetElement&#125; method.

## Syntax

```javascript
expression.RemoveElement(nPos);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element position which we want to remove from the paragraph. |

## Returns

This method doesn't return any data.

## Example

This example removes an element using the position specified.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("This is the first paragraph element. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the second paragraph element. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the third paragraph element (it will be removed from the paragraph and we will not see it). ");
paragraph.AddElement(run);
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("This is the fourth paragraph element - it became the third, because we removed the previous run from the paragraph. ");
paragraph.AddElement(run);
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Please note that line breaks are not counted into paragraph elements!");
paragraph.AddElement(run);
paragraph.RemoveElement(2);
```
