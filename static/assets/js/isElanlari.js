const XidmetGrid = document.querySelector(".isElanlar__grid");
const xidmetPagination = document.querySelector(".xidmet__pagination");
const cardsPerPage = 6;
const ApiURl = "../data/isElanlar.json";
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
    <div class="isElanlar__grid__card">
    <a href="./isElanlariCard.html?id=${encodeURIComponent(card.id)}">
        <div class="isElanlar__grid__card__top">
          <h3>Baxca müəlliməsi</h3>
        </div>
        <div class="isElanlar__grid__card__box">
          <div class="isElanlar__grid__card__box__top">
            <h4>“${card.place}”</h4>
            <p>İş təcrübəsi: ${card.isTecrubesi}</p>
            <p>Təhsil: ${card.tehsil}</p>
            <p>Yaş: ${card.yas}</p>
            <p>İş qrafiki: ${card.isQradik}</p>
            <p>Əmək haqqı: ${card.emekHaqi}azn</p>
          </div>
          <div class="isElanlar__grid__card__box__body">
            <h4>“Tələblər”</h4>
            <p>
             ${card.melumat}
            </p>
          </div>
          <div class="isElanlar__grid__card__box__time">
            <p>Elan müddəti: ${card.elanMudeti}</p>
          </div>
        </div>
        <div class="isElanlar__grid__card__btn">
          <a href="#"><button class="yellow__btn">Müraciət edin</button></a>
        </div>
        </a>
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
