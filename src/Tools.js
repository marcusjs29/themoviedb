import brokenImage from "./No-Image-Placeholder.svg.png";


export const validateImage = (path, image) => {
    return image == undefined ? brokenImage : path + image;
}