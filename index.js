var lcfn = require('lambda-cfn');
var message = lcfn.message;
module.exports={};
module.exports.fn = function(event, callback) {


var notification = {
      subject: 'Other user was logged to user root',
      summary: 'patrol detected that the root AWS user logged in to the console',
      event: event
};

var user = event.detail.userIdentity.userName;
var ip = event.detail.sourceIPAddress;
if (user==='root' && ip !=='99.101.20.31') {
      message(notification, function(err, result) {
      callback(err, result);
    });

} else {
	
  callback(null,"no enviar mensaje");

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