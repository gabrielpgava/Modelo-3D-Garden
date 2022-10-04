const modelViewerTransform = document.querySelector("model-viewer#transform");





const mouse = {
    x: 1,
    y: 0
};
const updateOrientation = () => {
    modelViewerTransform.orientation = `0deg ${mouse.y}deg ${mouse.x}deg`;
};

addEventListener('mousemove', () => {

    mouse.x = Math.round((event.clientX)/150);

    //mouse.y = (event.clientY / innerHeight);

    //mouse.x = lerp(0,mouse.x,1);

    console.log(mouse.x);


    updateOrientation();
});

