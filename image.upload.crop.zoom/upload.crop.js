+function(){
    var $result = $("#upload-result"),
    $file = $("#upload-file");
    
    var Upload = {
        showImage: function (file, options) {

            var self = this;
            var options = {
              maxWidth: 400,
              maxHeight: 400,
              // maxWidth: result.width(),
              canvas: true,
              pixelRatio: window.devicePixelRatio,
              downsamplingRatio: 0.5,
              orientation: true
          };

          loadImage(
              file,
              function(img, data){
                  self.updateResults(img, data);
              },
              options
          );
      },
      updateResults: function  (img, data) {
          var self = this;
          if(img){
               $(".upload-box-image").addClass("auto");
          }else{
               $(".upload-box-image").removeClass("auto");
          }

          $result.html(img);
          self.edit();
        },
        changeHandler: function (e) {
            var self = this;
              e.preventDefault();
              e = e.originalEvent;

              console.log(e.dataTransfer);

              var target = e.dataTransfer || e.target,
              file = target && target.files && target.files[0];
              console.log(file);

              if (!file) {return};
              self.showImage(file);
          },
          edit: function(){
            var imgNode = $result.find('img, canvas');
            var img = imgNode[0];
            var pixelRatio = window.devicePixelRatio || 1
            imgNode.Jcrop({
              setSelect: [
                40,
                40,
                (img.width / pixelRatio) - 40,
                (img.height / pixelRatio) - 40
              ],
              onSelect: function (coords) {
                coordinates = coords
              },
              onRelease: function () {
                coordinates = null
              }
            }).parent().on('click', function (event) {
              event.preventDefault()
            })
        },
        crop: function(){

            console.log($(".upload-box-image"));
            var result = $result;
            var self = this;
            var img = result.find('img, canvas')[0]
            var pixelRatio = window.devicePixelRatio || 1
            if (img && coordinates) {
              self.updateResults(loadImage.scale(img, {
                left: coordinates.x * pixelRatio,
                top: coordinates.y * pixelRatio,
                sourceWidth: coordinates.w * pixelRatio,
                sourceHeight: coordinates.h * pixelRatio,
                minWidth: result.width(),
                maxWidth: result.width(),
                pixelRatio: pixelRatio,
                downsamplingRatio: 0.5
              }))
              coordinates = null
            }
            $(".upload-box-image").removeClass("auto");
        },
      displayExifData: function(exif) {
        var thumbnail = exif.get('Thumbnail')
        var tags = exif.getAll()
        var table = exifNode.find('table').empty()
        var row = $('<tr></tr>')
        var cell = $('<td></td>')
        var prop
        if (thumbnail) {
          thumbNode.empty()
          loadImage(thumbnail, function (img) {
            thumbNode.append(img).show()
          }, {orientation: exif.get('Orientation')})
        }
        for (prop in tags) {
          if (tags.hasOwnProperty(prop)) {
            table.append(
              row.clone()
                .append(cell.clone().text(prop))
                .append(cell.clone().text(tags[prop]))
            )
          }
        }
        exifNode.show()
      }
  };


  // handle
  $input.change(function (e) {
      var dd = $(this).val();
       self.changeHandler(e);
    });

    $("#crop").click(function(){
        self.crop();
    });

    //get file by dragging input.
    $("#modal-edit-photo")
      .on('dragover', function (e) {
        e.preventDefault();
        e = e.originalEvent;
        e.dataTransfer.dropEffect = 'copy';
      })
      .on('drop', function(e){
          self.changeHandler(e);
      });
}(window, document, jQuery));
