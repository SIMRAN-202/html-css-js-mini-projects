$(document).ready(function(){
    $('#add-btn').click(function(){
        var task = $('#todo-input').val()
        if (task!=""){
        $('ul').append('<li class="list-item">'+ task +  '<button class="delete-btn">Delete</button>' + '</li>');
    }
    $('.delete-btn').click(function(){
        $(this).parent().remove()
    })
    $('.list-item').click(function(){
        $(this).css({
            'background-color': 'rgb(255, 182, 182)',
            'text-decoration': 'line-through',
        })
    })
    });


    
})