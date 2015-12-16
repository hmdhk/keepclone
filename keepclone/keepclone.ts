import {Component, bootstrap, NgIf, provide, ExceptionHandler} from "angular2/angular2";

import {AddNote} from "./add_note/add_note"
import {Notes} from "./notes/notes"

import {OpbeatExceptionHandler} from './services/angular2_opbeat'
import {ConfigService} from './services/config_service'
import {AuthService} from "./services/auth_service"
import {NoteService} from "./services/note_service"


@Component({
	selector: 'keepclone',
	templateUrl: './keepclone/keepclone.html',
	directives: [AddNote, Notes, NgIf]

})

export class KeepClone {

	constructor(private authService: AuthService) {

	}
	public get userProfile() {
		return this.authService.userProfile;
	}

	public isAuthenticated() {
		return this.authService.isAuthenticated();
	}
	public unAuth() {
		this.authService.unAuth();
	}
	public authWithGoogle() {
		this.authService.initGoogleAuth();
	}
}


var opbeat = new OpbeatExceptionHandler(null);
// opbeat.config({
// 	debug: true,
// 	orgId: '7f9fa667d0a349dd8377bc740bcfc33e',
// 	appId: 'c9cca0eb42'
// });
// opbeat.install();

bootstrap(KeepClone, [provide(ExceptionHandler, { useValue: opbeat }), NoteService, AuthService, ConfigService]);
