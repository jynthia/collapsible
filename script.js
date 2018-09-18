$(document).ready(function()
    {
        Array.from(document.getElementsByClassName("btn-geral")).forEach(function (item) {

            item.addEventListener('click', function () {
                this.classList.toggle('active');
                var content = this.nextElementSibling;
                return content.style.display === 'block' ?
                    content.style.display = 'none' :
                    content.style.display = 'block';

            });

        });

    });
