document.addEventListener("DOMContentLoaded", function(event) {
    fetch('assets/schema/CALC.json')
        .then(response => {
            return response.json();
        })
        .then(calcScheme => {
            window.calcEditor = new JSONEditor(document.querySelector('#editor'), {
                schema: calcScheme,
                ajax: true
            });
        });
});
