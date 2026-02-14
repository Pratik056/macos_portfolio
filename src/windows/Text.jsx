import { WindowControls } from "#components";
import WindowsWrapper from "#hoc/WindowsWrapper";
import useWindowStore from "#store/Window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description = [] } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-4 overflow-auto max-h-[90vh]">
                {image && (
                    <div className="mb-4 flex justify-center">
                        <img
                            src={image}
                            alt={name}
                            className="h-auto w-full object-contain rounded-lg"
                        />
                    </div>
                )}
                {subtitle && (
                    <p className="text-lg font-medium text-gray-500 mb-3 text-center">
                        {subtitle}
                    </p>
                )}
                <div className="space-y-3 leading-relaxed text-lg text-gray-900">
                    {description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </>
    );
};

const TextWindow = WindowsWrapper(Text, "txtfile");

export default TextWindow;
