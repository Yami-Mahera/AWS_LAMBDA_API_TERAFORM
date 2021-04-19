import { Users } from './user.mock';

exports.handler = function(event, context, callback) {
    var response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ data: Users }),
    };

    callback(null, response);
};