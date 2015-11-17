export class NoteService {
	private url = "https://keepclone.firebaseio.com/notes";
	private notes: Firebase;
	constructor() {
		this.notes = new Firebase(this.url);
	}
	public push(note) {
		this.notes.push(note);
	}

	public on(callback) {
		this.notes.on('value', callback);
	}
}