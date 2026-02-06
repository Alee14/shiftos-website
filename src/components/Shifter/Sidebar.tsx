import { cssVariables } from '../../scripts/variables';

function resetSettings() {
  cssVariables.map((x) => {
    if (!x) return;
    localStorage.removeItem(x);
    document.documentElement.style.removeProperty(x);
  });
}

export function sidebarContent(sidebar: number): React.ReactNode {
  switch (sidebar) {
      case 0:
          return (
              <section className="welcome">
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
              </section>
          )
      case 1:
          return (
              <section className="windows">
                  <div className="template">
                    <div className="window" style={{ paddingBottom: 103 }}>
                      <div className="titlebar">
                          <div className="titlebar-text">Template</div>
                          <div className="titlebar-buttons"></div>
                      </div>
                    </div>
                  </div>
                  <div className="shifter-window-sidebar">
                      <aside className="shifter-window-buttons">
                          <a className="window-shifter-button" onClick={() => console.log("Title Bar")}>Title Bar</a>
                          <a className="window-shifter-button" onClick={() => console.log("Title Text")}>Title Text</a>
                          <a className="window-shifter-button" onClick={() => console.log("Buttons")}>Buttons</a>
                          <a className="window-shifter-button" onClick={() => console.log("Borders")}>Borders</a>
                      </aside>
                      <div className="window-setting-main">
                        <h3>Window Settings</h3>
                        <p>Welcome to the windows settings panel. Here you can modify the appearance of the controls that are displayed on your open windows.
                          Just select a sub option to the left to get started!</p>
                        <p>The preview window above will track your modifications live until you click "Apply Changes".</p>
                      </div>
                  </div>
              </section>
          )
      case 2:
          return (
              <section className="reset">
                  <h1>Global Settings Reset!</h1>
                  <p>After spending hours customizing ShiftOS you may want to reset all settings to their default values so you can have a clean slate.
                      Remember that once you reset your settings you can't undo your actions so only do so if you truly want to abandon all the customizations you have made to ShiftOS.</p>
                  <a className="reset-button" onClick={() => resetSettings()}>Reset All Settings</a>
                  <p><b>Warning! A Global Reset Is Irreversible!</b></p>
              </section>
          )
  }
}
