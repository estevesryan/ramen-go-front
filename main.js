const apiKey = "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf";

const listProteins = document.getElementsByClassName("protein-list");
const listProtein = document.getElementsByClassName("protein");
const listBroth = document.getElementsByClassName("list-broths");
const broth = document.getElementsByClassName("broth");

function activeProtein(e) {
  for (let i = 0; i < listProtein.length; i++) {
    listProtein[i].classList.remove("active");
  }


  for (let i = 0; i < listProtein.length; i++) {
    listProtein[i].querySelector(".list-img").classList.remove("active");
    listProtein[i].querySelector(".list-img-active").classList.remove("active");
  }
  

  listProtein[e].querySelector(".list-img").classList.add("active");  
  listProtein[e].querySelector(".list-img-active").classList.add("active");
  return listProtein[e].classList.add("active")
}

function activeBroth(e) {
  for (let i = 0; i < broth.length; i++) {
    broth[i].classList.remove("active");
  }

  for (let i = 0; i < broth.length; i++) {
    broth[i].querySelector(".list-img").classList.remove("active");
    broth[i].querySelector(".list-img-active").classList.remove("active");
  }

  broth[e].querySelector(".list-img").classList.add("active");
  broth[e].querySelector(".list-img-active").classList.add("active");
  return broth[e].classList.add("active");
}

async function getBroths() {
  const broths = await fetch("https://ramen-go-api.onrender.com/broths", {
    headers: {
      "x-api-key": apiKey,
    },
  });

  return broths.json();
}

async function getProteins() {
  const proteins = await fetch("https://ramen-go-api.onrender.com/proteins", {
    headers: {
      "x-api-key": apiKey,
    },
  });

  return proteins.json();
}

const broths = getBroths().then(broths => {
  broths.map((broth, index) => {
    listBroth[0].innerHTML += 
    `<li id="${broth.id}" onclick="activeBroth(${index})" class="list-item broth">
      <img class="list-img" src="${broth.imageInactive}" alt="Shoyu" />
      <img class="list-img-active" src="${broth.imageActive}" alt="Shoyu" />
      <h2 class="list-title">${broth.name}</h2>
      <p class="list-description">${broth.description}</p>
      <h3 class="list-price">US$ ${broth.price}</h3>
    </li>`
  })
})

const proteins = getProteins().then((proteins) => {
  proteins.map((protein, index) => {

    listProteins[0].innerHTML += 
    `<li onclick="activeProtein(${index})" class="list-item protein">
      <img class="list-img" src="${protein.imageInactive}" alt="Shoyu" />
      <img class="list-img-active" src="${protein.imageActive}" alt="Shoyu" />
      <h2 class="list-title">${protein.name}</h2>
      <p class="list-description">${protein.description}</p>
      <h3 class="list-price">US$ ${protein.price}</h3>
    </li>`
  });
});


