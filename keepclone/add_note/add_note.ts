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
    if (e.ctrlKey && e.keyCode == 13) {
      // Ctrl-Enter pressed
      this.noteService.push({ text: this.text })
      console.log('control enter');
    }

  }
}
