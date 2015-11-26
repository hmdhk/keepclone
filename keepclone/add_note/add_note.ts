import {Component, NgModel, NgIf} from "angular2/angular2";
import {NoteService} from "../services/note_service"

@Component({
  selector: 'add-note',
  templateUrl: './keepclone/add_note/add_note.html',
  directives: [NgModel, NgIf]
})

export class AddNote {
  text = '';
  image = '';
  showImage = false;
  constructor(private noteService: NoteService) {

  }
  public done() {
    
    this.addNote(
      { text: this.text, 
        creationDate: Date.now(),
        image:this.showImage?this.image:null  });
        
      this.showImage=false;
      this.image = '';
      this.text = '';
  }
  public addNote(note) {
    this.noteService.push(note)
  }
  public keydown(e) {
    // Ctrl-Enter
    if (e.ctrlKey && e.keyCode == 13) {
      this.done();
    }

  }
  public previewImage(event) {
    if (event.target.files.length > 0) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        var filePayload = reader.result;
        this.image = filePayload;
        this.showImage = true;

      };

      reader.readAsDataURL(file);
    }

  }
}
