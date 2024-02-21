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

    // collapsibles

    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles, {});
});
