function autocomplete(input, latInput, lngInput) {
  // skip this function if there is not input on the page
  if (!input) return;
  const dropdown = new google.maps.places.Autocomplete(input);
  console.log(dropdown);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  // If someone hits enter on the address field, don't submit the form
  input.on('keydown', (e) => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

export default autocomplete;
