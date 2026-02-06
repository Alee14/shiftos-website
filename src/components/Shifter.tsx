import React, { useState, useRef } from 'react';
import { sidebarContent } from './Shifter/Sidebar';
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

      document.documentElement.style.setProperty(
        '--titlebar-colour',
        'red'
      );

      localStorage.setItem("--titlebar-colour", "red");

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

    return (
        <>
            <div className="window draggable" style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}>
                <div className="titlebar" onMouseDown={handleMouseDown}>
                    <div className="titlebar-text">Shifter</div>
                    <div className="titlebar-buttons">
                        <div className="titlebar-box titlebar-box-link" onClick={() => closeButton()}></div>
                    </div>
                </div>
                <div className="content">
                    <div className="sidebar">
                        <aside className="sidebar-content">
                            <a href="#windows" className="sidebar-button" onClick={() => changeSidebar(1)}>Windows</a>
                            <div className="sep"/>
                            <a href="#reset" className="sidebar-button" onClick={() => changeSidebar(2)}>Reset</a>
                            <div className="sep"/>
                        </aside>
                        <a href="#apply" className="shifter-button" onClick={() => applyButton()}>Apply Changes</a>
                    </div>
                    <div className="shifter-body">
                        {sidebarContent(sidebar)}
                    </div>
                </div>
            </div>
        </>
    )
}
