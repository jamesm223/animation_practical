document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector('.topnav').classList.toggle('large');
    document.querySelectorAll('span').forEach(span => {
      span.classList.toggle('hidden');
    });

    document.querySelectorAll('.container, .btn').forEach(el => {
      el.classList.toggle('close');
    });
  });