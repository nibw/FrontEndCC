// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    $('#datepicker').datepicker({
        format: 'MM-yyyy',
        startView: "months",
        minViewMode: "months"
    });
});

//$(document).ready(function () {
//    $('#datepicker').on('change', function () {
//        var dateThis = $(this).val();
//        $('#tanggal_name').text(dateThis);
//    });
//});

$(document).ready(function () {
    $('#datepicker').on('change', function () {
        var dateThis = $(this).val();
        $('#tanggal_name1').text(dateThis);
    });
});

$(document).ready(function () {
    $('#ubah').on('change', function () {
        var dateThis = $(this).val();
        $('#nav-periode-tab').text(dateThis);
    });
});


$(document).ready(function () {
    $('#hoesehold').DataTable({
        "ajax": '/other/array.json',
        "columns": [
            { "data": 'name' },
            { "data": 'position' },
            { "data": 'office' },
            { "data": 'extn' },
            { "data": 'start_date' },
            { "data": 'salary' },
        ],
    });
});

$(document).ready(function () {
    $('#vehicle').DataTable({
        "ajax": '/other/array.json',
        "columns": [
            { "data": 'name' },
            { "data": 'position' },
            { "data": 'office' },
            { "data": 'extn' },
            { "data": 'start_date' },
            { "data": 'salary' },
        ],
    });
});

$(document).ready(function () {
    $('#carbonabs').DataTable({
        "ajax": '/other/array.json',
        "columns": [
            { "data": 'name' },
            { "data": 'position' },
            { "data": 'office' },
            { "data": 'extn' },
            { "data": 'start_date' },
            { "data": 'salary' },
        ],
    });
});

$('a[idSpan="1"]').on('click', function () {
    var subText = $(this).attr("spanName");
    console.log(subText);
    $('#subtext').text(subText);
})