// Add an equation at the current cursor position in a presentation, replacing the current selection if any.

// If nothing is currently selected or being edited, a new shape is created on the slide to hold the equation.

// Insert an equation written in unicode format into the current presentation.

let presentation = Api.GetPresentation();
let math = presentation.GetMaths().Add("x^2 + y^2 = z^2", "unicode");
