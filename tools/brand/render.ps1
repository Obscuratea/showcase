# Regenerates public/og.png and public/apple-touch-icon.png from the HTML sources here. Needs Microsoft Edge.
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$here = $PSScriptRoot
$pub  = Join-Path $here "..\..\public" | Resolve-Path
function Render($html, $png, $w, $h) {
  & $edge --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 "--window-size=$w,$h" "--screenshot=$png" ([uri](Join-Path $here $html)).AbsoluteUri 2>$null
}
Render "og.html" "$pub\og.png" 1200 630
Render "apple-touch.html" "$pub\apple-touch-icon.png" 180 180
