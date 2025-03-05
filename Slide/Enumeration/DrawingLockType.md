# DrawingLockType

This type specifies the type of drawing lock.

## Type

Enumeration

## Values

- "noGrp"
- "noUngrp"
- "noSelect"
- "noRot"
- "noChangeAspect"
- "noMove"
- "noResize"
- "noEditPoints"
- "noAdjustHandles"
- "noChangeArrowheads"
- "noChangeShapeType"
- "noDrilldown"
- "noTextEdit"
- "noCrop"
- "txBox"


## Example

This example shows how to get the lock value for the specified lock type of a drawing.

```javascript editor-pptx
let lockValue = drawing.GetLockValue("noSelect");
```
