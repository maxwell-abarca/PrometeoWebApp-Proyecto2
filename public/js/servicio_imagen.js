
$(function() {
    let imagenUrl = '';

    $.cloudinary.config({ cloud_name: 'koel', api_key: '456694317136228'});

    let uploadButtton = $('#btn_seleccionar_imagen');

    uploadButtton.on('click', function(e){

        cloudinary.openUploadWidget({ cloud_name: 'koel', upload_preset: 'koel12345',
        tags: ['cgal']},
        function(error, result){
            if(error) console.log(error);

            let id = result[0].public_id;
            console.log(id);
            imagenUrl = 'https://res.cloudinary.com/koel/image/upload/' + id;
            document.querySelector('#image_preview').src = imagenUrl;
          console.log(imagenUrl);
        });
    });
})