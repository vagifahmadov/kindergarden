const bahcaDbinfo = document.querySelector(".bahcaDbinfo");

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

const ApiURl = "../data/bahcalar.json";
let xidmetData = [];

fetch(ApiURl)
  .then((resp) => resp.json())
  .then((data) => {
    xidmetData = data;
    hideContainerAfterDelay();
    showCard();
  });

function showCard() {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");
  const item = xidmetData.find((item) => item.id == itemId);

  bahcaDbinfo.innerHTML = ` 
  <div class="bahcaCardInfoTop">
  <div class="bahcaCardInfoTop__left">
    <img
    src="${item.loqoImg}"
    alt=""
    />
  </div>
  <div class="bahcaCardInfoTop__right">
    <img
      src="${item.loqoImg}"
      alt=""
    />
    <img
    src="${item.loqoImg}"
    alt=""
    />
    <img
    src="${item.loqoImg}"
    alt=""
    />
    <img
    src="${item.loqoImg}"
    alt=""
    />
  </div>
</div>
<div class="bahcaCardInfoTittle">
  <div class="bahcaCardInfoTittle__left">
    <h3>${item.name}</h3>
    <p>${item.place}</p>
    <p>${item.mobile}</p>
    <p>${item.telephone}</p>
    <p>${item.email}</p>

  </div>
  <div class="bahcaCardInfoTittle__right">
    <p>
        ${item.tittle1}
    </p>
    <p>
        ${item.tittle2}
    </p>
  </div>
</div>
          `;
}
