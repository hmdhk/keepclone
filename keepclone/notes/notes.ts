import {Component, NgFor} from "angular2/angular2";
import {NoteService} from "../services/note_service"
import * as _ from "underscore"


@Component({
	selector: 'notes',
	templateUrl: './keepclone/notes/notes.html',
	directives: [NgFor]
})
export class Notes {
	notes = [];

	constructor(private noteService: NoteService) {
		noteService.on((data: FirebaseDataSnapshot) => {
			this.notes = [];
			data.forEach((d) => {

				var note = _.extend({ ref: d.ref(), key: d.key() }, d.val());
				this.notes.unshift(note);
			});
		});
	}
	public doneNote(e, note) {
		note.ref.remove();

	}
}