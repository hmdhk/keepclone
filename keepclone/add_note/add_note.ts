import {Component, NgModel} from "angular2/angular2";
import {NoteService} from "../note_service"

@Component({
  selector: 'add-note',
  templateUrl: './keepclone/add_note/add_note.html',
  directives: [NgModel]
})

export class AddNote {
  text = '';

  constructor(private noteService: NoteService) {

  }
  public addNote() {


  }
  public keydown(e) {
    // Ctrl-Enter
    if (e.ctrlKey && e.keyCode == 13) {
      this.noteService.push({ text: this.text, creationDate: Date.now() })
      this.text = '';
    }

  }
}
