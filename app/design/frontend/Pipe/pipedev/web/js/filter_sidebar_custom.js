require([
    'jquery'
], function ($) {

    const Main = {

        filterSelector: {
            filterBox: '#filter-sidebar-custom',
            filterText: '.filter-sidebar-text',
            filterTextShow: '.filter-sidebar-text.mostrar-filtros',
            filterTextHide: '.filter-sidebar-text.ocultar-filtros',
            filterSide: '.sidebar.sidebar-main'
        },
        init: function() {
            
            this.hideFilter();
            this.showFilter();
        },
        showFilter: function() {
            const self = this;
            
            $( self.filterSelector.filterBox ).toggle(
                function() {
                    console.log("primera")
                    $(self.filterSelector.filterSide).addClass("active");
                    $(self.filterSelector.filterTextShow).removeClass("active");
                    $(self.filterSelector.filterTextHide).addClass("active");
                }, function() {
                    console.log("segunda")
                    if($(self.filterSelector.filterTextShow).hasClass('active')) {
                        $(self.filterSelector.filterSide).addClass("active");
                        $(self.filterSelector.filterTextShow).removeClass("active");
                        $(self.filterSelector.filterTextHide).addClass("active");
                    } else {
                        $(self.filterSelector.filterSide).removeClass("active");
                        $(self.filterSelector.filterTextShow).addClass("active");
                        $(self.filterSelector.filterTextHide).removeClass("active");
                    }

                }
            );
             
            
            
        },
        hideFilter: function() {
            const self = this;
            $(document).mouseup(function(e) 
            {
                if($('.sidebar.sidebar-main').hasClass('active')) {
                    let container = $('.sidebar.sidebar-main');
                    let boxFilter2 = $('.filter-sidebar-text');
                    if (!container.is(e.target) && container.has(e.target).length === 0 && !boxFilter2.is(e.target)) 
                    {
                        console.log("si funciona dentro hidefilter")
                        container.removeClass("active");
                        $(self.filterSelector.filterTextShow).addClass("active");
                        $(self.filterSelector.filterTextHide).removeClass("active");
                    }
                }
            });
        },
    };

    Main.init();

});