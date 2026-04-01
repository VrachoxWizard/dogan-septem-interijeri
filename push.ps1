$gitPath = "C:\Program Files\Git\cmd\git.exe"
if (-Not (Test-Path $gitPath)) {
  $gitPath = "C:\Program Files (x86)\Git\cmd\git.exe"
}
if (-Not (Test-Path $gitPath)) {
  $gitPath = "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
}

if (Test-Path $gitPath) {
  Write-Host "Using git from $gitPath"
  & $gitPath init
  & $gitPath add .
  & $gitPath commit -m "first commit"
  & $gitPath branch -m main
  & $gitPath remote add origin https://github.com/VrachoxWizard/dogan-septem-interijeri.git
  & $gitPath push -u origin main
} else {
  Write-Host "GIT_NOT_FOUND_ERROR: Git executable not found in common locations."
}
