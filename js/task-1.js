const categoryElement = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryElement.length}`);

categoryElement.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("ul li").length}`);
});
