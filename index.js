function openMenu() {
  document.body.classList += " menu--open"
  }
  
  function closeMenu() {
  document.body.classList.remove('menu--open')
  }
/** CAROUSEL */

// $(document).ready(function(){
//     // Initialize Slick Carousel
//     $('.book__carousel .books').slick({
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       arrows: true
//     });

//     // Show all books by default
//     $('.books[data-genre]').hide();
//     $('.books[data-genre="all"]').show();

//     // Filter books by genre
//     $('.genre-button').click(function() {
//       const genre = $(this).data('genre');
//       $('.books[data-genre]').hide();
//       if (genre === 'all') {
//         $('.books[data-genre]').show();
//       } else {
//         $(`.books[data-genre="${genre}"]`).show();
//       }
//     });
//   });



// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get all genre buttons
  const genreButtons = document.querySelectorAll('.genre-button');

  // Iterate over each genre button
  genreButtons.forEach(button => {
    // Add click event listener to each button
    button.addEventListener('click', function () {
      // Get the genre associated with the clicked button
      const genre = this.dataset.genre;
      
      // Get all book elements
      const books = document.querySelectorAll('.book');

      // Hide all books initially
      books.forEach(book => {
        book.style.display = 'none';
      });

      // Show books belonging to the clicked genre
      if (genre === 'all') {
        // If 'All' button is clicked, show all books
        books.forEach(book => {
          book.style.display = 'block';
        });
      } else {
        // If a specific genre button is clicked, show books of that genre
        const genreBooks = document.querySelectorAll(`.books[data-genre="${genre}"] .book`);
        genreBooks.forEach(book => {
          book.style.display = 'block';
        });
      }
    });
  });
});


$(document).ready(function() {
  // Initialize Slick Carousel for each genre
  $('.carousel').each(function() {
    $(this).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  // Show all books by default
  $('.carousel[data-genre="all"]').show();

  // Filter books by genre when genre buttons are clicked
  $('.genre-button').click(function() {
    const genre = $(this).data('genre');
    $('.carousel').hide();
    $(`.carousel[data-genre="${genre}"]`).show();
  });
});

    


// contact 
$(document).ready(function() {
  $('#contact-form').on('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Retrieve form data
      var firstName = $('#first-name').val();
      var lastName = $('#last-name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      var message = $('#message').val();

      // Perform form validation (you can add more validation if needed)
      if (firstName && lastName && phone && email && message) {
          // Here you can add the AJAX request to send the form data to the server
          // For this example, we just display a success message
          $('#response-message').fadeIn();
          setTimeout(function() {
              $('#response-message').fadeOut();
          }, 3000);

          // Clear the form
          $('#contact-form')[0].reset();
      } else {
          alert('Please fill out all fields.');
      }
  });
});