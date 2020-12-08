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
      setTimeout(function () {
        location.reload();
      }, 1000);
    });
  });

  $('.devour').on('click', function (event) {
    const id = $(this).data('id');
    $.ajax(`/api/burgers/ ${id}`, {
      type: 'PUT',
      data: { devoured: 1 },
    }).then(() => {
      setTimeout(function () {
        location.reload();
      }, 2500);
    });
  });

  $('.put').on('click', function (event) {
    const id = $(this).data('id');
    $.ajax(`/api/burgers/ ${id}`, {
      type: 'PUT',
      data: { devoured: 0 },
    }).then(() => {
      setTimeout(function () {
        location.reload();
      }, 1000);
    });
  });
});

function playWoohoo() {
  const audio = new Audio('/assets/sounds/woohoo.mp3');
  audio.play();
}

function playBurger() {
  const audio = new Audio('/assets/sounds/mburger.mp3');
  audio.play();
}

function playDoh() {
  const audio = new Audio('/assets/sounds/doh.mp3');
  audio.play();
}
