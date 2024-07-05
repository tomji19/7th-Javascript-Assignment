$(document).ready(function () {
  $('.open-menu').click(function () {
    $('.nav-menu').css('left', '0');
  });

  $('.close-menu').click(function () {
    $('.nav-menu').css('left', '-250px');
  });
});

function toggleAccordion(id) {
  var content = document.getElementById('accordion-content-' + id);
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}

$(document).ready(function () {
  // Function to toggle accordion items
  $('.accordion-header').click(function () {
    var accordionContent = $(this).next('.accordion-content');

    // Close all accordion items except the clicked one
    $('.accordion-content').not(accordionContent).slideUp();

    // Toggle the clicked accordion item
    accordionContent.slideToggle();
  });
});

