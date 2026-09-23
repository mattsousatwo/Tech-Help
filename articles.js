// ======================================================

// TECH HELP — KNOWLEDGE BASE

// ======================================================

const articles = [
    {
        id: "projector-no-picture",
        title: "Projector has no picture",
        category: "Projectors & Displays",
        icon: "monitor",
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
        icon: "volume",
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
        id: "mac-display",
        title: "Mac won't connect to a display",
        category: "MacBooks",
        icon: "laptop",
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
