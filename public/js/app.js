

// Load particles
var particles = function(){
  particlesJS(
    'foot-particles',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 120,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    },
    function() {
    }
  );
};

jQuery(document).ready(function($) {
  var checkVisibility = function() {
    $('.js-when-visible').each(function(index, el) {
      if($(this).visible()) {
        $(this).addClass('visible');
      }
      else {
        if($(this).hasClass('js-when-visible--dynamic')) {
          $(this).removeClass('visible');
        }
      }

      if($(this).visible(true)) {
        $(this).addClass('visible--p');
      }
      else {
        if($(this).hasClass('js-when-visible--dynamic')) {
          $(this).removeClass('visible--p');
        }
      }
    });
    if($('.tools').visible(true)) {
      $('.tool').each(function(index, el) {
        $(this).delay(Math.floor(Math.random() * 10 + 1) * 500).fadeIn(2000);
      });
    }

    // $('img[data-src]').each(function(index, el) {
    //   if($(this).visible(true)) {
    //     $(this).attr('src', $(this).attr('data-src')).addClass('lazyloaded');
    //   }
    // });
    // $('div[data-src]').each(function(index, el) {
    //   if($(this).visible(true)) {
    //     $(this).attr('style', 'background-image: url('+$(this).attr('data-src')+')').addClass('lazyloaded');
    //   }
    // });

  }

  $(window).scroll(function(){
    checkVisibility();
  });
  checkVisibility();

  var scrollElemToWatch_1 = document.getElementById('rev-4'),
  scrollElemToWatch_2 = document.getElementById('rev-10'),
  scrollElemToWatch_3 = document.getElementById('rev-15'),
  scrollElemToWatch_particles = document.getElementById('footer-particles-detect'),
  scrollElemToWatch_homeSlider = document.getElementById('head'),
  watcher_1 = scrollMonitor.create(scrollElemToWatch_1, 0),
  watcher_2 = scrollMonitor.create(scrollElemToWatch_2, 0),
  watcher_3 = scrollMonitor.create(scrollElemToWatch_3, 0),
  watcher_4 = scrollMonitor.create(scrollElemToWatch_particles, 500),
  watcher_5 = scrollMonitor.create(scrollElemToWatch_homeSlider, 100),
  rev4 = new RevealFx(document.querySelector('#rev-4'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev5 = new RevealFx(document.querySelector('#rev-5'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev6 = new RevealFx(document.querySelector('#rev-6'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 450,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      },
    }
  }),
  rev7 = new RevealFx(document.querySelector('#rev-7'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 450,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev8 = new RevealFx(document.querySelector('#rev-8'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 650,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev9 = new RevealFx(document.querySelector('#rev-9'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 650,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      },
    }
  }),
  rev10 = new RevealFx(document.querySelector('#rev-10'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      direction: 'rl',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev11 = new RevealFx(document.querySelector('#rev-11'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      direction: 'rl',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev12 = new RevealFx(document.querySelector('#rev-12'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      direction: 'rl',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev13 = new RevealFx(document.querySelector('#rev-13'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      direction: 'rl',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev14 = new RevealFx(document.querySelector('#rev-14'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev15 = new RevealFx(document.querySelector('#rev-15'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev16 = new RevealFx(document.querySelector('#rev-16'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  }),
  rev17 = new RevealFx(document.querySelector('#rev-17'), {
    revealSettings : {
      bgcolor: '#5eeeee',
      delay: 250,
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  });

  watcher_1.enterViewport(function() {
    rev4.reveal();
    rev5.reveal();
    rev6.reveal();
    rev7.reveal();
    rev8.reveal();
    rev9.reveal();
    watcher_1.destroy();
  });
  watcher_2.enterViewport(function() {
    rev10.reveal();
    rev11.reveal();
    rev12.reveal();
    rev13.reveal();
    watcher_2.destroy();
  });
  watcher_3.enterViewport(function() {
    rev14.reveal();
    rev15.reveal();
    rev16.reveal();
    rev17.reveal();
    watcher_3.destroy();
  });
  watcher_4.enterViewport(function() {
    $('.js-footer').addClass('footer-particles--visible');
    particles();
  });
  watcher_4.exitViewport(function() {
    $('.js-footer').removeClass('footer-particles--visible');
  });
  watcher_5.enterViewport(function() {
    $('.homeSlider').removeClass('homeSlider--hidden');
  });
  watcher_5.exitViewport(function() {
    $('.homeSlider').addClass('homeSlider--hidden');
  });


  $(document).on('click', '.js-nav-toggle',function(){
    $('body').toggleClass('nav--open');
  });
  $(document).on('click', '.js-projects-showAll',function(){
    $(this).toggleClass('projects-showAll--active');
  });

  var $root = $('html, body');
  $('.nav-link').click(function() {
    // close projects
    $('.projects--active .project.project--expanded').find('.project-close').trigger('click');

    var href = $.attr(this, 'href');
    $('body').removeClass('nav--open');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });

  $('.nav-link--contacts').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(document).height()
    }, 500, function () {
      window.history.pushState({}, '', href);
    });
    return false;
  });


  var aChildren = $(".nav-link").not('.nav-link--contacts');
  var aArray = [];
  for (var i=0; i < aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
  }
  $(window).on('hashchange', function(e){
    e.preventDefault();
    var hashFound = determineContent();
    if(hashFound) return false;
  });
  $(window).scroll(function(){
    var windowPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();

    for (var i=0; i < aArray.length; i++) {
      var theID = aArray[i];
      var divPos = $(theID).offset().top;
      var divHeight = $(theID).height();
      if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
        $("a[href='" + theID + "']").addClass("nav-link--active");
        // window.location.hash = theID;
        window.history.pushState({}, '', theID);
      } else {
        $("a[href='" + theID + "']").removeClass("nav-link--active");
      }
    }

    if(windowPos + windowHeight == docHeight) {
      if (!$(".nav-link:last-child").hasClass("nav-active")) {
        var navActiveCurrent = $(".nav-active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
        $(".nav-link:last-child").addClass("nav-active");
      }
    }


    // nav link contacts since it's position fixed

    if(windowPos >= Math.floor(docHeight - windowHeight - 1)) {
      $('a[href="#contacts"]').addClass("nav-link--active");
      $(".nav-link").not('.nav-link--contacts').removeClass("nav-link--active");
      // window.location.hash = "#contacts";
      window.history.pushState({}, '', "#contacts");
    } else {
      $('a[href="#contacts"]').removeClass("nav-link--active");
    }

  });



  //bind click events
  var $project = $('.projects--active .project');

  var checkForExpanded = function(){
    if($('.projects--active .project.project--expanded').length != 0) {
      $('body').addClass('has--project-expanded');
    }
    else {
      $('body').removeClass('has--project-expanded');
    }
  };


  $project.find('.project-inner').click(function() {
    var $thisProject = $(this).closest('.project');

    $root.animate({
      scrollTop: $thisProject.offset().top - $(window).height()/2  + $thisProject.height()/2
    }, 300).promise().then(function() {

      if ($thisProject.hasClass('project--collapsed')) {
        $project.not($thisProject).removeClass('project--expanded').addClass('project--collapsed');
        $thisProject.removeClass('project--collapsed').addClass('project--expanded');

        $thisProject.find('.project-contentImages.js-slick').slick({
          lazyLoad: 'ondemand'
        });

      } else {
        $thisProject.removeClass('project--expanded').addClass('project--collapsed');
        $thisProject.find('.project-contentImages.js-slick').slick('unslick');
      }
      checkForExpanded();

    });

  });

  $project.find('.project-close').click(function(){
    var $thisProject = $(this).closest('.project');

    $thisProject.removeClass('project--expanded').addClass('project--collapsed');
    checkForExpanded();
    $thisProject.find('.project-contentImages.js-slick').slick('unslick');

  });

  $(document).keyup(function(e) {
    if ($('body').hasClass('has--project-expanded') && e.keyCode === 27) {
      $('.projects--active .project.project--expanded').find('.project-close').trigger('click');
    }
    if ($('body').hasClass('nav--open') && e.keyCode === 27) {
      $('body').removeClass('nav--open');
    }

  });


  if($.cookie('projects-view')) {
    var cok = $.cookie('projects-view');
    $('body').attr('data-projects-view', $.cookie('projects-view'));
    $('.js-project-viewTypes')
    .find('.project-viewType[data-project-view-type="'+cok+'"]')
    .addClass('project-viewType--active')
    .siblings('.project-viewType')
    .removeClass('project-viewType--active');
  }
  $('.js-project-viewTypes').find('.project-viewType').click(function(){
    var containerType =  $(this).attr('data-project-view-type');
    $(this).siblings('.project-viewType').removeClass('project-viewType--active');
    $(this).addClass('project-viewType--active')
    $('body').attr('data-projects-view',containerType)
    $.cookie('projects-view', containerType, { expires: 7 });
  });


  $('.lazy').lazy({
    afterLoad: function(e){
      $(e).addClass('lazyloaded');
    }
  });

});



document.addEventListener('DOMContentLoaded', function () {
  var imgLoad0 = imagesLoaded( '.homeSlider', { background: true }, function() {
    $('body').removeClass('loading');
  });
  $('.pageLoader').fadeOut(function(){
    $(this).remove();
    new Core.Slider();
  });
  imgLoad0.on( 'always', function( instance ) {
  });
});

// $('.section--head').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
//   $('.pageLoader').fadeOut(function(){
//     $(this).remove();
//     // new Core.Slider();
//   });
// });
