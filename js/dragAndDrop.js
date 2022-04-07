const dropbox = document.querySelector('.slider__wrapper');
const dotes = document.querySelector('.dots__wrapper');
dropbox.addEventListener('dragenter', dragenter, false);
dropbox.addEventListener('dragover', dragover, false);
dropbox.addEventListener('drop', drop, false);
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    let file = files[i];

    if (!file.type.startsWith('image/')) {
      continue;
    }

    let slide = document.createElement('div');
    slide.classList.add('slide');
    dropbox.appendChild(slide);
    let img = document.createElement('img');
    img.file = file;
    slide.appendChild(img);
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dotes.appendChild(dot);

    let reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
