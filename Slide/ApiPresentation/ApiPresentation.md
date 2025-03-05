# ApiPresentation

Represents the ApiPresentation class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "presentation" | Returns a type of the ApiPresentation class. |
| [GetCurSlideIndex](./Methods/GetCurSlideIndex.md) | number | Returns the index for the current slide. |
| [GetSlideByIndex](./Methods/GetSlideByIndex.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | Returns a slide by its position in the presentation. |
| [GetCurrentSlide](./Methods/GetCurrentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | Returns the current slide. |
| [AddSlide](./Methods/AddSlide.md) | None | Appends a new slide to the end of the presentation. |
| [SetSizes](./Methods/SetSizes.md) | None | Sets the size to the current presentation. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | None | Creates a new history point. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | None | Replaces the current image with an image specified. |
| [SetLanguage](./Methods/SetLanguage.md) | boolean | Specifies the languages which will be used to check spelling and grammar (if requested). |
| [GetSlidesCount](./Methods/GetSlidesCount.md) | number | Returns a number of slides. |
| [GetAllSlides](./Methods/GetAllSlides.md) | [ApiSlide](../ApiSlide/ApiSlide.md)[] | Returns an array of all slides from the current presentation. |
| [GetMastersCount](./Methods/GetMastersCount.md) | number | Returns a number of slide masters. |
| [GetAllSlideMasters](./Methods/GetAllSlideMasters.md) | [ApiMaster](../ApiMaster/ApiMaster.md)[] | Returns an array of all slide masters from the current presentation. |
| [GetMaster](./Methods/GetMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns a slide master by its position in the presentation. |
| [AddMaster](./Methods/AddMaster.md) | boolean | Adds the slide master to the presentation slide masters collection. |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | Applies a theme to all the slides in the presentation. |
| [RemoveSlides](./Methods/RemoveSlides.md) | boolean | Removes a range of slides from the presentation. Deletes all the slides from the presentation if no parameters are specified. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the presentation width in English measure units. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the presentation height in English measure units. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiPresentation object into the JSON object. |
| [SlidesToJSON](./Methods/SlidesToJSON.md) | JSON[] | Converts the slides from the current ApiPresentation object into the JSON objects. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current presentation. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information: **Application** - the application the document has been created with. **CreatedRaw** - the date and time when the file was created. **Created** - the parsed date and time when the file was created. **LastModifiedRaw** - the date and time when the file was last modified. **LastModified** - the parsed date and time when the file was last modified. **LastModifiedBy** - the name of the user who has made the latest change to the document. **Autrors** - the persons who has created the file. **Title** - this property allows you to simplify your documents classification. **Tags** - this property allows you to simplify your documents classification. **Subject** - this property allows you to simplify your documents classification. **Comment** - this property allows you to simplify your documents classification. |
