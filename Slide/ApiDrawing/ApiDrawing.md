# ApiDrawing

Represents the ApiDrawing class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "drawing" | Returns a type of the ApiDrawing class. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetClassType](./Methods/GetClassType.md) | "drawing" | Returns the type of the ApiDrawing class. |
| [SetSize](./Methods/SetSize.md) | None | Sets the size of the object (image, shape, chart) bounding box. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets the position of the drawing on the slide. |
| [GetParent](./Methods/GetParent.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| [ApiLayout](../ApiLayout/ApiLayout.md) \| [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent object. |
| [GetParentSlide](./Methods/GetParentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Returns the drawing parent slide. |
| [GetParentLayout](./Methods/GetParentLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Returns the drawing parent slide layout. |
| [GetParentMaster](./Methods/GetParentMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent slide master. |
| [Copy](./Methods/Copy.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Creates a copy of the specified drawing object. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object from the parent. |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | Sets the specified placeholder to the current drawing object. |
| [GetPlaceholder](./Methods/GetPlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) \| null | Returns a placeholder from the current drawing object. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDrawing object into the JSON object. |
| [Select](./Methods/Select.md) | None | Selects the current graphic object. |
