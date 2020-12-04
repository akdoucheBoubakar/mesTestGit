$(document.form_orangelink.date_naissance_client)
    .inputmask('99/99/9999')
    .on('blur', function() {
        verifDateToday(this);
    });

$(document.form_orangelink.date_naissance_client2)
    .inputmask('datetime', {
        inputFormat: 'dd/mm/yyyy',
        mine: '01/01/1920',
    })
    .on('blur', function() {
        verifDateToday(this);
    });


$(document.form_orangelink.date_depot)
    .inputmask('99/99/9999')
    .on('blur', function() {
        verifDateTodayJmoinsUn(this);
    });