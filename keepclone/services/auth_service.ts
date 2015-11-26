import {Injectable} from 'angular2/angular2';
import {ConfigService} from './config_service'

@Injectable()
export class AuthService {
	private authData = null;
	private firebaseRef;
	private url;
	constructor(private configService: ConfigService) {
		this.url = this.configService.firebaseUrl;
		this.firebaseRef = new Firebase(this.url);
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
				var profile = new Firebase(this.url + "/users/" + authData.uid + '/profile');
                profile.set({
                    displayName: authData.google.displayName,
                    email: authData.google.email
                });
			}
		}, {
                remember: "sessionOnly",
                scope: "email"
            });
	}
}