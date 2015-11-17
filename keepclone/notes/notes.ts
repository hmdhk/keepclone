import {Component, NgFor} from "angular2/angular2";
import {NoteService} from "../note_service"

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
				this.notes.unshift(d.val());
			});
		});

	}


}