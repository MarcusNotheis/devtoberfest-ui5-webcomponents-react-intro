import "@ui5/webcomponents/dist/Button.js";

export function ButtonsUI5() {
    // these two values are calculated
    const button1ShouldBeDisabled = false;
    const button2ShouldBeDisabled = true;
    return (
        <>
            <ui5-button
                onClick={() => alert("I'll be there onClick!")}
                disabled={button1ShouldBeDisabled || undefined}
            >
                Click me!
            </ui5-button>

            <ui5-button
                onClick={() => alert("I will never show up!")}
                disabled={button2ShouldBeDisabled || undefined}
            >
                But you can't click me!
            </ui5-button>
        </>
    );
}