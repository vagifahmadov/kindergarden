const XidmetGrid = document.querySelector(".isAxtaran__grid__box");
const xidmetPagination = document.querySelector(".xidmet__pagination");
const cardsPerPage = 6;
const ApiURl = "../data/isAxtaran.json";
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
    <div class="isAxtaran__grid__card">
    <div class="isAxtaran__grid__card__left">
      <img
        src="${card.image}"
        alt=""
      />
    </div>
    <div class="isAxtaran__grid__card__right">
      <h3>${card.AdSoyad}</h3>
      <p>${card.profesiya}</p>
      <div class="isAxtaran__grid__card__right__btns">
        <button class="yellow__btn">Məlumatlar</button>
        <button class="downalad">Yüklə</button>
      </div>
    </div>
  </div>
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
