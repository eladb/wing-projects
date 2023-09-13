import { SES } from "@aws-sdk/client-ses";

export async function sendEmail(payload) {
    const ses = new SES();
    console.error("payload", payload);
    const params = {
        Destination: {

            ToAddresses: [payload.to]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: payload.message
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: payload.subject
            }
        },
        Source: 'notifications@cloudkid.link',
        ReplyToAddresses: [
            'info@cloudkid.link',
        ],
    };
    console.log(`Sending email to ${payload.to}`);

    try {
        // const data = await ses.sendEmail(params).promise();
        const data = await ses.sendEmail(params);
        console.log("Email sent", data);
        // return true;
    } catch (err) {
        console.error("Error sending email", err);
        throw new Error("Error sending email: " + err.message);
    }
}

// sendEmail({
//     "type": "raw",
//     "message": "Test",
//     "to": "rainiersvn1@gmail.com",
//     "subject": "testEmail"
// });