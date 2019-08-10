<script class="guana-bootstrapper">
    (function() {
        var initExtModule = function(url, moduleName, params) {
            window.iblExtModules = window.iblExtModules || {};
            if (params.hideBeforeInit) {
                params.container.closest(".widget-type-cell").css("visibility", "hidden");
            }
            if (iblExtModules[moduleName]) {
                iblExtModules[moduleName](params);
                return;
            }
            $(document).on("iblExtModuleLoaded", function(_, name) {
                if (name !== moduleName) {
                    return;
                }
                iblExtModules[moduleName](params);
            });
            if (iblExtModules[moduleName] !== false) {
                iblExtModules[moduleName] = false;
                if (location.href.indexOf("IBL_DEBUG") > -1) {
                    url += (url.indexOf("?") > -1 ? "&t=" : "?t=") + (new Date().getTime());
                }
                $("<script/>").attr({
                    src: url
                })
                    .appendTo("head");
            }
        };
        var container = $("script.guana-bootstrapper:last").parent();
        jQuery(document).ready(function() {
            var contentCodeBlock = $("#slider-popup-content");
            var contentContainer = $("<div/>").insertAfter(contentCodeBlock);
            contentCodeBlock.remove();
            initExtModule("//cdn2.hubspot.net/hub/358710/file-1695392777-js/guana/modules/guana-modal.js", "guanaModal", {
                container: container,
                hideBeforeInit: true,
                trigger: "click-module",
                other_module: ".slider-cta",
                width: "narrow",
                close: "button",
                on_open: function() {
                    if (contentCodeBlock) {
                        contentContainer.html(contentCodeBlock.html());
                        contentCodeBlock = null;
                        $(".slide18-cta").remove().appendTo(".slide18-cta-container");
                    }
                    var slider = $('.slider-grp');
                    if (!slider.data("init")) {
                        slider.data("init", true);
                        $('.slider-grp').slick({
                            dots: false,
                            arrows: true,
                            infinite: false,
                            speed: 300,
                            slidesToShow: 1,
                            fade:true,
                            responsive: [{
                                breakpoint: 767,
                                settings: {
                                    adaptiveHeight: true
                                }
                            }]
                        });
                    }
                    slider.slick("refresh");
                    setTimeout(function() {
                        slider.slick("refresh");
                    }, 0);
                }
            });
        });
    })();
</script>

free-trail-pop-up => class use in form section
slider-cta ==> class use in cta