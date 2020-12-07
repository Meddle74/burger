$(function () {
  // add new
  $('.create-form').on('submit', (event) => {
    event.preventDefault();
    const newBurger = {
      burger_name: $('#newburger').val().trim(),
      devoured: 0,
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(() => {
      console.log('Added new burger');
      // refresh page
      location.reload();
    });
  });
});

function play() {
  var audio = new Audio(
    // '/assets/sounds/woohoo.mp3'
    '/assets/sounds/mburger.mp3'
  );
  audio.play();
}
