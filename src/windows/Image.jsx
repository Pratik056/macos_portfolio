import { WindowControls } from "#components";
import WindowsWrapper from "#hoc/WindowsWrapper";
import useWindowStore from "#store/Window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p>{name}</p>
            </div>

            <div className="preview">
                {imageUrl && (
                    <img src={imageUrl} alt={name} />
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowsWrapper(Image, "imgfile");

export default ImageWindow;
