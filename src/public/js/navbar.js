$('.navbar-nav .nav-item').click((event)=>{
    let componentUrl = `/components/${$(event.target).attr('data-component')}.html`
    $("#content").load(componentUrl);
  });