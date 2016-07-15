var lcfn = require('lambda-cfn');
var message = lcfn.message;
module.exports={};
module.exports.fn = function(event, callback) {


var notification = {
      subject: 'Root user logged in to the Console',
      summary: 'patrol detected that the root AWS user logged in to the console',
      event: event
};

var user= event.detail.userIdentity.userName;
if (user=='root') {
	message(notification, function(err, result) {
	    callback(err, result);
    });
} else {
	callback(null,"Other user different of root logged in to the Console");
}
 


};
module.exports.config = {

	name: 'rootLogin',
	
	eventRule: {
		
    eventPattern: {
      'detail-type': [
        'AWS API Call via CloudTrail' // entender que el 
        // evento viene de cloud trail

      ],
      detail: {
        eventSource: [
       
          'signin.amazonaws.com'
        ],
        eventName: [
          'ConsoleLogin'
        ]
      }
    }
  }
};