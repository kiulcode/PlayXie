const $VIDEO = document.getElementById("video-player")
const $PLAY = document.getElementById("play")
const $PAUSE = document.getElementById("pause")
const $BACKWARD = document.getElementById("backward")
const $FORWARD = document.getElementById("forward")
const $PROGRESS = document.getElementById("progress")

// Reproducir video
$PLAY.addEventListener("click", () => {
    $VIDEO.play()
    $PLAY.hidden = true
    $PAUSE.hidden = false
})

// Pausar video
$PAUSE.addEventListener("click", () => {
    $VIDEO.pause()
    $PAUSE.hidden = true
    $PLAY.hidden = false
})

// Retrocecder 10 segundos
$BACKWARD.addEventListener("click", () => {
    $VIDEO.currentTime -= 10
})

// Avanzar 10 segundos
$FORWARD.addEventListener("click", () => {
    $VIDEO.currentTime += 10
})

// Cargar valor maximo de la barra de progreso de acuerdo a la metadata del video
$VIDEO.addEventListener("loadedmetadata", () => {
    $PROGRESS.max = $VIDEO.duration
})

// Actualizar la barra de progreso cuando el video se esta reproduciendo
$VIDEO.addEventListener("timeupdate", () => {
    $PROGRESS.value = $VIDEO.currentTime
})

// Adelantar y retroceder con la barra de progreso
$PROGRESS.addEventListener("input", () => {
    $VIDEO.currentTime = $PROGRESS.value
})
