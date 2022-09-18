for (let i = 0; i < data.length; i++) {
    const view = data[i];

    var unduh = document.getElementById(`unduh`)
    unduh.innerHTML += `<div class="text-wrap" style="width: 6rem;">`+view.date+`</div>
    <a href="`+view.unduh+`" class="btn btn-primary" type="button">`+view.title+`</a>`;
}
