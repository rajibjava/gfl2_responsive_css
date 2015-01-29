(function(adiachenko) {

    window.addEventListener("load", function() {

        var stuffList = document.querySelectorAll("#stuff-list li");

        if (stuffList.length % 4 === 1) {
            var view = window.innerWidth;

            if (view > 600) {
                [].forEach.call(stuffList, function(stuffMember) {
                    // do whatever
                    stuffMember.style.width = "18%";
                });
            }

            window.onresize = function() {
                view = window.innerWidth;
                changePictureSize(view, stuffList);
            };
        }

        function changePictureSize(view, stuffList) {
            if (view > 600) {
                [].forEach.call(stuffList, function(stuffMember) {
                    // do whatever
                    stuffMember.style.width = "18%";
                });
            } else {
                [].forEach.call(stuffList, function(stuffMember) {
                    // do whatever
                    stuffMember.style.width = null;
                });
            }
        }

    }, false);

}(window.adiachenko = window.adiachenko || {}));
