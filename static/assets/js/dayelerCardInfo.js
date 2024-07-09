const loqopedCardInfomainBody = document.querySelector(
  ".xidmet__card__info__main__body"
);
const loading = document.querySelector(".loading");

function hideContainerAfterDelay() {
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        loading.style.transition = "opacity 0.5s ease"; 
        loading.style.opacity = "0";
        setTimeout(() => {
            loading.style.display = "none";

        }, 500);
    }, 3000);
}

const ApiURl = "../data/dayeler.json";
let xidmetData = [];

fetch(ApiURl)
  .then((resp) => resp.json())
  .then((data) => {
    xidmetData = data;
    hideContainerAfterDelay() 
    showCard()
  });


function showCard(){
  const params = new URLSearchParams(window.location.search);
    const itemId = params.get("id");
    const item = xidmetData.find((item) => item.id == itemId);

    loqopedCardInfomainBody.innerHTML = ` 
    <div class="xidmet__card__info__main__top">
        <div class="xidmet__card__info__main__top__left">
          <div class="xidmet__grid__card">
            <div class="xidmet__grid__card__img">
              <img src="${item.img}" alt="${item.name}" />
            </div>
            <div class="xidmet__grid__card__tittle">
              <h3>${item.name}</h3>
              <p>${item.place}</p>
            </div>
            <div class="xidmet__grid__card__under__txt">
              <h4 style="margin-top: 0px">Əlaqə:</h4>
              <p>${item.mobile}</p>
              <p>${item.email}</p>
            </div>
          </div>
        </div>
        <div class="xidmet__card__info__main__top__right">
          <h4 style="margin-top: 0px">Haqqında</h4>
          <p>${item.haqqinda}</p>
          <h4>İş Təcrübəsi</h4>
          <p>${item.isTecrube}</p>
        </div>
      </div>
        `;
}