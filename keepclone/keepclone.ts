import {Component, bootstrap} from "angular2/angular2";
import {AddNote} from "./add_note/add_note"
import {Notes} from "./notes/notes"
import {NoteService} from "./note_service"

@Component({
	selector: 'keepclone',
	templateUrl: './keepclone/keepclone.html',
	directives: [AddNote, Notes]

})

export class KeepClone {
	constructor() {



	}
}

bootstrap(KeepClone, [NoteService]);
