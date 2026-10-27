// Duplicate a group of drawings in a presentation.

// How do I make a copy of a grouped set of objects in a presentation?

// Create an exact duplicate of a group and place it on another slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill, stroke);
shape1.SetPosition(20 * 36000, 30 * 36000);
const shape2 = Api.CreateShape("ellipse", 60 * 36000, 40 * 36000, fill, stroke);
shape2.SetPosition(100 * 36000, 30 * 36000);
const group = Api.CreateGroup([shape1, shape2]);
slide.AddObject(group);

const copyGroup = group.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyGroup);