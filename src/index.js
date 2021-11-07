const core = require('@actions/core');
const AWS = require('aws-sdk');

function run() {
  try {
    const SQS = new AWS.SQS();

    const accessKeyId = core.getInput('accessKeyId');
    const secretAccessKey = core.getInput('secretAccessKey');
    const region = core.getInput('region');
    const sqsUrl = core.getInput('url');
    const message = core.getInput('message');

    AWS.config.update({
      region,
      accessKeyId,
      secretAccessKey
    });

    const params = {
      QueueUrl: sqsUrl,
      MessageBody: message,
    };

    SQS.sendMessage(params, (err, resp) => {
      if (err) {
        throw err;
      } else {
        console.log(`resp ${JSON.stringify(resp, null, 2)}`);
      }
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
if (require.main === module) {
  run();
}