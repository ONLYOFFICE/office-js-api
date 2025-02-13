# GetClassType

Returns a type of the ApiInlineLvlSdt class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"inlineLvlSdt"

## Example

This example gets a class type and inserts it into the document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let classType = inlineLvlSdt.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class Type = " + classType);
```
