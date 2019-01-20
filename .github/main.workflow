# Delete merged branch workflow

workflow "delete merged branch" {
  on = "pull_request"
  resolves = [
    "SvanBoxel/delete-merged-branch@master-1",
  ]
}

action "SvanBoxel/delete-merged-branch@master-1" {
  uses = "SvanBoxel/delete-merged-branch@master"
  secrets = ["GITHUB_TOKEN"]
}# Delete merged branch workflow
