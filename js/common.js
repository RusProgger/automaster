$(document).ready(function() {
    // Объект с данными моделей и URL *
    var carsObj = {
        Mitsubishi: {
            model: ['ASX', 'Galant '],
            modelUrl: {
                ASX: 'asx/invite',
                Galant: 'galant/invite2'
            }
        },
        Toyota: {
            model: ['Camry', 'Avensis'],
            modelUrl: {
                Camry: 'camry/1',
                Anvensis: 'anvensis/2'
            }
        },

        Audi: {
            model: ['A4', 'Q5'],
            modelUrl: {
                A4: 'audi/a4/',
                Q5: 'audi/q5/'
            }
        },
        BMW: {
            model: ['X5', 'X6'],
            modelUrl: {
                X5: 'bmv/x5/',
                X6: 'bmv/x6/'
            }
        }
    };

    $('#selectMark').on('change', function() {
        var selectMark = $(this).find(":selected").val();
        if (selectMark == 'Заголовок') {
            $("#selectModel").html('');
            $("#selectModel").append('<option value="Заголовок">Выберите модель</option>');
            return;
        }
        $("#selectModel").html('');
        $("#selectModel").append('<option value="Заголовок">Выберите модель</option>');
        var arrModels = carsObj[selectMark].model;
        for (var i = 0; i < arrModels.length; i++) {
            $("#selectModel").append("<option value=" + arrModels[i] + ">" + arrModels[i] + "</option>");
        }
    });


    // fixed menu *
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 45) {
                $('.header-mobile__menu').addClass('stickytop');
                $('.header-mobile__hidden').addClass('sticky');
            } else {
                $('.header-mobile__menu').removeClass('stickytop');
                $('.header-mobile__hidden').removeClass('sticky');
            }
        });
    });

  


    $(document).ready(function() {
        // Плавный скролл при клике на ссылку с якорем
        $('a[href^="#"]').click(function(event) {
            event.preventDefault(); // Отменяем стандартное поведение перехода по якорю
        
            var target = $(this).attr('href'); // Получаем значение атрибута href (якорь)
            
            // Плавная прокрутка к якорю
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000); // 1000 - это длительность анимации (в миллисекундах)
    
            // Закрытие меню после клика на ссылку
            if ($('.burger').hasClass('active')) {
                $('.burger').removeClass('active');
                $('.header-mobile__hidden').slideUp();
                $('body').removeClass('hidden');
            }
        });
    
        // Открытие/закрытие меню по клику на бургер
        $('.burger').click(function(event) {
            event.stopPropagation(); // Останавливаем всплытие события, чтобы не срабатывал click на документ
            $(this).toggleClass('active');
            $('.header-mobile__hidden').slideToggle();
            $('body').toggleClass('hidden');
        });
    
        // Закрытие меню при клике вне его
        $(document).click(function(event) {
            // Проверяем, был ли клик вне меню и вне бургера
            if (!$(event.target).closest('.header-mobile__hidden, .burger').length) {
                $('.burger').removeClass('active');
                $('.header-mobile__hidden').slideUp();
                $('body').removeClass('hidden');
            }
        });
    
        // Останавливаем всплытие события, если клик был внутри меню
        $('.header-mobile__hidden').click(function(event) {
            event.stopPropagation();
        });
    });





    // custom select *
    $('.select-custom select').select2();

    // car model slider *
    var modelSlider = $(".model-slider");
    modelSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            375: {
                items: 2
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
            1280: {
                items: 7
            },
            1400: {
                items: 9
            }
        }
    });

    // advantage slider *
    var advSlider = $(".advantages-slider");
    advSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        center: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // photo slider *
    var photoSlider = $(".photo-slider");
    photoSlider.owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 24,
        center: false,
        navText: ['<span class="nav-left"></span>', '<span class="nav-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // scroll request *
    $(function() {
        $("#callMaster").click(function() {
            currentBlockoffset = $('.request').offset().top;
            $("html, body").animate({
                scrollTop: currentBlockoffset
            }, 500);
        });
    });

    $('.reviews-item__like button').click(function(){
        $('.reviews-item__like button').removeClass('active');
        $(this).addClass('active');
    });


    // Calc price *
    $('#calcBtn').click(function() {
        $('.overlay').fadeIn();
        $('.price-total').fadeIn();
        $('body').addClass('hidden');
        $('.close-icon').click(function() {
            $('.overlay').fadeOut();
            $('.price-total').fadeOut();
            $('body').removeClass('hidden');
        });
        var car = $('.price-calc__title span').html();
        var model = $('.price-calc__title i').html();
        $('.about-work span').html(car);
        $('.about-work i').html(model + ' ');

        var selectedCountry = [];
        var n = $(".calc-inp:checked").length;
        if (n > 0) {
            $(".calc-inp:checked").each(function() {
                selectedCountry.push($(this).val());
            });
        }
        var totalPrice = 0;
        for (var i = 0; i < selectedCountry.length; i++) {
            totalPrice = totalPrice + parseInt(selectedCountry[i]);
        }
        $('.price-total__title span i').html(totalPrice + ' руб.');
    });

    // map Yandex *
    // ymaps.ready(init);

    // function init() {
    //     var center = [55.753220, 37.715471];
    //     var myMap = new ymaps.Map('map', {
    //         controls: [],
    //         center: center,
    //         zoom: 12
    //     }, {
    //         searchControlProvider: 'yandex#search'
    //     });
    //     var myPlacemark = new ymaps.Placemark(center, {
    //         balloonContent: 'Авиамоторная, 12',
    //         hintContent: 'Авиамоторная, 12'
    //     }, {
    //         iconLayout: 'default#image'
    //     });
    //     myMap.geoObjects.add(myPlacemark);

    //     $('.arrival-btn').click(function() {
    //         var checkVal = $('.time-inp').val();
    //         if (checkVal == '') {
    //             var geolocation = ymaps.geolocation;
    //             geolocation.get({
    //                 provider: 'yandex',
    //                 mapStateAutoApply: true
    //             }).then(function(result) {
    //                 // Получаем локацию пользователя при клике на иконку *
    //                 var geoUser = result.geoObjects.position;

    //                 var multiRoute = new ymaps.multiRouter.MultiRoute({
    //                     referencePoints: [
    //                         [55.753220, 37.715471],
    //                         geoUser
    //                     ],
    //                     params: {
    //                         routingMode: "auto",
    //                         avoidTrafficJams: true
    //                     }
    //                 }, {
    //                     boundsAutoApply: true,
    //                 });
    //                 // Добавление маршрута на карту.
    //                 myMap.geoObjects.add(multiRoute);

    //                 // Подписка на событие обновления данных маршрута.
    //                 multiRoute.model.events.add('requestsuccess', function() {
    //                     // Получение ссылки на активный маршрут.
    //                     var activeRoute = multiRoute.getActiveRoute();
    //                     // Вывод информации о маршруте.
    //                     // console.log("Длина: " + activeRoute.properties.get("distance").text);
    //                     // console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
    //                     $('.time-inp').val("Примерное время: " + activeRoute.properties.get("duration").text);
    //                     // Для автомобильных маршрутов можно вывести
    //                     // информацию о перекрытых участках.
    //                     if (activeRoute.properties.get("blocked")) {
    //                         console.log("На маршруте имеются участки с перекрытыми дорогами.");
    //                     }
    //                 });
    //                 // Добавление маршрута на карту.
    //                 myMap.geoObjects.add(multiRoute);
    //             });
    //         }
    //         return;
    //     });

    //     if (window.matchMedia('(min-width: 768px)').matches) {
    //         var zoomControl = new ymaps.control.ZoomControl({
    //             options: {
    //                 size: "small"
    //             }
    //         });
    //         myMap.controls.add(zoomControl, {
    //             position: {
    //                 right: '40px',
    //                 top: '180px'
    //             }
    //         });
    //     }

    //     myMap.behaviors.disable('scrollZoom');
    // }

});
