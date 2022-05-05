const initialItem = "breakfast";

$(document).ready(() => {
  const tab = window.location.hash.substring(1);
  toggleItems([tab || initialItem]);

  $("input").click((event) => {
    console.log("button clicked");
    console.log(event.target.value);
    toggleItems([event.target.value]);
  });

  $(".tab").click((event) => {
    event.preventDefault();
    console.log("tab clicked");
    console.log(event.target.text);
    toggleItems([event.target.text]);
  });
});

function toggleItems(id) {
  $(`.box`).hide();
  $(`.tab`).removeClass("active");
  $(`input`).attr("disabled", false);

  const elem = $(`#${id}`).length && $(`#${id}`).hasClass("box");

  window.location.hash = elem ? id : initialItem;

  (elem ? $(`#${id}`) : $(`#${initialItem}`)).show();
  (elem ? $(`.tab[href=${id}]`) : $(`.tab[href=${initialItem}]`)).addClass(
    "active"
  );
  (elem ? $(`input[value=${id}]`) : $(`input[value=${initialItem}]`)).attr(
    "disabled",
    true
  );
}
