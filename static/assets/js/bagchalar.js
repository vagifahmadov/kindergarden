const bagchaMainFilter = document.querySelector(".bagcha_main_filter");
const svgClass = document.querySelector(".svgclass");
const bagchaMainHeaderRight = document.querySelector(".bagcha_main_header_right");

let isRotated = false;

bagchaMainHeaderRight.addEventListener("click", () => {
  bagchaMainFilter.classList.toggle("active");

  if (isRotated) {
    svgClass.style.transform = "rotate(0deg)"; // Reset rotation
    svgClass.style.transition = "all 1s ease";
  } else {
    svgClass.style.transform = "rotate(180deg)"; // Rotate 180 degrees
    svgClass.style.transition = "all 1s ease";
  }

  isRotated = !isRotated; // Toggle the rotation state
});

const XidmetGrid = document.querySelector(".bagchalar_about");
const xidmetPagination = document.querySelector(".xidmet__pagination");
const cardsPerPage = 6;
const ApiURl = "../data/bahcalar.json";
let xidmetData = [];


function hideContainerAfterDelay() {
  setTimeout(() => {
    const loading = document.querySelector(".loading");
    loading.style.transition = "opacity 0.5s ease";
    loading.style.opacity = "0";
    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }, 3000);
}

function fetchDataAndRenderCards() {
  fetch(ApiURl)
    .then((resp) => resp.json())
    .then((data) => {
      xidmetData = data;
      console.log(data)
      showCards(0);
      createPaginationButtons();
      hideContainerAfterDelay();
    });
}


function showCards(skip) {
  XidmetGrid.innerHTML = "";
  const endIndex = Math.min(skip + cardsPerPage, xidmetData.length);
  for (let i = skip; i < endIndex; i++) {
    const card = xidmetData[i];
    XidmetGrid.innerHTML += `
        <a href="./bagcaCardInfo.html?id=${encodeURIComponent(card.id)}">
        <div class="bagcha_about_container">
          <img src="${card.loqoImg}" alt="...">
          <h2>${card.name}</h2>
          <p>${card.place}</p>
        </div>
        </a>
    `;
  }
  scrollToTop();
}

function createPaginationButtons() {
  const totalPages = Math.ceil(xidmetData.length / cardsPerPage);
  xidmetPagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.classList.add("xidmet__pagination__btn");
    button.innerText = i;
    if (i === 1) {
      button.classList.add("xidmet__pagination__btn_active");
    }
    button.addEventListener("click", function () {
      const skip = (i - 1) * cardsPerPage;
      showCards(skip);
      updatePaginationButtons(i);
    });
    xidmetPagination.appendChild(button);
  }
}

function updatePaginationButtons(activePage) {
  const allButtons = document.querySelectorAll(".xidmet__pagination__btn");
  allButtons.forEach((btn, index) => {
    if (index + 1 === activePage) {
      btn.classList.add("xidmet__pagination__btn_active");
    } else {
      btn.classList.remove("xidmet__pagination__btn_active");
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

fetchDataAndRenderCards();
