const loqopedCardInfomainBody = document.querySelector(
  ".xidmet__card__info__main__body"
);
const ApiURl = "../data/loqopedlar.json";
let xidmetData = [];
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


fetch(ApiURl)
  .then((resp) => resp.json())
  .then((data) => {
    xidmetData = data;
    hideContainerAfterDelay()
    showCard()
});

function showCard(){
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');
    const item = xidmetData.find((item) => item.id == itemId);

    const listCard = document.createElement('ul');
    for (let i = 0; i < item.musbetler.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = item.musbetler[i];
        listCard.appendChild(listItem);
    }

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
                </div>
            </div>
            <div class="xidmet__card__info__main__top__right">
                ${listCard.outerHTML}
            </div>
        </div>
        <div class="xidmet__card__info__main__bottom">
            <div class="xidmet__card__info__main__bottom__left">
                <p>Uzm. Dr. ${item.name}</p>
                <h4>Təhsil</h4>
                <p>${item.tehsil}</p>
                <h4>İş Təcrübəsi</h4>
                <p>${item.isTecrube}</p>
                <h4>İş günləri</h4>
                <p>${item.isGunleri}</p>
                <h4>Əlaqə:</h4>
                <p>${item.mobile}</p>
                <p>${item.email}</p>
            </div>
            <div class="xidmet__card__info__main__bottom__right">
                <img src="../img/image 37.png" alt="" />
            </div>
        </div>
    `;

}