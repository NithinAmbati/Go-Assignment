const link = document.getElementsByClassName("page-btn");
let curPage = 1;

function changePage() {
  for (l of link) {
    l.classList.remove("active");
  }
  event.target.classList.add("active");
  curPage = event.target.value;
}

function nextPage() {
  if (curPage <= 6) {
    for (l of link) {
      l.classList.remove("active");
    }
    curPage++;
    link[curPage - 1].classList.add("active");
  }
}

function prevPage() {
  if (curPage > 2) {
    for (l of link) {
      l.classList.remove("active");
    }
    curPage--;
    link[curPage - 1].classList.add("active");
  }
}
