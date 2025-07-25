
import React from "react";

export default function RoboticsAI() {
  return (
    <div
      className="relative flex w-full min-h-screen flex-col bg-[#111518] overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full flex-grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#293238] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="w-4 h-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              HealthTech Solutions
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              {['Products','Solutions','Resources','About Us'].map(label => (
                <a key={label} href="#" className="text-white text-sm font-medium leading-normal">
                  {label}
                </a>
              ))}
            </nav>
            <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-full h-10 px-4 bg-[#1993e5] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Contact Us</span>
            </button>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Intro */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                  Patient Monitoring Devices
                </p>
                <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                  Explore our range of advanced patient monitoring solutions designed to enhance patient care and improve outcomes.
                </p>
              </div>
            </div>

            {/* Vital Signs Monitors */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Vital Signs Monitors
            </h2>

            {/* Multi-Parameter Patient Monitor */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      Multi-Parameter Patient Monitor
                    </p>
                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                      Comprehensive monitoring of ECG, respiration, SpO2, NIBP, and temperature. Ideal for critical care settings.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] px-4 h-8 rounded-full bg-[#293238] text-white text-sm font-medium w-fit">
                    <span className="truncate">Learn More</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4vie-bcj9ecDY9pzY4ABgyMljxKX79pMLdat9V_KrEIlL7GvsyKlUjS-CSp8SC8v-m3P8s4MYRAnbd4BQAlJKcMGCpO4S0eUFzrZ0ToqMka-1eNNI_zL0UJ-LOCEpk4pEqGQGntXgsZ_Vvm3QWdQ-qavvs2M4uiKheDFR4i-tpvA1lVjGw-U-CqCYgC9OEjV4oZoxH_RZ-W2NBpRvXK4rti-BzJB9bEKHDNWjZqzbwc13HEynvNd7gO0hWKWoA3tC7U2yHbvtxMg")',
                  }}
                />
              </div>
            </div>

            {/* Wireless Vital Signs Monitor */}
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-base font-bold leading-tight">
                      Wireless Vital Signs Monitor
                    </p>
                    <p className="text-[#9daeb8] text-sm font-normal leading-normal">
                      Compact and portable monitor with wireless connectivity for continuous monitoring in various clinical environments.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] px-4 h-8 rounded-full bg-[#293238] text-white text-sm font-medium w-fit">
                    <span className="truncate">Learn More</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC59RwzNke2DYLh-JaaoKCncK5Pwwp_9-OOZtA4jkwESyU10hmarZWjnoT66stobnOrbuND1NDUg3zdvtstfBKTU9j04Jx9mROIfR9-mgT79-5uhgy5_SpQSyhWca8ipJtFj-VPzHMXT4twP4U3Vn65nGKW27JvlbUUsv229oyrH9ac_Y0meVz31z67oudenE-twzeTsTG8EncWbqgzlOwAIHo9GjwEcV4X9Fkmmgje-D5e_pLieRIEQUyREr-5pbOc5URXoynTWn4")',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
