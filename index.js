const core = require('@actions/core');
const github = require('@actions/github');
const aws = require('aws-sdk');

async function run() {
  try {
    const SQS = new aws.SQS();
    const sqsUrl = core.getInput('url');
    const message = core.getInput('message');
    const params = {
      QueueUrl: sqsUrl,
      MessageBody: message,
    };
    console.log('params =>', params);

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