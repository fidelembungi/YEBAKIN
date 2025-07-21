function table_commentaires() {

    $.ajax({
        url: "./model/scripts.php",
        type: "POST",
        data: {
            'ent': 'table_commentaires'
        },
        error: function (data) {
            console.log(data)
        },
        success: function (data) {

            var result = $.parseJSON(data);

            var i = 0;
            var string = '';

            $.each(result, function (key, value) {
                i += 1;
                string +=
                    '<tr class="lead" style="cursor: pointer" id="' + value["id"] + '" onclick="suppressions(this.id);">' +
                    '<td class="text-justify" px-2>' + value["id"] + '</td>' +
                    '<td class="text-justify" px-2>' + value["noms"] + '</td>' +
                    '<td class="text-justify" px-2>' + value["email"] + '</td>' +
                    '<td class="text-justify" px-2>' + value["commentaires"] + '</td>' +
                    '<td class="text-justify" px-2>' + value["date_creee"] + '</td>' +
                    '</tr>'

            });
            $("#table_commentaires").empty().append(string);
        }
    });


}