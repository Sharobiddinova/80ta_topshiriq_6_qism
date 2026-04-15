param(
  [Parameter(Mandatory = $true)]
  [string]$RepoUrl
)

Write-Host "[1/3] Remote tekshirilmoqda..."
$existing = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0 -or -not $existing) {
  git remote add origin $RepoUrl
} else {
  git remote set-url origin $RepoUrl
}

Write-Host "[2/3] main branchga o'tish..."
git branch -M main

Write-Host "[3/3] GitHubga push..."
git push -u origin main

Write-Host "Yakunlandi. Repo: $RepoUrl"
