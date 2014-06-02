/**
 * Created by melon on 14-6-1.
 */
export default Ember.View.extend({
    didInsertElement: function() {
        var viewport = Metronic.getViewPort();
        var body = $('body');
        if ($.cookie && $.cookie('sidebar_closed') === '1' && viewport.width >= 992) {
            $('body').addClass('page-sidebar-closed');
            $('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
        }

        // handle sidebar show/hide
        $('.page-sidebar, .page-header').on('click', '.sidebar-toggler', function (e) {
            var sidebar = $('.page-sidebar');
            var sidebarMenu = $('.page-sidebar-menu');
            $(".sidebar-search", sidebar).removeClass("open");

            if (body.hasClass("page-sidebar-closed")) {
                body.removeClass("page-sidebar-closed");
                sidebarMenu.removeClass("page-sidebar-menu-closed");
                if ($.cookie) {
                    $.cookie('sidebar_closed', '0');
                }
            } else {
                body.addClass("page-sidebar-closed");
                sidebarMenu.addClass("page-sidebar-menu-closed");
                if (body.hasClass("page-sidebar-fixed")) {
                    sidebarMenu.trigger("mouseleave");
                }
                if ($.cookie) {
                    $.cookie('sidebar_closed', '1');
                }
            }

            $(window).trigger('resize');
        });

        this._initFixedSidebarHoverEffect();

        // handle the search bar close
        $('.page-sidebar').on('click', '.sidebar-search .remove', function (e) {
            e.preventDefault();
            $('.sidebar-search').removeClass("open");
        });

        // handle the search query submit on enter press
        $('.page-sidebar .sidebar-search').on('keypress', 'input.form-control', function (e) {
            if (e.which == 13) {
                $('.sidebar-search').submit();
                return false; //<---- Add this line
            }
        });

        // handle the search submit(for sidebar search and responsive mode of the header search)
        $('.sidebar-search .submit').on('click', function (e) {
            e.preventDefault();
            if ($('body').hasClass("page-sidebar-closed")) {
                if ($('.sidebar-search').hasClass('open') == false) {
                    if ($('.page-sidebar-fixed').size() === 1) {
                        $('.page-sidebar .sidebar-toggler').click(); //trigger sidebar toggle button
                    }
                    $('.sidebar-search').addClass("open");
                } else {
                    $('.sidebar-search').submit();
                }
            } else {
                $('.sidebar-search').submit();
            }
        });
    },
    // Handles sidebar toggler to close/hide the sidebar.
    _initFixedSidebarHoverEffect: function() {
        var body = $('body');
        if (body.hasClass('page-sidebar-fixed')) {
            $('.page-sidebar-menu').on('mouseenter', function(){
                if (body.hasClass('page-sidebar-closed')) {
                    $(this).removeClass('page-sidebar-menu-closed');
                }
            }).on('mouseleave', function(){
                if (body.hasClass('page-sidebar-closed')) {
                    $(this).addClass('page-sidebar-menu-closed');
                }
            });
        }
    }

});