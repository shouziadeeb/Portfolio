import React, { useState } from "react";

const SettingsSidebar = () => {
  const [isDark, setIsDark] = useState(false);

  const mode = isDark ? "Dark" : "Light";

  const settingsList = [
    {
      name: mode + " Mode",
    },
  ];
  return (
    <main className="settings_sidebar">
      <div className="settings_content">
        <div>
          <div className="exit_btn">
            <IoMdClose
              onClick={() => {
                if (isDark) setIsDark(false);
              }}
            />
          </div>
          <ul>
            {settingsList.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SettingsSidebar;
