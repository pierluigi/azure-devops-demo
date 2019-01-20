# Delete merged branch workflow

workflow "delete merged branch" {
  on = "pull_request"
  resolves = [
    "Filters for GitHub Actions",
    "SvanBoxel/delete-merged-branch@master",
  ]
}

action "SvanBoxel/delete-merged-branch@master" {
  needs = "Filters for GitHub Actions"
  uses = "SvanBoxel/delete-merged-branch@master"
  secrets = ["GITHUB_TOKEN"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@95c1a3b"
  args = "action closed"
}
