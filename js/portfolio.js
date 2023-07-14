import config from './config.mjs';

((document, $) => {
  $(document).ready(() => {
    config();
  });
})(document, $);
