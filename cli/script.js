 const minInput = document.getElementById("minPrice");
  const maxInput = document.getElementById("maxPrice");
  const rangeMin = document.getElementById("rangeMin");
  const rangeMax = document.getElementById("rangeMax");

  rangeMin.addEventListener("input", () => {
    if (parseInt(rangeMin.value) > parseInt(rangeMax.value)) {
      rangeMin.value = rangeMax.value;
    }
    minInput.value = rangeMin.value;
  });

  rangeMax.addEventListener("input", () => {
    if (parseInt(rangeMax.value) < parseInt(rangeMin.value)) {
      rangeMax.value = rangeMin.value;
    }
    maxInput.value = rangeMax.value;
  });

  function resetFilter() {
    minInput.value = 0;
    maxInput.value = 50000;
    rangeMin.value = 0;
    rangeMax.value = 50000;
  }