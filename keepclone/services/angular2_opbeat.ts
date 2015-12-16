import {ExceptionHandler} from 'angular2/angular2'
// import * as Opbeat from 'opbeat'
declare var _opbeat;

export class OpbeatExceptionHandler extends ExceptionHandler {

	call(error, stackTrace = null, reason = null) {
		console.log('opbeat');
		console.log(error);
		this.captureException(error, reason);
    }
	// public config(properties) {
	// 	Opbeat.config(properties);
	// }

	// public install() {
	// 	Opbeat.install();
	// }

	public captureException(exception, cause) {
		exception.stack = exception.originalStack;
		_opbeat('captureException', exception, cause);
		// Opbeat.captureException(exception, cause)
	}
}