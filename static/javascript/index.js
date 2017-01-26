$(document).ready(function(){
    //// Update the DOM with new note /////
    function upDateNotes(response){
    
        var add_note_form = "<form>" +
                "<button class=\"delete_note\" value=\""+ response.id +"\"> Delete  </button>" +
                "<div class=\"decorate_note_div\">" +
    
                    $("<div></div>").text(response.created_at).html() +
                    $("<div></div>").text(response.title).html() +
                    $("<div><p></p></div>").text(response.content).html() +
                "</div>" +
            "</form>";
    
        $(".new_updated_notes").prepend(add_note_form);
    }
    
    
    function addNewNoteToDB(event){
    
        var form = $(this).closest("form");
            var note_title = form.find("[name = \"note_title\"]").val();
        var new_note = form.find("[name = \"new_note\"]").val();
    
    
        var formInputs = {
            "note_title": note_title,
            "new_note": new_note
        };
    
        $.post("/add_note.json", formInputs, upDateNotes);
    }
    
    
    $("#new_note_button").on('click', addNewNoteToDB);
    
    
    
    
    ///// Remove note from list of notes //////
    function removeNote(response){
        
        console.log("removeNote running");
        
    }
    function removeNoteFromDB(){
        var note_id = $(this).val();
        $(this).closest('form').remove();
    
        // $.post('/delete_note', {'note_id': note_id}, removeNote);
        $.ajax({
            url: '/delete_note',
            type: 'DELETE',
            data: {'note_id': note_id},
            success: removeNote
        })
    
    }
    
    $('body').on('click', ".delete_note", removeNoteFromDB);
});

