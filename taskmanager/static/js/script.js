document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {}); // Pass an empty object if no options are needed

    // modal open

    let modalOpen = document.querySelectorAll('.modal');
    M.Modal.init(modalOpen, {});

    // Date Picker

    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {
            done: "Select"
        }
    });

    // select intitalization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});

// // Modal Open

// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, {});
// });

// // Date Picker
// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, {
//         format: "dd mmmm, yyyy",
//         i18n: {
//             done: "Select"
//         }
//     });
// });