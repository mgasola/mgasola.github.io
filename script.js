// Seleciona a modal e a imagem dentro dela
var modal = document.getElementById("modal");
var modalImg = document.getElementById("img01");

// Quando a lupa é clicada
document.querySelectorAll('.zoom-icon').forEach(item => {
    item.addEventListener('click', function () {
        var imgSrc = this.previousElementSibling.src;
        modal.style.display = "block";
        modalImg.src = imgSrc;
    });
});

// Quando o "X" é clicado
var closeBtn = document.querySelector(".close");
closeBtn.onclick = function () {
    modal.style.display = "none";
};

