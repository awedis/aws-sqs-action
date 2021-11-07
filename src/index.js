const core = require('@actions/core');
const AWS = require('aws-sdk');

function run() {
  try {
    const { getInput } = core;

    const accessKeyId = getInput('accessKeyId');
    const secretAccessKey = getInput('secretAccessKey');
    const region = getInput('region');
    const sqsUrl = getInput('url');
    const message = getInput('message');

    AWS.config.update({
      accessKeyId,
      secretAccessKey,
      region,
    });

    const params = {
      QueueUrl: sqsUrl,
      MessageBody: message,
    };
    
    const SQS = new AWS.SQS();
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