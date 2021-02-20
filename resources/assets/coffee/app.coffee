$ ->
  class PreviewBlock

    constructor: (o)->

      return

    render: =>

      @bindEvents

      @
    bindEvents: =>
      @
    unbindEvents: =>
      @
    destroy: =>
      @


# ------------
# ------------

  class App

    $var : null

    constructor: ->
      @whenAnimate()
      @whenAnimateFull()
      @inputs()
      @bindEvents()
      @

    whenAnimate: ->
      $('.js-when-animate').each ->
        if $(@).visible(true) and not $(@).hasClass 'animate'
          $(@).addClass 'animate'

    whenAnimateFull: ->
      $('.js-when-animate-full').each ->
        if $(@).visible() and not $(@).hasClass 'animate'
          $(@).addClass 'animate'

    inputs: ->
      $('input[type="radio"], input[type="checkbox"]').iCheck
        checkboxClass: 'checkbox-input'
        radioClass: 'radio-input'

    bindEvents: =>
      $(document).on 'click', '.js-element', @eventCustom




# --------- EVENTS


    eventCustom: (e)=>
      e.preventDefault()
      @



# ---------------------


  $(window).load =>
    window.app = new App

    # bind when everything is loaded
    $(window).scroll ->
      app.whenAnimate()
      app.whenAnimateFull()
      @
    @

  $(window).resize ->
    @


  @
@