// Row 1

// Created elements and set their classes and attributes

var container = document.getElementById("container");
var row1 = document.createElement("div");
var col1 = document.createElement("div");
var col2 = document.createElement("div");
var col3 = document.createElement("div");
var col4 = document.createElement("div");
var h1 = document.createElement("h1");
var h4 = document.createElement("h4");
var p = document.createElement("p");

container.className = "container";
row1.className = "row justify-content-md-around align-items-md-center";
col1.className = "col text-center";
col2.className = "col text-center";
col3.className = "col text-center";
col4.className = "col text-center";

// Set their styling

row1.style.height = "100px";
row1.style.backgroundColor = "dodgerblue";
// col1.style.marginLeft = "30px";

h1.style.color = "white";
h4.style.color = "white";
p.style.color = "white";
h1.style.margin = "auto";
h4.style.margin = "auto";
p.style.margin = "auto";
p.style.fontSize = "24px";
row1.style.padding = "20px";
row1.style.marginBottom = "20px";

// Change their content

h1.textContent = "HighOnCoding";
h4.textContent = "Home";
p.textContent = "Categories";

// Append them into DOM

col1.appendChild(h1);
col2.appendChild(h4);
col3.appendChild(p);
row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
row1.appendChild(col4);
container.appendChild(row1);

// ------------------------------------------------------------------------------------------

// Row 2

// Created elements and set their classes and attributes

var row2 = document.createElement("div");
var h22 = document.createElement("h2");
var p2 = document.createElement("p");

row2.className = "row";

// Set their styling

row2.style.width = "95%";
row2.style.backgroundColor = "lightgray";
row2.style.paddingTop = "20px";
row2.style.paddingLeft = "20px";
row2.style.paddingRight = "20px";
row2.style.marginLeft = "auto";
row2.style.marginRight = "auto";
row2.style.marginBottom = "20px";
h22.style.color = "#585858";
h22.style.marginBottom = "40px";

// Change their content

h22.textContent = "Curse of the Current Reviews"
p2.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage.  Their choice is dependent on three important factors: price, screenshot, and reviews.";

// Append them into DOM

row2.append(h22, p2);
container.appendChild(row2);

// ------------------------------------------------------------------------------------------

// Row 3

// Created elements and set their classes and attributes

var row3 = document.createElement("div");
var h32 = document.createElement("h2");
var p3 = document.createElement("p");

row3.className = "row";

// Set their styling

row3.style.width = "93%";
row3.style.marginLeft = "auto";
row3.style.marginRight = "auto";
row3.style.paddingRight = "20px";
h32.style.color = "dodgerblue";
h32.style.marginBottom = "20px";
p3.style.marginBottom = "0px";

// Change their content

h32.textContent = "Hello WatchKit";
p3.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.  The WatchKit framework enable the developers to create Apple Watch applications.  In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";

// Append them into DOM

row3.appendChild(h32);
row3.appendChild(p3);
container.appendChild(row3);

// ------------------------------------------------------------------------------------------

// Row 4

// Created elements and set their classes and attributes

row4 = document.createElement("div");
col41 = document.createElement("div");
col42 = document.createElement("div");
col43 = document.createElement("div");
h51 = document.createElement("h5");
h52 = document.createElement("h5");

row4.className = "row";
col41.className = "col-2"
col42.className = "col-2"
col43.className = "col"

// Set their styling

row4.style.backgroundColor = "orange";
row4.style.width = "93%";
row4.style.height = "30px";
row4.style.marginLeft = "auto";
row4.style.marginRight = "auto";
row4.style.marginBottom = "20px";
h51.style.color = "white";
h52.style.color = "white";

// Change their content

h51.textContent = "12 comments";
h52.textContent = "124 likes";

// Append them into DOM

col41.appendChild(h51);
col42.appendChild(h52);
row4.appendChild(col41);
row4.appendChild(col42);
row4.appendChild(col43);
container.append(row4);

// ------------------------------------------------------------------------------------------

// Row 5

// Created elements and set their classes and attributes

var row5 = document.createElement("div");
var h52 = document.createElement("h2");
var p5 = document.createElement("p");

row5.className = "row";

// Set their styling

row5.style.width = "93%";
row5.style.marginLeft = "auto";
row5.style.marginRight = "auto";
row5.style.paddingRight = "20px";
h52.style.color = "dodgerblue";
h52.style.marginBottom = "20px";
p5.style.marginBottom = "0px";

// Change their content

h52.textContent = "Introduction to Swift";
p5.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications.  Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolv around the basic concepts in the Swift language and how you can get started.";

// Append them into DOM

row5.appendChild(h52);
row5.appendChild(p5);
container.appendChild(row5);

// ------------------------------------------------------------------------------------------

// Row 6

// Created elements and set their classes and attributes

row6 = document.createElement("div");
col61 = document.createElement("div");
col62 = document.createElement("div");
col63 = document.createElement("div");
h51 = document.createElement("h5");
h52 = document.createElement("h5");

row6.className = "row";
col61.className = "col-2"
col62.className = "col-2"
col63.className = "col"

// Set their styling

row6.style.backgroundColor = "orange";
row6.style.width = "93%";
row6.style.height = "30px";
row6.style.marginLeft = "auto";
row6.style.marginRight = "auto";
row6.style.marginBottom = "20px";
h51.style.color = "white";
h52.style.color = "white";

// Change their content

h51.textContent = "15 comments";
h52.textContent = "45 likes";

// Append them into DOM

col61.appendChild(h51);
col62.appendChild(h52);
row6.appendChild(col61);
row6.appendChild(col62);
row6.appendChild(col63);
container.append(row6);