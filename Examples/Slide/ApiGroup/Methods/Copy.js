// Duplicate a group of drawings in a presentation.

// How do I make a copy of a grouped set of objects in a presentation?

// Create an exact duplicate of a group and place it on another slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape1.SetPosition(0, 0);
const shape2 = Api.CreateShape("ellipse", 100 * 36000, 100 * 36000, fill, stroke);
shape2.SetPosition(120 * 36000, 0);
slide.AddObject(shape1);
slide.AddObject(shape2);
const group = Api.CreateGroup([shape1, shape2]);
slide.AddObject(group);

const copyGroup = group.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyGroup);
