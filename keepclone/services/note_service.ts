import {Injectable} from 'angular2/angular2';
import {AuthService} from './auth_service'
import {ConfigService} from './config_service'
@Injectable()
export class NoteService {
	private url = "https://keepclone.firebaseio.com";
	private notes: Firebase;
	constructor(private configService: ConfigService, private authService: AuthService) {
		this.url = this.configService.firebaseUrl;
		this.notes = new Firebase(this.url + "/notes");
	}
	public push(note) {
		if (this.authService.isAuthenticated()) {
			var notes = this.getUserNotesRef();
			notes.push(note);
		} else {
			this.notes.push(note);
		}
	}
	private getUserNotesRef() {
		return new Firebase(this.url + '/users/' + this.authService.getUid() + '/notes');
	}
	public on(callback) {
		if (this.authService.isAuthenticated()) {
			var notes = this.getUserNotesRef();
			notes.on('value', callback);
		} else {
			this.notes.on('value', callback);
		}

	}
}