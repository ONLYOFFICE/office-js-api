# GetElementsCount

Returns a number of elements in the current inline text content control. The text content \ncontrol is created with one text run present in it by default, so even without any \nelement added this method will return the value of '1'.

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a number of elements in the inline text content control.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
paragraph.AddLineBreak();
let inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddText("Number of elements in inlineLvlSdt (before adding anything) = " + inlineLvlSdtCount);
let run = Api.CreateRun();
run.AddText("This is an inline text content control. ");
inlineLvlSdt.AddElement(run, 0);
paragraph.AddLineBreak();
inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddText("Number of elements in inlineLvlSdt (after adding one element) = " + inlineLvlSdtCount);
let run1 = Api.CreateRun();
run1.AddText("One more element of the inline text content control.");
inlineLvlSdt.AddElement(run1, 1);
inlineLvlSdtCount = inlineLvlSdt.GetElementsCount();
paragraph.AddLineBreak();
paragraph.AddText("Number of elements in inlineLvlSdt (after adding one more element) = " + inlineLvlSdtCount);
```
