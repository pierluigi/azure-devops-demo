# GitHub For Teams Demo Repository

Basic Node App built with Azure DevOps for showcasing the GitHub Flow.

# Demo Flow

This repository is set up to illustrate a collaboration flow using GitHub Issues & Project Boards or the integration with [⚡️ Azure Board](https://dev.azure.com/pierluigi-github/GitHub%20Azure%20DevOps%20Demos/_boards/board/t/GitHub%20Azure%20DevOps%20Demos%20Team/Stories):

1) Create a new Issue (and link it to the Kanban Board) or Work Item; take note of the ID and `export ISSUE_ID="[ISSUE_ID_HERE]"`
2) Let's create a new branch locally starting from our `demo-init` branch which contains some predefined changes: 
```
git checkout -b ado-demo-$ISSUE_ID
git apply demo.patch

```
3) this creates a new local branch with some pre-modified changes. Commit the changes (using the `Fixes #123` syntax if using GitHub Issues or `Fixes AB#123` for Azure Boards) and push the new branch 
4) Open a Pull Request:
  - Codecov should report an increased threshold 
  - Snyk should fail because of the fixed version
  - `pjawesome` will be assigned as Code Owner for review – you can override this and assign to someone else
  - Azure Pipelines will build and automatically deploy to the Staging environment
5) Using suggested changes, fix the package.json version by restoring the `^` sign
6) Approve the PR and wait for the staging environment to be available

If you merge the PR (optional) it is recommended to create a new Pull Request (`master` is a protected branch) that commits the "revert" of the same demo patch to restore `master` to the initial state: simply do a `git apply -R demo.patch`, create a new branch, commit and merge. 

# Forking this Repository

Feel free to fork this repo for personal demos. The master branch contains the Azure Pipelines build YAML files (`ado-*.yaml`) while the release pipeline JSON files are under the `/pipelines` folder - you can use the Azure Pipelines import function to import and create the 2 pipelines.

# Codecov 

Code Coverage on `master`
[![codecov](https://codecov.io/gh/pierluigi/azure-devops-demo/branch/master/graph/badge.svg)](https://codecov.io/gh/pierluigi/azure-devops-demo)

# Azure DevOps Pipelines

Build status for `master`
[![Build Status](https://dev.azure.com/pierluigi-github/GitHub%20Azure%20DevOps%20Demos/_apis/build/status/Master?branchName=master)](https://dev.azure.com/pierluigi-github/GitHub%20Azure%20DevOps%20Demos/_build/latest?definitionId=6?branchName=master)

# Snyk Vulnerability Report
 [![Known Vulnerabilities](https://snyk.io/test/github/pierluigi/azure-devops-demo/badge.svg)](https://snyk.io/test/github/pierluigi/azure-devops-demo) 

# Deployment slots

| Environment | URL |
| ----------- | --- | 
| Production (via manual approval) | https://pierluigi.azurewebsites.net |
| Preview (CD merge) | https://pierluigi-preview.azurewebsites.net |
| Staging (CD for PRs) | https://pierluigi-staging.azurewebsites.net |


# Notes
All is great here.
