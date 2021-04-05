//For Marking todo
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
})

//for removing todo
$('ul').on('click','span',function(event){ 

   $(this).parent().fadeOut(500,function(){
      $(this).remove();
   })

    event.stopPropagation();  //to stop event bubling
})

$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        const todoText = $(this).val();
        console.log(todoText)
        const todo=`<li><span><i class="fas fa-trash-alt"></i></span>${todoText}</li>`;
        $('ul').append(todo);
        $(this).val("");
    }
    
})

$('#plus').click(function(){
    $('input[type="text"]').fadeToggle(500)
})
