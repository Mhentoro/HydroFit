const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Water",
    basePrice: 59,
    sizePrices: {
      Small: 59,
      Medium: 89,
      Large: 109
    },
    colors: [
      { code: "black", img: "./img/water_bl.png" },
      { code: "red", img: "./img/water_r.png" },
      { code: "blue", img: "./img/water_b.png" },
      { code: "green", img: "./img/water_g.png" },
    ],
  },
  {
    id: 2,
    title: "Supplements",
    basePrice: 99,
    sizePrices: {
      Small: 99,
      Medium: 149,
      Large: 179
    },
    colors: [
      { code: "black", img: "./img/suppliments_bl.png" },
      { code: "red", img: "./img/suppliments_r.png" },
      { code: "blue", img: "./img/suppliments_b.png" },
      { code: "green", img: "./img/suppliments_g.png" },
    ],
  },
  {
    id: 3,
    title: "Magnesium",
    basePrice: 89,
    sizePrices: {
      Small: 89,
      Medium: 139,
      Large: 159
    },
    colors: [
      { code: "black", img: "./img/magnesium_bl.png" },
      { code: "red", img: "./img/magnesium_r.png" },
      { code: "blue", img: "./img/magnesium_b.png" },
      { code: "green", img: "./img/magnesium_g.png" },
    ],
  },
  {
    id: 4,
    title: "Juice",
    basePrice: 109,
    sizePrices: {
      Small: 109,
      Medium: 179,
      Large: 229
    },
    colors: [
      { code: "black", img: "./img/juice_bl.png" },
      { code: "red", img: "./img/juice_r.png" },
      { code: "blue", img: "./img/juice_b.png" },
      { code: "green", img: "./img/juice_g.png" },
    ],
  },
];

let choosenProduct = products[0];
let selectedSize = "Small";

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

function updatePrice() {
  const sizeKey = selectedSize.split(" ")[0]; // Extract "Small", "Medium", or "Large"
  const price = choosenProduct.sizePrices[sizeKey];
  currentProductPrice.textContent = price + " Денари";
}

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];
    selectedSize = "Small";
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

    updatePrice();
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
    selectedSize = size.textContent;
    updatePrice();
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
