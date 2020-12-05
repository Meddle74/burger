$(function () {
  // add new
  $('.create-form').on('submit', function (event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $('#newburger').val().trim(),
      devoured: 0,
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(function () {
      console.log('Added new burger');
      // refresh page
      location.reload();
    });
  });
});
