# BorderType

A border type.

## Type

String

## Properties

- "none" - no border will be added to the created element or the selected element side.
- "single" - a single border will be added to the created element or the selected element side.

## Example

The paragraph will have a single 3 point wide green bottom border with a zero offset from the bottom paragraph edge

```javascript
oParaPr.SetBottomBorder("single", 24, 0, 0, 255, 0);
```