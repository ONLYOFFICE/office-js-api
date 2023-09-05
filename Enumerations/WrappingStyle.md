# WrappingStyle

The wrapping style type.

## Type

String

## Properties

- "inline" - the object is considered to be a part of the text, like a character, so when the text moves, the object moves as well. In this case the positioning options are - inaccessible. If one of the following styles is selected, the object can be moved independently of the text and positioned on the page exactly:
- "square" - the text wraps the rectangular box that bounds the object.
- "tight" - the text wraps the actual object edges.
- "through" - the text wraps around the object edges and fills in the open white space within the object.
- "topAndBottom" - the text is only above and below the object.
- "behind" - the text overlaps the object.
- "inFront" - the object overlaps the text.

## Example

This example sets wrapping style "squeare" for drawing object.

```javascript
oDrawing.SetWrappingStyle("square");
```