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
];
