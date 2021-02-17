// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(items) {
  //initiate DOM elements
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  let listItems = [];
  const menuButton = document.querySelector(".menu-button")

  items.forEach(item => {
    const listItem = document.createElement("li");
    listItems.push(listItem);
  });

  //add the class menu
  menu.classList.add("menu");

  //initiate Text on elements
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].textContent = items[i];
  }
  //add listeners
  menuButton.addEventListener("click", event => {
    menu.classList.toggle("menu--open");
  })
  //append the children list
  menu.appendChild(list);
  
  listItems.forEach(item => {
    list.appendChild(item);
  })
  return menu
}
//append everything together
document.querySelector(".header").appendChild(menuMaker(menuItems));