//chrome://extensions/
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
// const variable meand it is fix . nor reasign
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
// get leads form local storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// check leads is present in local storage or not.if have return ["www.google.com","faceboo.com" like that] if not return null
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  // grab current link by this
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url); // push url into myLeads
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// in render() i have take one parameter .which take any of array. like myLeads,oldLeads
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
    <a
     target = '_blank' href = '${leads[i]}'>
     ${leads[i]}
    </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}
deleteBtn.addEventListener("dblclick", function () {
  console.log("button clicked");
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});
inputBtn.addEventListener("click", function () {
  // insert the value in empty arry when i clicked on SAVE INPUT button
  myLeads.push(inputEl.value);
  inputEl.value = ""; // clear input field when i clicked save button
  // set the leads in local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
