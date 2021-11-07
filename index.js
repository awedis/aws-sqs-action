const core = require('@actions/core');
const github = require('@actions/github');

try {
  const sqsUrl = core.getInput('url');
  const message = core.getInput('message');

  console.log('sqsUrl =>', sqsUrl);
  console.log('message =>', message);
} catch (error) {
  core.setFailed(error.message);
}