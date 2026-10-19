
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Get inputs from action.yml
    const name = core.getInput('name', { required: true });
    const greeting = core.getInput('greeting') || 'Hello';

    // Get GitHub workflow information
    const actor = github.context.actor;
    const repository = github.context.repo.repo;
    const event = github.context.eventName;

    // Generate greeting message
    const message = `${greeting}, ${name}!`;

    // Display output in GitHub Actions logs
    core.info('Custom GitHub Action Started!');
    core.info(`Greeting Message: ${message}`);
    core.info(`Triggered by: ${actor}`);
    core.info(`Repository: ${repository}`);
    core.info(`Event: ${event}`);

    // Set the action output
    core.setOutput('message', message);

    core.info('Custom GitHub Action Completed Successfully!');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
