#!/ur/bin/env node

const { execSync } = require('child_process')

const runCommand = (command:string)=>{
    try {
        execSync(`${command}`, {studio: 'inherit'})
    } catch (error) {
        console.error(`Failed to execute ${command}`, error)
        return false
    }
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/dev-shajid/create-next-shajid ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with name ${repoName}`)

const checkdOut = runCommand(gitCheckoutCommand)
if(!checkdOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)
const installed = runCommand(installDepsCommand)
if(!installed) process.exit(-1);

console.log(`Congratulations! You are ready. Follow the following commands to start`)
console.log(`cd ${repoName} && npm start`)