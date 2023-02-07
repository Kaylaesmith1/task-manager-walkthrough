document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);


  // datepicker initialization
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm yyyy",
    i18n: {done: "Select"}
  });

  // modal -- ask to delete
  // document.addEventListener('DOMContentLoaded', function() {
  //   let modalButton = document.querySelectorAll('.modal');
  //   M.Modal.init(modalButton);
  // });

  // import jquery for modals
  $(document).ready(function () {
    $('.modal').modal();
  });

  // select initialization
  selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

// collapsible initialization
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
  });