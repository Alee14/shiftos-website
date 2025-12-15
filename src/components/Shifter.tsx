import React, { useState, useRef } from 'react';
import '../styles/shifter.css';

export default function Shifter() {
    const [sidebar, setSidebar] = useState(0);
    const [position, setPosition] = useState({
        x: window.innerWidth / 2 - 350,
        y: window.innerHeight / 2 - 250
    });
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef({ startX: 0, startY: 0 });

    function changeSidebar(window: number) {
        setSidebar(window);
    }

    function applyButton() {

    }

    function closeButton() {

    }

    function testOption() {
      console.log('Colour changed to red')
        var r = document.querySelector(':root');
        r.style.setProperty('--titlebar-colour', 'red');
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        dragRef.current = {
            startX: e.clientX - position.x,
            startY: e.clientY - position.y
        };
    };

    React.useEffect(() => {
        if (isDragging) {
            const handleMouseMoveWrapper = (e: MouseEvent) => {
                setPosition({
                    x: e.clientX - dragRef.current.startX,
                    y: e.clientY - dragRef.current.startY
                });
            };

            const handleMouseUpWrapper = () => {
                setIsDragging(false);
            };

            window.addEventListener('mousemove', handleMouseMoveWrapper);
            window.addEventListener('mouseup', handleMouseUpWrapper);

            return () => {
                window.removeEventListener('mousemove', handleMouseMoveWrapper);
                window.removeEventListener('mouseup', handleMouseUpWrapper);
            };
        }
    }, [isDragging]);

    function sidebarContent(): React.ReactNode {
        switch (sidebar) {
            case 0:
                return (
                    <>
                        <div className="shifter-welcome">
                        <h1 style={{ fontSize: 30, margin: 0 }}>Welcome to the Shifter!</h1>
                            <p style={{ fontSize: 14 }}>The shifter is an application that allows you to modify various features in ShiftOS.
                                Initially the user interface of ShiftOS is very dull however you can use the Shifter and
                                various sub programs within the Shifter such as the "Colour Picker" to improve the
                                appearance of ShiftOS.</p>
                            <p style={{ fontSize: 14 }}>The basic process of modifying your ShiftOS interface is very simple. You first choose a
                                main category on the left which will bring up a list of sub categories. Next select a
                                sub category to display your list of customization options. Once you have modified the
                                appropriate settings click Apply Changes to confirm your choices.</p>
                        </div>
                        <div className="shifter-codepoints">
                            <h2 style={{ fontSize: 20, margin: 0 }}>You can earn codepoints using the Shifter!</h2>
                            <p style={{ fontSize: 15 }}>That's right! Simply by customizing your ShiftOS interface you can earn as many
                                codepoints as you like. The amount of codepoints you earn will be calculated and
                                displayed the moment you press "Apply Changes". The more time you spend customizing the
                                more codepoints you will earn!</p>
                        </div>
                    </>
                )
            case 1:
                return (
                    <>
                        <div>
                            Window Preview
                        </div>
                        <div className="shifter-window-sidebar">
                            <div className="shifter-window-buttons">
                                <a onClick={() => console.log("Title Bar")}>Title Bar</a>
                                <a onClick={() => console.log("Title Text")}>Title Text</a>
                                <a onClick={() => console.log("Buttons")}>Buttons</a>
                                <a onClick={() => console.log("Borders")}>Borders</a>
                            </div>
                            <div>
                              <a onClick={() => testOption()}>Test</a>
                              Content
                            </div>
                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        <h1>Global Settings Reset!</h1>
                        <p>After spending hours customizing ShiftOS you may want to reset all settings to their default values so you can have a clean slate.
                            Remember that once you reset your settings you can't undo your actions so only do so if you truly want to abandon all the customizations you have made to ShiftOS.</p>
                        <a>Reset All Settings</a>
                        <p><b>Warning! A Global Reset Is Irreversible!</b></p>
                    </>
                )
        }
    }


    return (
        <>
            <div className="window draggable" style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'default'
            }}>
                <div className="titlebar" onMouseDown={handleMouseDown}>
                    <div className="titlebar-text">Shifter</div>
                    <div className="titlebar-buttons">
                        <div className="titlebar-box titlebar-box-link" onClick={() => closeButton()}></div>
                    </div>
                </div>
                <div className="content">
                    <div className="sidebar">
                        <div className="sidebar-content">
                            <a className="shifter-button" onClick={() => changeSidebar(1)}>Windows</a>
                            <a className="shifter-button" onClick={() => changeSidebar(2)}>Reset</a>
                        </div>
                        <a onClick={() => applyButton()}>Apply Changes</a>
                    </div>
                    <div className="shifter-body">
                        {sidebarContent()}
                    </div>
                </div>
            </div>
        </>
    )
}
