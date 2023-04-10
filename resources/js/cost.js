$(document).ready(function() {
    $('select[name="province_origin"]').on('change', function() {
        let provinceID = $(this).val();
        if (provinceID) {
            jQuery.ajax({
                url: 'api/province/'+provinceID+'/cities',
                type:"GET",
                dataType:"json",
                success:function(data){
                    $('select[name="city_origin"]').empty();
                    $.each(data, function(key, value) {
                        $('select[name="city_origin"]').append(`<option value="${key}">${value}</option>`);
                    })
                }
            })
        }
    });
});