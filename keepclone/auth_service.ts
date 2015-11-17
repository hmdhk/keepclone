export class AuthService {
	private authData = null;
	private firebaseRef = new Firebase("https://keepclone.firebaseio.com");
	constructor() {

	}

	public getUserProfile() {
		if (this.authData != null) {
			return {
				displayName: this.authData.google.displayeName
			};
		}
	}
	public getUid() {
		return this.authData.uid;
	}
	public isAuthenticated() {
		this.authData = this.firebaseRef.getAuth()
		return this.authData != null;
	}
	public unAuth() {
		this.firebaseRef.unauth();
	}
	public initGoogleAuth() {

		this.firebaseRef.authWithOAuthPopup("google", (error, authData) => {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
				this.authData = authData;
			}
		});
	}
}