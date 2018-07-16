document.addEventListener("DOMContentLoaded", function(event) {
    fetch('assets/schema/CALC2.json')
        .then(response => {
            return response.json();
        })
        .then(calcScheme => {
            window.calcEditor = new JSONEditor(document.querySelector('#editor'), {
                schema: calcScheme,
                theme: 'bootstrap3',
                iconlib: 'bootstrap3'
            });
        });
});
