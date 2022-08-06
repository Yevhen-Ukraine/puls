$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false,

                }
            }
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    }); 

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal
    // []-скобки - Получение элемента по data отрибуту
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow'); //Включает фон
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow'); //Закрываем модальное окно
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); //Вытаскивае текст с моделью пульсомертра и подставляет в модальлное окно
            $('.overlay, #order').fadeIn('slow'); //Включает фон
        });
    });

    $('#consultation-form').validate();
    $('#consultation form').validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожулуйста, введите своё имя",
            phone: "Пожалуйста, введите номер своего телефона",
            email: {
              required: "Пожулуйста, введите свою почту",
              email: "Непрвильно введён адрес почты"
            }
        }
    });
    $('#order form').validate();

}); 
          