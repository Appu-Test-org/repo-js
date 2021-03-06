const core = require('@actions/core');
const github = require('@actions/github');
// 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
const main = async () => {
  try {
    const org = core.getInput('owner', { required: true });
    const name = core.getInput('repo', { required: true });
//     const pr_number = core.getInput('pr_number', { required: true });
    const token = core.getInput('token', { required: true });
//     const name = core.getInput('name', { required: true });
    const octokit = new github.getOctokit(token);
    var data=await octokit.request(`UPDATE /repos/{org}/{name}/`, {
        owner: org,
        repo: name,
       visibility:'private'
        });
//     const data= await octokit.rest.repos.createInOrg({
//       org,
//       name,
//       visibility:'private'
//     });
    console.log(data);

   
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

// Call the main function to run the action
main();
