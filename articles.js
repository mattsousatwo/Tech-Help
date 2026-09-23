// ======================================================
// TECH HELP — KNOWLEDGE BASE
// ======================================================

const articles = [
    {
        id: "projector-no-picture",
        title: "Projector has no picture",
        category: "Projectors & Displays",
        icon: "display",
        keywords: [
            "projector",
            "display",
            "screen",
            "no picture",
            "no signal",
            "hdmi",
            "black screen"
        ],
        description: "Your computer is connected but nothing appears on the projector.",
        popular: true,
        steps: [
            {
                title: "Check the projector input",
                text: "Press Source Search or Input on the projector or remote and make sure the correct HDMI input is selected."
            },
            {
                title: "Reconnect the cable",
                text: "Disconnect the HDMI or USB-C adapter from your computer, wait a few seconds, and reconnect it."
            },
            {
                title: "Check your Mac displays",
                text: "Open System Settings → Displays and make sure the projector appears."
            },
            {
                title: "Restart the connection",
                text: "If the projector still has no picture, restart the projector and reconnect your computer after it finishes starting."
            }
        ]
    },

    {
        id: "projector-no-sound",
        title: "Projector has no sound",
        category: "Projectors & Displays",
        icon: "speaker",
        keywords: [
            "projector",
            "audio",
            "sound",
            "volume",
            "hdmi",
            "speaker",
            "no audio"
        ],
        description: "The picture works, but sound is coming from the computer or there is no sound.",
        popular: true,
        steps: [
            {
                title: "Check your audio output",
                text: "On your Mac, open System Settings → Sound → Output."
            },
            {
                title: "Select the projector",
                text: "Choose the projector, HDMI device, or display from the list of sound outputs."
            },
            {
                title: "Check projector volume",
                text: "Make sure the projector is not muted and increase its volume."
            },
            {
                title: "Reconnect HDMI",
                text: "Disconnect and reconnect the HDMI or USB-C adapter, then check Sound → Output again."
            }
        ]
    },

    {
        id: "projector-no-signal",
        title: "Projector says No Signal",
        category: "Projectors & Displays",
        icon: "signal",
        keywords: [
            "projector",
            "no signal",
            "signal",
            "hdmi",
            "usb-c",
            "adapter",
            "source",
            "input",
            "mac detects projector"
        ],
        description: "The projector is on, but it says No Signal or shows a blank input screen.",
        popular: false,
        steps: [
            {
                title: "Choose the correct source",
                text: "Press Source Search or Input on the projector or remote. Select the HDMI input connected to your computer."
            },
            {
                title: "Reconnect your adapter",
                text: "Unplug the HDMI or USB-C adapter from your computer, wait a few seconds, and reconnect it firmly."
            },
            {
                title: "Check whether your Mac sees the projector",
                text: "Open System Settings → Displays. If the projector appears there, the computer is detecting a display connection."
            },
            {
                title: "Try the cable again",
                text: "Disconnect and reconnect the HDMI cable at the wall plate, adapter, or display connection if it is easy to reach."
            },
            {
                title: "Restart the connection",
                text: "Restart the projector first. After it finishes starting, reconnect your computer."
            }
        ]
    },

    {
        id: "projector-blurry",
        title: "Projector image is blurry",
        category: "Projectors & Displays",
        icon: "focus",
        keywords: [
            "projector",
            "blurry",
            "blur",
            "fuzzy",
            "focus",
            "image",
            "text",
            "resolution"
        ],
        description: "The projector is showing an image, but text or video looks blurry or out of focus.",
        popular: false,
        steps: [
            {
                title: "Check the projector focus",
                text: "Use the projector's focus control and make small adjustments until text looks sharp."
            },
            {
                title: "Make sure the image is filling the screen normally",
                text: "If the image looks stretched or unusually small, check that the projector is using the normal classroom display source."
            },
            {
                title: "Check your Mac display setting",
                text: "Open System Settings → Displays and select a recommended resolution for the projector."
            },
            {
                title: "Clean only the outside of the lens",
                text: "If the lens looks dusty, gently wipe the outside with a clean microfiber cloth. Do not use sprays or liquids on the projector."
            },
            {
                title: "Submit a help request if focus will not improve",
                text: "If adjusting focus does not make the image sharper, the projector may need service or alignment."
            }
        ]
    },

    {
        id: "projector-video-garbled",
        title: "Video is too fast or audio sounds garbled",
        category: "Projectors & Displays",
        icon: "play",
        keywords: [
            "projector",
            "video",
            "youtube",
            "chrome",
            "safari",
            "fast",
            "sped up",
            "garbled",
            "distorted audio",
            "playback",
            "hardware acceleration",
            "graphics acceleration"
        ],
        description: "Video playback speeds up, freezes, or the audio becomes distorted while connected to a projector.",
        popular: false,
        steps: [
            {
                title: "Stop the video and reconnect the display",
                text: "Pause the video, disconnect the HDMI or USB-C adapter, wait a few seconds, reconnect it, and try again."
            },
            {
                title: "If you are using Chrome, turn off graphics acceleration",
                text: "Open Chrome → Settings → System. Turn off Use graphics acceleration when available, then choose Relaunch."
            },
            {
                title: "Try another browser",
                text: "If the problem continues in Chrome, try playing the same video in Safari."
            },
            {
                title: "Restart your Mac",
                text: "Restart the Mac with the projector disconnected. Sign back in, reconnect the projector, and test the video again."
            }
        ]
    },

    {
        id: "projector-wont-turn-on",
        title: "Projector won't turn on",
        category: "Projectors & Displays",
        icon: "power",
        keywords: [
            "projector",
            "power",
            "won't turn on",
            "wont turn on",
            "dead",
            "remote",
            "status light",
            "lamp",
            "flashing light"
        ],
        description: "The projector does not start when you press Power.",
        popular: false,
        steps: [
            {
                title: "Try the projector's Power button",
                text: "If the remote does not work, press the Power button directly on the projector or classroom control panel."
            },
            {
                title: "Check for status lights",
                text: "Look for Power, Status, Lamp, or Temperature lights. A flashing or warning light can help IT identify the problem."
            },
            {
                title: "Wait a minute and try again",
                text: "Some projectors need time to cool down before they can restart. Wait about a minute, then press Power once."
            },
            {
                title: "Check the room's projector power source",
                text: "If your classroom has a wall switch or power control for the projector, make sure it is turned on."
            },
            {
                title: "Submit a help request if warning lights remain",
                text: "Tell IT which lights are on or flashing and, if possible, include a photo."
            }
        ]
    },

    {
        id: "ipad-projector",
        title: "iPad won't display on the projector",
        category: "Projectors & Displays",
        icon: "ipad",
        keywords: [
            "ipad",
            "projector",
            "airplay",
            "screen mirroring",
            "mirror",
            "apple tv",
            "hdmi",
            "adapter",
            "wireless display"
        ],
        description: "Your iPad is not appearing on the classroom projector or wireless display.",
        popular: false,
        steps: [
            {
                title: "Open Screen Mirroring",
                text: "Swipe down from the top-right corner of the iPad and tap Screen Mirroring."
            },
            {
                title: "Choose the classroom display",
                text: "Select the correct Apple TV or classroom display from the list."
            },
            {
                title: "Check Wi-Fi",
                text: "Make sure the iPad is connected to the school Wi-Fi network."
            },
            {
                title: "If you are using an HDMI adapter",
                text: "Disconnect and reconnect the adapter, then make sure the projector is on the correct HDMI input."
            },
            {
                title: "Restart the iPad if the display is missing",
                text: "If the classroom display does not appear in Screen Mirroring, restart the iPad and try again."
            }
        ]
    },

    {
        id: "papercut-not-working",
        title: "FollowMe / PaperCut isn't working",
        category: "Printing",
        icon: "printer",
        keywords: [
            "printer",
            "printing",
            "papercut",
            "followme",
            "follow me",
            "print",
            "queue"
        ],
        description: "FollowMe is missing, PaperCut isn't connecting, or your print job isn't appearing.",
        popular: true,
        steps: [
            {
                title: "Check your connection",
                text: "Make sure your computer is connected to the school network."
            },
            {
                title: "Try FollowMe again",
                text: "Open the print window and check whether the FollowMe printer appears in the printer list."
            },
            {
                title: "Restart the application",
                text: "Quit the application you are printing from, reopen it, and try printing again."
            },
            {
                title: "Restart your computer",
                text: "If FollowMe is still missing or PaperCut isn't responding, restart your computer and try again."
            }
        ]
    },

    {
        id: "followme-print-missing",
        title: "FollowMe print isn't showing up",
        category: "Printing",
        icon: "printer",
        keywords: [
            "followme",
            "follow me",
            "followme print",
            "missing",
            "not showing",
            "not showing up",
            "printer",
            "printing",
            "papercut",
            "print option",
            "print queue"
        ],
        description: "FollowMe does not appear as an option when you try to print.",
        popular: false,
        steps: [
            {
                title: "Check the printer list",
                text: "Open the print window and select the Printer menu. Look for FollowMe in the list."
            },
            {
                title: "Make sure you are on the school network",
                text: "Check that your Mac is connected to the school network, then close and reopen the print window."
            },
            {
                title: "Quit and reopen the app",
                text: "Quit the app you are printing from, reopen it, and check the printer list again."
            },
            {
                title: "Restart your Mac",
                text: "Restart your Mac, sign back in, and check whether FollowMe appears."
            },
            {
                title: "Submit a help request if FollowMe is still missing",
                text: "If FollowMe still does not appear after restarting, IT may need to reinstall or repair the FollowMe printing setup on your Mac."
            }
        ]
    },

    {
        id: "print-job-not-showing",
        title: "Print job isn't showing at the printer",
        category: "Printing",
        icon: "printer",
        keywords: [
            "print job",
            "printer",
            "printing",
            "papercut",
            "followme",
            "follow me",
            "release",
            "queue",
            "job missing",
            "not showing"
        ],
        description: "You sent something to FollowMe, but the job does not appear when you sign in at the printer.",
        popular: false,
        steps: [
            {
                title: "Make sure you printed to FollowMe",
                text: "Open the document again and confirm that FollowMe was selected as the printer."
            },
            {
                title: "Wait a moment and check again",
                text: "A new print job can take a short time to reach PaperCut. Wait about 30 seconds, then refresh or sign in at the printer again."
            },
            {
                title: "Check the Mac print queue",
                text: "Open System Settings → Printers & Scanners, select FollowMe, and open the print queue. Look for a paused or failed job."
            },
            {
                title: "Try a small test print",
                text: "Send a simple one-page document to FollowMe. If the test job appears, try printing the original document again."
            },
            {
                title: "Submit a help request if no jobs appear",
                text: "Let IT know that FollowMe is available on your Mac but your jobs are not appearing at the printer."
            }
        ]
    },

    {
        id: "add-printer-mac",
        title: "Add a printer on Mac",
        category: "Printing",
        icon: "printer",
        keywords: [
            "add printer",
            "install printer",
            "mac",
            "macbook",
            "printer",
            "printing",
            "printers and scanners",
            "followme",
            "follow me"
        ],
        description: "You need to add or reconnect a printer on your Mac.",
        popular: false,
        steps: [
            {
                title: "Open Printers & Scanners",
                text: "Open System Settings → Printers & Scanners."
            },
            {
                title: "Choose Add Printer",
                text: "Click Add Printer, Scanner, or Fax and wait for the available printer list to load."
            },
            {
                title: "Choose the correct printer",
                text: "Select the printer you need only if you recognize its name. If you are trying to restore FollowMe and it is not listed, do not choose a different printer as a substitute."
            },
            {
                title: "Add the printer",
                text: "Click Add and wait for macOS to finish setting it up."
            },
            {
                title: "Ask IT if the printer is not listed",
                text: "If the printer or FollowMe option you need does not appear, submit a help request rather than changing advanced printer settings."
            }
        ]
    },

    {
        id: "printer-offline",
        title: "Printer says offline",
        category: "Printing",
        icon: "printer",
        keywords: [
            "printer offline",
            "offline",
            "printer",
            "printing",
            "not responding",
            "paused",
            "queue",
            "connection"
        ],
        description: "Your Mac shows the printer as offline or unavailable.",
        popular: false,
        steps: [
            {
                title: "Check the printer",
                text: "Make sure the printer is powered on and does not show an error such as a paper jam, open door, or empty paper tray."
            },
            {
                title: "Check your network connection",
                text: "Make sure your Mac is connected to the school network."
            },
            {
                title: "Check the print queue",
                text: "Open System Settings → Printers & Scanners, select the printer, and open the print queue. Resume the printer if it is paused."
            },
            {
                title: "Clear a failed job",
                text: "If one print job is stuck or showing an error, remove that job and try printing again."
            },
            {
                title: "Submit a help request if it stays offline",
                text: "If the printer remains offline, let IT know which printer you are trying to use and where it is located."
            }
        ]
    },

    {
        id: "chromebook-wifi",
        title: "Chromebook won't connect to Wi-Fi",
        category: "Chromebooks",
        icon: "wifi",
        keywords: ["chromebook", "wifi", "wi-fi", "internet", "network", "offline", "connection"],
        description: "The Chromebook cannot connect to Wi-Fi or keeps disconnecting.",
        popular: false,
        steps: [
            { title: "Check Wi-Fi", text: "Select the time in the bottom-right corner and make sure Wi-Fi is turned on." },
            { title: "Choose the school network", text: "Select the correct school Wi-Fi network and give the Chromebook a moment to connect." },
            { title: "Turn Wi-Fi off and back on", text: "Turn Wi-Fi off, wait about 10 seconds, then turn it back on and try again." },
            { title: "Restart the Chromebook", text: "Shut the Chromebook down completely, turn it back on, and try the network again." },
            { title: "Submit a help request if it still won't connect", text: "If other devices have internet but this Chromebook does not, send IT the Chromebook's asset tag if available." }
        ]
    },

    {
        id: "chromebook-frozen",
        title: "Chromebook is frozen",
        category: "Chromebooks",
        icon: "laptop",
        keywords: ["chromebook", "frozen", "freeze", "stuck", "not responding", "restart", "crashed"],
        description: "The Chromebook screen or an app is stuck and will not respond.",
        popular: false,
        steps: [
            { title: "Wait a few seconds", text: "Give the Chromebook about 15–30 seconds in case an app or webpage is temporarily busy." },
            { title: "Try closing the problem tab or app", text: "If the mouse still works, close the tab or app that is not responding." },
            { title: "Restart the Chromebook", text: "Select the time in the bottom-right corner, choose Power, then turn the Chromebook back on." },
            { title: "Force it off if necessary", text: "If nothing responds, press and hold the Power button until the Chromebook turns off. Wait a few seconds, then turn it back on." },
            { title: "Get help if freezing continues", text: "If the Chromebook repeatedly freezes after restarting, submit a help request and include the asset tag if available." }
        ]
    },

    {
        id: "chromebook-recovery-screen",
        title: "Chromebook shows a recovery screen",
        category: "Chromebooks",
        icon: "warning",
        keywords: ["chromebook", "recovery", "recovery screen", "chrome os missing", "damaged", "error", "restore"],
        description: "The Chromebook starts on a recovery or ChromeOS error screen.",
        popular: false,
        steps: [
            { title: "Don't erase the Chromebook", text: "If you see a recovery message, do not start a recovery or reinstall ChromeOS unless IT has instructed you to." },
            { title: "Restart once", text: "Turn the Chromebook off, wait a few seconds, and turn it back on." },
            { title: "Disconnect accessories", text: "Remove USB drives, adapters, or other accessories and try starting the Chromebook again." },
            { title: "Take a photo of the message", text: "If the recovery screen returns, take a clear photo of the message or error code." },
            { title: "Submit a help request", text: "Send IT the photo and the Chromebook's asset tag if available. The device may need ChromeOS recovery or repair." }
        ]
    },

    {
        id: "chromebook-powerwash",
        title: "Powerwash a Chromebook",
        category: "Chromebooks",
        icon: "warning",
        keywords: ["chromebook", "powerwash", "reset", "factory reset", "erase", "wipe"],
        description: "Reset a Chromebook when IT has instructed you to Powerwash it.",
        popular: false,
        warning: "Powerwash erases local data and resets the Chromebook. Only continue if IT has instructed you to do this.",
        steps: [
            { title: "Confirm you should Powerwash", text: "Make sure IT has asked you to reset this Chromebook. Files stored only in Downloads or other local locations can be erased." },
            { title: "Sign out", text: "Sign out of the Chromebook so you are back at the main sign-in screen." },
            { title: "Open the reset screen", text: "Press Ctrl + Alt + Shift + R." },
            { title: "Choose Restart", text: "Select Restart. When the reset window appears, choose Powerwash and then Continue." },
            { title: "Let the Chromebook finish", text: "The Chromebook will restart and return to its setup screen. If it is a school-managed Chromebook, follow your school's normal setup process or contact IT." }
        ]
    },

    {
        id: "mac-display",
        title: "Mac won't connect to a display",
        category: "MacBooks",
        icon: "macbook",
        keywords: [
            "mac",
            "macbook",
            "display",
            "monitor",
            "projector",
            "hdmi",
            "usb-c",
            "screen"
        ],
        description: "Your Mac isn't detecting a monitor, TV, or classroom display.",
        popular: true,
        steps: [
            {
                title: "Reconnect the adapter",
                text: "Disconnect the USB-C or HDMI adapter from your Mac and reconnect it."
            },
            {
                title: "Check Displays",
                text: "Open System Settings → Displays and look for the external display."
            },
            {
                title: "Check the display input",
                text: "Make sure the monitor, TV, or projector is using the correct HDMI or input source."
            },
            {
                title: "Restart your Mac",
                text: "Restart the Mac with the display disconnected, then reconnect it after signing in."
            }
        ]
    },

    {
        id: "mac-no-sound",
        title: "Mac has no sound",
        category: "MacBooks",
        icon: "speaker",
        keywords: ["mac", "macbook", "sound", "audio", "no sound", "speaker", "volume"],
        description: "There is no sound from the Mac or sound is going to the wrong device.",
        popular: false,
        steps: [
            { title: "Check the volume", text: "Use the volume controls and make sure the Mac is not muted." },
            { title: "Check the sound output", text: "Open Control Center → Sound and make sure the correct speakers or device are selected." },
            { title: "Disconnect unwanted audio devices", text: "Disconnect headphones, HDMI adapters, or Bluetooth audio devices you are not trying to use." },
            { title: "Quit and reopen the app", text: "Close the app or browser that has no sound, reopen it, and test again." },
            { title: "Restart the Mac", text: "If sound is still missing, restart the Mac. Submit a help request if the problem continues." }
        ]
    },

    {
        id: "mac-frozen",
        title: "Mac is frozen",
        category: "MacBooks",
        icon: "macbook",
        keywords: ["mac", "macbook", "frozen", "freeze", "stuck", "not responding", "force quit"],
        description: "An app or the entire Mac has stopped responding.",
        popular: false,
        steps: [
            { title: "Try Force Quit", text: "Press Option + Command + Esc. Select the app that is not responding and choose Force Quit." },
            { title: "Try the Apple menu", text: "If the Mac still responds, choose Apple menu → Restart." },
            { title: "Force the Mac off only if needed", text: "If the entire Mac is unresponsive, press and hold the power or Touch ID button until the Mac turns off." },
            { title: "Start it again", text: "Wait a few seconds, turn the Mac back on, and reopen only the apps you need." },
            { title: "Get help if it keeps freezing", text: "If the problem happens repeatedly, submit a help request and mention which app was being used when it froze." }
        ]
    },

    {
        id: "restart-mac",
        title: "Restart or force restart a Mac",
        category: "MacBooks",
        icon: "power",
        keywords: ["mac", "macbook", "restart", "reboot", "force restart", "power", "shut down"],
        description: "Restart a Mac normally or force it off when it is completely unresponsive.",
        popular: false,
        steps: [
            { title: "Restart normally when possible", text: "Choose Apple menu → Restart. This is the preferred way to restart a Mac." },
            { title: "If an app is blocking the restart", text: "Press Option + Command + Esc, Force Quit the problem app, then try Restart again." },
            { title: "Force it off only when frozen", text: "If the Mac does not respond at all, press and hold the power or Touch ID button until the screen turns off." },
            { title: "Wait before turning it back on", text: "Wait about 10 seconds, then press the power button once to start the Mac." }
        ]
    },

    {
        id: "chrome-video-playback",
        title: "Chrome video playback problems",
        category: "MacBooks",
        icon: "play",
        keywords: ["mac", "macbook", "chrome", "video", "youtube", "garbled audio", "fast video", "projector", "graphics acceleration", "hardware acceleration"],
        description: "Video freezes, plays too fast, will not start, or has garbled audio in Chrome.",
        popular: false,
        steps: [
            { title: "Reload the page", text: "Reload the webpage and try the video again." },
            { title: "Reconnect the display if one is attached", text: "If you are using a projector or monitor, disconnect and reconnect the display cable or adapter." },
            { title: "Try Safari", text: "Open the same video in Safari. If it works there, the issue is likely limited to Chrome." },
            { title: "Turn off Chrome graphics acceleration", text: "In Chrome, open Settings → System and turn off Use graphics acceleration when available, then relaunch Chrome." },
            { title: "Restart the Mac", text: "If playback is still broken, restart the Mac and test again." }
        ]
    },

    {
        id: "chromebook-wont-start",
        title: "Chromebook won't turn on",
        category: "Chromebooks",
        icon: "laptop",
        keywords: [
            "chromebook",
            "chrome",
            "power",
            "won't turn on",
            "black screen",
            "dead",
            "startup"
        ],
        description: "The Chromebook appears dead, has a black screen, or won't start.",
        popular: true,
        steps: [
            {
                title: "Connect the charger",
                text: "Plug the Chromebook into power and leave it connected for a few minutes."
            },
            {
                title: "Try the power button",
                text: "Press the power button once and wait several seconds."
            },
            {
                title: "Perform a hardware reset",
                text: "Hold Refresh and tap Power. Release Refresh when the Chromebook begins starting."
            },
            {
                title: "Try another charger",
                text: "If available, test with another compatible Chromebook charger."
            }
        ]
    }
    ,
    {
        id: "ipad-wont-turn-on",
        title: "iPad won't turn on",
        category: "iPads",
        icon: "ipad",
        keywords: ["ipad", "power", "won't turn on", "black screen", "battery", "charging"],
        description: "The iPad has a black screen or will not power on.",
        popular: false,
        steps: [
            { title: "Connect the charger", text: "Plug the iPad into a known-working charger and power outlet." },
            { title: "Let it charge", text: "Leave it connected for at least 15–20 minutes if the battery may be completely drained." },
            { title: "Try turning it on", text: "Press and hold the top button until the Apple logo appears." },
            { title: "Try a force restart", text: "On an iPad without a Home button: quickly press Volume Up, quickly press Volume Down, then hold the top button until the Apple logo appears. On an iPad with a Home button: hold the Home and top buttons together until the Apple logo appears." },
            { title: "Submit a help request", text: "If the iPad still shows no sign of power, send IT the device or asset information if available." }
        ]
    },

    {
        id: "ipad-frozen",
        title: "iPad is frozen",
        category: "iPads",
        icon: "ipad",
        keywords: ["ipad", "frozen", "freeze", "stuck", "not responding", "force restart"],
        description: "The iPad screen or an app is stuck and does not respond.",
        popular: false,
        steps: [
            { title: "Wait a few seconds", text: "Give the app a moment in case it is temporarily busy." },
            { title: "Return to the Home Screen", text: "Swipe up from the bottom of the screen, or press the Home button on iPads that have one." },
            { title: "Close the problem app", text: "Open the app switcher and swipe the problem app away, then reopen it." },
            { title: "Force restart if the whole iPad is frozen", text: "Without a Home button: quickly press Volume Up, quickly press Volume Down, then hold the top button until the Apple logo appears. With a Home button: hold Home and the top button until the Apple logo appears." },
            { title: "Get help if it keeps happening", text: "Submit a help request if the iPad repeatedly freezes after restarting." }
        ]
    },

    {
        id: "ipad-connect-projector",
        title: "Connect an iPad to a projector",
        category: "iPads",
        icon: "ipad",
        keywords: ["ipad", "projector", "display", "hdmi", "adapter", "screen mirror", "screen mirroring"],
        description: "Display an iPad on a classroom projector or display.",
        popular: false,
        steps: [
            { title: "Turn on the classroom display", text: "Turn on the projector or display and choose the classroom's normal input or source." },
            { title: "Connect the iPad", text: "If the room uses a cable, connect the correct USB-C or Lightning display adapter and HDMI cable to the iPad." },
            { title: "For wireless displays, open Screen Mirroring", text: "Open Control Center, select Screen Mirroring, and choose the classroom display if it appears." },
            { title: "Check Wi-Fi for wireless mirroring", text: "Make sure the iPad is connected to the school Wi-Fi network." },
            { title: "Reconnect if there is no picture", text: "Disconnect and reconnect the adapter or stop and restart Screen Mirroring. Submit a help request if the display still does not appear." }
        ]
    },

    {
        id: "ipad-airplay-not-working",
        title: "AirPlay or Screen Mirroring isn't working",
        category: "iPads",
        icon: "display",
        keywords: ["ipad", "airplay", "screen mirroring", "mirror", "projector", "display", "wireless"],
        description: "The classroom display does not appear in Screen Mirroring or the connection fails.",
        popular: false,
        steps: [
            { title: "Check Wi-Fi", text: "Make sure the iPad is connected to the school Wi-Fi network." },
            { title: "Open Screen Mirroring again", text: "Open Control Center → Screen Mirroring and wait a few seconds for available displays to appear." },
            { title: "Make sure the classroom display is ready", text: "Turn on the projector or display and make sure its wireless display or AirPlay setup is active if your room uses it." },
            { title: "Turn Wi-Fi off and back on", text: "On the iPad, turn Wi-Fi off, wait about 10 seconds, then turn it back on and try again." },
            { title: "Restart the iPad", text: "Restart the iPad if the display is still missing. If other iPads also cannot connect, submit a help request for the classroom display." }
        ]
    },

    {
        id: "no-internet",
        title: "No internet connection",
        category: "Internet & Wi-Fi",
        icon: "wifi",
        keywords: ["internet", "wifi", "wi-fi", "offline", "network", "no internet", "connection"],
        description: "Your device cannot get online.",
        popular: false,
        steps: [
            { title: "Check Wi-Fi", text: "Make sure Wi-Fi is turned on and that you are connected to the school network." },
            { title: "Try another website", text: "Open a different website to make sure the problem is not limited to one site." },
            { title: "Reconnect to Wi-Fi", text: "Turn Wi-Fi off, wait about 10 seconds, then turn it back on and reconnect." },
            { title: "Restart the device", text: "Restart your MacBook, Chromebook, or iPad and test the connection again." },
            { title: "Check whether others are affected", text: "If several devices in the same room have no internet, submit a help request and include the room number or location." }
        ]
    },

    {
        id: "wifi-connected-no-internet",
        title: "Wi-Fi is connected but internet isn't working",
        category: "Internet & Wi-Fi",
        icon: "wifi",
        keywords: ["wifi", "wi-fi", "connected", "no internet", "internet", "network", "website"],
        description: "The device shows Wi-Fi as connected, but websites or online apps do not work.",
        popular: false,
        steps: [
            { title: "Try another website", text: "Open a different website or service. One website may be temporarily unavailable even when your internet is working." },
            { title: "Turn Wi-Fi off and back on", text: "Turn Wi-Fi off, wait about 10 seconds, then turn it back on." },
            { title: "Reconnect to the school network", text: "Make sure the device reconnects to the correct school Wi-Fi network." },
            { title: "Restart the device", text: "Restart the device and test again." },
            { title: "Check another device", text: "If multiple devices in the room show the same problem, submit a help request with the room or location." }
        ]
    },

    {
        id: "ethernet-not-working",
        title: "Ethernet isn't working",
        category: "Internet & Wi-Fi",
        icon: "network",
        keywords: ["ethernet", "wired", "network", "internet", "cable", "adapter", "no internet"],
        description: "A device connected with an Ethernet cable is not getting a network connection.",
        popular: false,
        steps: [
            { title: "Check both ends of the cable", text: "Make sure the Ethernet cable is firmly connected to the device or adapter and to the wall jack or network connection." },
            { title: "Reconnect the adapter", text: "If you are using a USB-C Ethernet adapter, unplug it from the computer and reconnect it." },
            { title: "Look for obvious cable damage", text: "Check for a broken connector, loose clip, crushed cable, or exposed wires. Do not continue using a visibly damaged cable." },
            { title: "Restart the device", text: "Restart the computer or connected device and test the connection again." },
            { title: "Submit a help request", text: "If Ethernet still does not work, tell IT the room, wall jack or device location, and whether Wi-Fi works on the same device." }
        ]
    }

];
