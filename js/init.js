$(document).ready(() => {
  $('.reveal .slides section').each((idx, slide) => {
    slide.dataset.backgroundGradient = 'linear-gradient(to bottom, rgb(40, 59, 149), rgb(8, 0, 32))';
  });
  //$('.reveal .slides section').data('background-gradient', 'linear-gradient(to bottom, rgb(40, 59, 149), rgb(8, 0, 32))');
});
