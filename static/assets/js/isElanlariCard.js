const iselanlarBoxDb = document.querySelector(".iselanlar__box__db");
const loading = document.querySelector(".loading");

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

const ApiURl = "../data/isElanlar.json";
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

  let isHaqindaMelumat;
  isHaqindaMelumat =''
  for (let i = 0; i < item.melumat.length; i++) {
    isHaqindaMelumat += `<li>${item.melumat[i]}</li>`;
  }

  let telebler;
  telebler =''
  for (let i = 0; i < item.teleblerCard.length; i++) {
    telebler += `<li>${item.teleblerCard[i]}</li>`;
  }

  iselanlarBoxDb.innerHTML = ` 
  <div class="iselanlar__box__top">
  <h3>Məlumat lövhəsi</h3>
</div>
<div class="iselanlar__box__tittle__top">
  <div class="iselanlar__box__tittle__top__left">
    <div class="iselanlar__box__tittle__top__left__box">
      <p>Şəhər :</p>
      <span>${item.seher}</span>
    </div>
    <div class="iselanlar__box__tittle__top__left__box">
      <p>Fəalliyyət sahəsi :</p>
      <span>${item.fealiyat_sahesi}</span>
    </div>
    <div class="iselanlar__box__tittle__top__left__box">
      <p>İxtisas :</p>
      <span>${item.ixtisas}</span>
    </div>
    <div class="iselanlar__box__tittle__top__left__box">
      <p>İş qrafiki :</p>
      <span>${item.isQradik}</s>
    </div>
    <div class="iselanlar__box__tittle__top__left__box">
      <p>İş təcrübəsi :</p>
      <span>${item.isTecrubesi}</span>
    </div>
    <div class="iselanlar__box__tittle__top__left__box">
      <p>Təhsil :</p>
      <span>${item.tehsil}</span>
    </div>
    <div class="iselanlar__box__tittle__top__left__box" style="border: none;">
      <p>Əmək haqqı :</p>
      <span>${item.emekHaqi}</span>
    </div>
  </div>
  <div class="iselanlar__box__tittle__top__right">
    <div class="iselanlar__box__tittle__top__right__box">
      <p>Elanın nömrəsi :</p>
      <span>${item.elan_Nomresi}</span>
    </div>
    <div class="iselanlar__box__tittle__top__right__box">
      <p>Baxış sayı :</p>
      <span>${item.baxis}</span>
    </div>
    <div class="iselanlar__box__tittle__top__right__box">
      <p>Yenilənmə tarixi :</p>
      <span>${item.yenilenme_tarix}</span>
    </div>
  </div>
</div>
<div class="iselanlar__box__tittle__bottom">
  <h4>İş haqqında məlumat</h4>
  <ul>
  ${isHaqindaMelumat}
  </ul>
  <h4>Tələblər</h4>
  <ul>
    ${telebler}
  </ul>
  <h5>QEYD : <p>Rus və İnglis dilini bilməsi vacibdir</p></h5>
</div>
          `;
}
