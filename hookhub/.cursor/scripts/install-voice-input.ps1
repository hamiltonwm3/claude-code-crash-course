# Installs the missing Cursor voice-processor.js AudioWorklet file.
# Cursor 3.2.x fails voice input with net::ERR_FILE_NOT_FOUND without this file.

$ErrorActionPreference = "Stop"

$source = Join-Path $PSScriptRoot "..\voice\voice-processor.js"
$source = (Resolve-Path $source).Path

$cursorRoots = @(
    "$env:LOCALAPPDATA\Programs\cursor\resources\app",
    "$env:LOCALAPPDATA\Programs\Cursor\resources\app"
)

$targetRelative = "out\vs\workbench\contrib\composer\browser\voice\voice-processor.js"
$installed = $false

foreach ($root in $cursorRoots) {
    if (-not (Test-Path $root)) {
        continue
    }

    $targetDir = Join-Path $root "out\vs\workbench\contrib\composer\browser\voice"
    $target = Join-Path $root $targetRelative

    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    Copy-Item -Path $source -Destination $target -Force
    Write-Host "Installed voice processor to: $target"
    $installed = $true
}

if (-not $installed) {
    Write-Error "Cursor installation not found. Expected one of: $($cursorRoots -join ', ')"
}

Write-Host ""
Write-Host "Voice input fix installed. Restart Cursor, then:"
Write-Host "  1. Click the microphone icon in the chat input, or press Ctrl+M"
Write-Host "  2. Grant microphone permission if prompted"
Write-Host "  3. Voice input requires a Cursor Pro plan or higher"
Write-Host ""
Write-Host "Re-run this script after Cursor updates (updates may remove the file)."
