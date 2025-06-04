// This example adds a math equation to the document.

// How to add a formula to the document.

// Insert a math equation in proper format.

let doc = Api.GetDocument();
doc.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");
