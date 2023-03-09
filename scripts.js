$(document).ready(function() {
    $(document).on('click', '.editClickable', function() {
        let input = $('<input type="text" id="editedText" name="edited">')
        input.val($(this).closest('.comment').find('.paragraph p').text());

        let submitButton = $('<span>Submit</span>');

        let newDiv = $('<div></div>');

        $(newDiv).addClass('editableText');

        newDiv.append(input);

        newDiv.append(submitButton);

        $(this).closest('.subCommentSection').append(newDiv);

        submitButton.click(function() {

            let editedComment = input.val();
            
            $(this).parent().parent().find('.comment').find('.paragraph p').text(editedComment);

            newDiv.remove();
        });
    });

});

$(document).ready(function() {

    $(document).on('click', '.deleteClickable', function() {

        $(this).parent().parent().parent().remove();

    });

});

$(document).ready(function() {

    $('.submitButton').click(function() {

        let userName = $('#userName').val();

        let comment = $('#comment').val();

        let newComment = 
        
        '<div class="subCommentSection">' +

            '<div class="comment">' +

                '<div class="avatarImage">' +

                    '<img src="images.png/avatar.png" align="left" alt="User Avatar Image" class="userImage">' +

                '</div>' + 

                '<div class="commentLayout" align="left">' +

                    '<h2 class="user">' + userName + '</h2>' +

                    '<div class="paragraph">' + 

                        '<p>' + comment + '</p>' +

                    '</div>' +

                '</div>' +

                '<div class="clickableContainer">' +

                    '<p class="editClickable">Edit&nbsp;&nbsp;</p>' +

                    '<p class="deleteClickable">Delete</p>' +

                '</div>' +

            '</div>' +
        '</div>';


        $('.commentSection').prepend(newComment);

    });

});



