let toolBar = $('#myDiv');
let dragStartX = toolBar.offset().left;
let dragStartY = toolBar.offset().top;
$('#dragButton').click(function(){
    console.log('X: ' + dragStartX);
    console.log('Y: ' + dragStartY);
});
