import { useState } from 'react';
import '../styles/shifter.css';
export default function Shifter() {
  const [sidebar, setSidebar] = useState(0);

  function changeSidebar(window: number) {
    setSidebar(window);
  }

  function applyButton() {

  }

  function sidebarContent(): React.ReactNode {
    switch (sidebar) {
      case 0:
        return (
            <>
              <div className="shifter-welcome">
                  <h1>Welcome to the Shifter!</h1>
                  <p>The shifter is an application that allows you to modify various features in ShiftOS.
                      Initially the user interface of ShiftOS is very dull however you can use the Shifter and
                      various sub programs within the Shifter such as the "Colour Picker" to improve the
                      appearance of ShiftOS.</p>
                  <p>The basic process of modifying your ShiftOS interface is very simple. You first choose a
                      main category on the left which will bring up a list of sub categories. Next select a
                      sub category to display your list of customization options. Once you have modified the
                      appropriate settings click Apply Changes to confirm your choices.</p>
              </div>
              <div className="shifter-codepoints">
                  <h2>You can earn codepoints using the Shifter!</h2>
                  <p>That's right! Simply by customizing your ShiftOS interface you can earn as many
                      codepoints as you like. The amount of codepoints you earn will be calculated and
                      displayed the moment you press "Apply Changes". The more time you spend customizing the
                      more codepoints you will earn!</p>
              </div>
            </>
        )
      case 1:
        return (
          <>
            <h1>Windows Settings</h1>
          </>
        )
      case 2:
        return (
          <>
            <h1>Do you want to reset your settings?</h1>
          </>
        )
    }
  }


    return (
        <div>
            <div className="window">
                <div className="titlebar">
                    <div className="titlebar-text">Shifter</div>
                    <div className="titlebar-buttons">
                        <div className="titlebar-box titlebar-box-link"></div>
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
        </div>
    )
}
