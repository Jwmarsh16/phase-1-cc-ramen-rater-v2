// index.js

  const handleClick = (ramen) => {
      const ramenImage = document.querySelector("#ramen-detail > .detail-image");
      const ramenName = document.querySelector("#ramen-detail > .name");
      const ramenRestaurant = document.querySelector("#ramen-detail > .restaurant");
      const ratingDisplay = document.getElementById("rating-display");
      const commentDisplay = document.getElementById("comment-display");

  ramenImage.src = ramen.image;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  const ramenForm = document.getElementById('new-ramen');
  ramenForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRamen = {
      name: ramenForm['new-name'].value,
      restaurant: ramenForm['new-restaurant'].value,
      image: ramenForm['new-image'].value,
      rating: ramenForm['new-rating'].value,
      comment: ramenForm['new-comment'].value,
    };

    const ramenMenuDiv = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    ramenMenuDiv.appendChild(img);

    ramenForm.reset();
  });
}

const displayRamens = async () => {
  const response = await fetch('http://localhost:3000/ramens');
  const ramens = await response.json();

  const ramenMenuDiv = document.getElementById('ramen-menu');
  ramens.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenuDiv.appendChild(img);
  });
};

const main = () => {
  displayRamens();
  addSubmitListener();
}

main();

export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};