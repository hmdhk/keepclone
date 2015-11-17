import {Component, bootstrap, NgIf} from "angular2/angular2";
import {AddNote} from "./add_note/add_note"
import {Notes} from "./notes/notes"
import {NoteService} from "./note_service"
import {AuthService} from "./auth_service"

@Component({
	selector: 'keepclone',
	templateUrl: './keepclone/keepclone.html',
	directives: [AddNote, Notes, NgIf]

})

export class KeepClone {
	constructor(private authService: AuthService) {

	}
	public isAuthenticated(){
		return this.authService.isAuthenticated();
	}
	public unAuth() {
		this.authService.unAuth();
	}
	public authWithGoogle() {
		this.authService.initGoogleAuth();
	}
}

bootstrap(KeepClone, [NoteService, AuthService]);
