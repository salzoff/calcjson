'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
    fetch('assets/schema/CALC2.json').then(function (response) {
        return response.json();
    }).then(function (calcScheme) {
        window.calcEditor = new JSONEditor(document.querySelector('#editor'), {
            schema: calcScheme,
            theme: 'bootstrap3',
            iconlib: 'bootstrap3'
        });
    });
});