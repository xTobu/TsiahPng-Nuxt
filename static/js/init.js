
var indexCtrl = {
    windowWidth: $(window).innerWidth(),
    windowHeight: $(window).innerHeight(),
    init: function() {
        console.log('index');

        var $this = this;
        this.detectWidth();

        $(window).on('resize', function() {
            $this.detectWidth();
        });

        $('body').on('click','.index_img',function(){
            var pcImg = $(this).attr('src');
            $('body>img').attr('src', pcImg.replace('.jpg', '_lb.jpg')).removeClass('index_img').addClass('lb_img');
        });

        $('body').on('click','.setting_img',function(){
            var pcImg = $(this).attr('src');
            $('body>img').attr('src', pcImg.replace('_setting.jpg', '.jpg')).removeClass('setting_img').addClass('index_img');
        });

        $('body').on('click','.lb_img',function(){
            var pcImg = $(this).attr('src');
            $('body>img').attr('src', pcImg.replace('_lb.jpg', '_setting.jpg')).removeClass('lb_img').addClass('setting_img');
        });
        
    },
    detectWidth: function() {
        this.windowWidth = $(window).innerWidth();
        
        if (this.windowWidth > 769) {
            $('img').each(function() {
                var pcImg = $(this).attr('src');
                $(this).attr('src', pcImg.replace('_m', '_pc'));
            })
        } else {
            $('img').each(function() {
                var pcImg = $(this).attr('src');
                $(this).attr('src', pcImg.replace('_pc', '_m'));
            })
        }

    }


}

$(function() {
    indexCtrl.init();
});