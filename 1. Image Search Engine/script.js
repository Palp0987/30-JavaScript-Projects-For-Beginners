// ---- access key generated from the unsplah web site ---

const accessKey = "HUpSbRJw01iUEVe9IUawHwadZRBSpIgHSuZnnHWvkog";

// ---- selecting the access key   ------

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector(".search-box");
const searchResult = document.querySelector(".search-result");
const showMoreBtn = document.querySelector(".show-more");

// ------------  the value we are entering in the search bar   ------------

let keyword = "";
let page = 1;

// -----------------   searching function --------------

async function seacrchImages() {
  // ---- to store the value we have entered ------

  keyword = searchBox.value;

  //   --------- get the data from the url ----------

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  // ---- to get the data from the url  ----

  const response = await fetch(url);

  // ---- to make JSON data from the response  ----

  const data = await response.json();

  // ---- to take the result property from JSON data  ----

  const result = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  result.map((result) => {
    const image = document.createElement("img");

    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit" || "keydown", (el) => {
  el.preventDefault();
  page = 1;
  seacrchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  seacrchImages();
});
