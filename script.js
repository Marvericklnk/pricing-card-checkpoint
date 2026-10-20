// Reuse this function to create a card with different plan details.
function Card(title, price, features) {
  let card = document.createElement("article");
  card.classList.add("pricing");

  let heading = document.createElement("h2");
  heading.classList.add("title");
  heading.textContent = title;

  let priceText = document.createElement("p");
  priceText.classList.add("price");
  priceText.textContent = price + " /month";

  let list = document.createElement("ul");
  list.classList.add("features");

  for (let i = 0; i < features.length; i++) {
    let feature = document.createElement("li");
    feature.textContent = features[i];
    list.appendChild(feature);
  }

  let button = document.createElement("button");
  button.classList.add("btn");
  button.type = "button";
  button.textContent = "Start Trial";
  button.setAttribute("aria-label", "Start trial for " + title);

  button.addEventListener("click", function () {
    document.querySelector("#trial-message").textContent =
      "You selected the " + title + " trial. This is a demonstration.";
  });

  card.appendChild(heading);
  card.appendChild(priceText);
  card.appendChild(list);
  card.appendChild(button);
  return card;
}

let plans = document.querySelector(".plans");
plans.appendChild(Card("Basic Plan", "$9.99", [
  "1 GB Storage", "Basic Support", "All Core Features"
]));

// A second card demonstrates reuse without repeating the layout code.
plans.appendChild(Card("Pro Plan", "$19.99", [
  "10 GB Storage", "Priority Support", "All Core Features"
]));
