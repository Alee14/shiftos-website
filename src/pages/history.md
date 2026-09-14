---
title: "ShiftOS: History"
description: ShiftOS started back in November 2013 when Philip Adams wanted to make a game based on Arch Linux. He originally wanted ShiftOS to be a Linux distro based on Arch Linux but then gave up on that idea due to it not being possible, so he started his own VB.NET program instead.
layout: ../layouts/Page.astro
---
# What was ShiftOS?
ShiftOS was a game developed by Philip Adams and other developers. The original goal was to go from a bare terminal to a graphical user interface with full desktop features.

# Background
![ShiftOS Original Logo](/assets/images/shiftos_arch.jpeg)

Back around 2013, Philip Adams was doing his series on Arch Linux Adventures, which was supposed to be a journey from just a terminal to a fully graphical user interface with desktop features; he once had the idea to make that journey integrated as a real Linux distribution.

The idea was that ShiftOS was able to change the computing experience on every boot like the desktop environment, window manager, software, and the theme. A lot of software would be pre-installed, but it will randomly be selected every time when the person turns on their computer or when it is live when revealing it to the user.

He explained this on the [Arch Linux forum](https://web.archive.org/web/20250811051808/https://bbs.archlinux.org/viewtopic.php?id=169391), but most people were critical of this. They thought it was too bloated as it would need to download a lot of packages every time it reboots the system, and they also have figured that he was too inexperienced with Linux distros as his ideas were too ambitious. So he decided to make his own game after realizing his distro idea alone won’t work.

# Initial Development
Philip started development around late 2013, and there was not much stuff added initially. The player starts by getting hijacked by a person who goes by “DevX”, and they then format their computer. After DevX introduces himself and the concept of the game, the player will be booted to the desktop, in which they have to go to the terminal by pressing CTRL + T. After entering the terminal the player can open Knowledge Input to gain codepoints which are needed for upgrading the desktop.

The first two versions of ShiftOS only includes the hijacking cutscene as a teaser for the game, the Knowledge Input, Terminal and Codepoints were added later on 0.0.3, Phil later added more features to ShiftOS, like in 0.0.4 there was an in-game store called the Shiftorium. It was used for purchasing upgrades for the desktop and the essential features for a desktop like the clock, panel (taskbar), window navigation and function, as well as a program menu were added to the game. Version 0.0.4 was one of the ShiftOS releases that took a major upgrade within the game mechanics.

# Logging Gate
When Philip released 0.0.3, there was a moment when the game went outside its world and into the real world. A few people in the community noticed that he was telling people off for cheating on Knowledge Input. Then some players decided to decompile the game, as in Visual Basic it was very easy to do. It was found that some code were added that were collecting user information. Within the code, it screenshots your computer screen, then it collects your computer info like its name, username, time, memory, OS, drive label, programs and even your personal files, and after it will send an email to a defunct email. But the interesting thing about this, was that the password of the account was not encrypted meaning stored in plain text, so because of that, anyone could have decompiled the game and find the password in the source code. He later made a post about it on the ShiftOS forums titled "Remember the days when ShiftOS was logged?". According to him, he loved having a "logging system" as it gave him an opportunity to see how many people were playing ShiftOS and how long they were playing it for, he also used it to catch cheaters. Although he was vague on how much information he was really collecting as he did not mention the other information that were collected.

Luckily in the next version, the code for it got removed, but the reason it got removed was most likely because of attempts at hacking the Google account after people figured out the password when they decompiled the game, and also the account got locked so no one got access to it. Philip was also scared that people would mention the logging code.

Now is running ShiftOS safe? Yes, it is safe, as long as the email is not active. The data collection code only runs between version 0.0.3 and 0.0.4.3. But if you're still very cautious about it, run it on a virtual machine.

# Growth
Later on 0.0.5, the features that would define ShiftOS started to be implemented. The Shifter was introduced into the game, and the player was able to customize their desktop, such as resizing the close button or changing the colour for the panel.

On 0.0.6, the now infamous Pong, TextPad, File Skimmer, and program icons were introduced. Those features were not interesting, but added more experience in ShiftOS. Pong was meant as a way to earn more code points since the user does not need to look up things from Knowledge Input. TextPad and File Skimmer were also added to make ShiftOS more of an operating system.

But in version 0.0.7, a huge feature was added, the ability to use images on the Shifter, which was called skinning. People started to replicate the look of popular operating systems like Windows XP and Windows 95, there were also original skins made too. Artpad was introduced so the player could make their own skins in-game rather than having to figure out how to make one outside the game. Another new feature was added called "Unity mode", in which they can toggle their real desktop. This meant it that was easier to make skins for ShiftOS rather than having to close the game to make a new skin. But after this release, Philip started to distance himself from the project.

At this point, Philip became burnt out from programming ShiftOS. He did not enjoy programming it due to reasons he mentioned in his last devlog video:

- He was not able to make enough money from donations to be sustainable, he wanted it to become a big hit within the gaming industry. The reason for him not being able to make money was that the fanbase was mostly made up of kids. Though, he was only able to make $25 AUD for the game, and at the loss of $13 so $5 in PayPal fees and $8 on the domain itself, and it left him $12 in profit.
- Another reason was that he didn't have any free time due to his other job also taking a lot of his time. He wanted ShiftOS to be a popular indie game, but it ended up having a small audience. He also hated programming, but loved the progress of ShiftOS, and showing off his work to the community.
- The industry moved on from hacking games (as he claimed), more interested in 3D realistic games. Also technological limitations was another thing as he claimed that the computer was being “stupid and slow”, and it just was not a bug in the code. This is most likely an issue with WinForms (a GUI framework) which has a lot of limitations.

# Community
After stating he was burnt out from developing ShiftOS, Philip decided to hand over the project to the community as he did not want it to die off, so he decided to make a competition to see who can make the best game so they can be a developer of the game. After the competition was completed, he picked two people to become developers, and one of them eventually became the lead developer of the game.

0.0.8 was eventually released which was the biggest release ever for ShiftOS, it introduced community-made games/software such as Dodge, and OrcWrite. It also had the Shiftnet, resizable windows, AppScape, web browser, audio player, video player, calculator, an in-game bitcoin parody currency (Bitnote), name changer, and viruses. Those features were implemented by Philip, the community developers also their own features implemented as well, which had way more features than Philip ever implemented.

It was also in this version where the game's lore was expanded. Although it was first seen when your computer gets hijacked, Philip decided to expand the storyline more when the Shiftnet was added. A character called MF (Maureen Fenn) contacts you, they tell you about in-game internet called the Shiftnet, after they then installs it into your system.

0.0.9 development soon started after, and the first alpha build introduced a new application menu, login screen, desktop icons, a crash screen, and scripting.

Unfortunately, issues started happening, the community was facing drama, and the game's codebase was becoming more problematic.

# Downfall
After 0.0.8, things were not going well. Some developers left ShiftOS due to burning out and community drama. The remaining developers who were still interested in the project wanted to switch away from the original codebase as it was very messy and unstable.

People also started to think ShiftOS was dead as in a poll, 8 wanted wanted it to be killed and 10 other people wanted to move it forward.

The game's codebase ended up getting rewritten as the original codebase was unsustainable. Although the game decided to go into a different direction as well, rather than relying on games to earn code points, hacking became the main focus. Development went well for a bit until it fell apart as the remaining developers had a different vision for the game.

# Criticisms
## Sloppy Code
Now the game's code was never flawless. The main reason Philip left ShiftOS was most likely how bad the game was coded. If you were to take a look at the game's code, you can see a lot of lines of code, most experienced programmers do not program like that. A ton of if statements, things implemented very badly, and hard code. This is most likely the reason it took Philip a long time to push out development updates.
## Pong Simulator (Lack of gameplay)
Another criticism about ShiftOS was that a lot of people said that ShiftOS was just a "Pong Simulator", this was because of how the game was not providing any interesting gameplay mechanics. It pretty much gives people the impression that it was only an OS simulator and by playing Pong for the most of the time, which you can get several upgrades, which does not fully satify the player's needs.

# Conclusion
These days, ShiftOS' revivals are pretty much non-existent, there have been revival attempts, but nearly all of them ended up not succeeding. Former ShiftOS users said that the concept of ShiftOS was basically an OS dressed up "game", and mostly playing pong for most of the game. The concept itself is unique as Philip wanted to make a game about an OS, but there were a lot of flaws such as the development time between versions were spread out which killed hype and interest, lack of gameplay, the codebase becoming messy, and community drama. Philip may not be able to make ShiftOS popular, but he inspired others to make games greater than ShiftOS.

# Changelog
0.0.1 + 0.0.2 (Nov 11 and 12 2013): Hijack screen + Intro to the game

0.0.3 (Nov 30 2013): Knowledge Input, Terminal, Codepoints

0.0.4 (Dec 21 2013): Shiftorium, Clock, Panel, Windows, Close, Program menu

0.0.5 (Feb 14 2014): Shifter, Roll-up, Colour picker

0.0.6 (Apr 10 2014): Program menu icons, Pong, TextPad, File Skimmer

0.0.7 (Aug 22 2014): Image skinning, Artpad, Unity mode, Minimize, Panel buttons

0.0.8 Beta 1.1 (Oct 11 2014): 

- Shiftnet
- Calculator
- Skin Loader
- Audio Player
- Video Player
- Web Browser
- Name Changer
- Icon Changer
- Skin Shifter
- Bitnote
- Viruses

0.0.8 (Jan 22 2015): 

phillips1012: (Retired)

- Created bitbucket repository

ThePCTransformer: (Gone)

- Added Unity button in AL
- OrcWrite

william.1008:

- Minimatch website
- Added OrcWrite
- Added Downloader and Installer
- Added progress bar to web browser
- Added trm and autorun.trm
- Improved Unity button in AL
- Bitnote site
- Bitnote digger fully working
- Rewrote labyrinth
- Added shiftnet storyline
- Added shiftomizer
- Added 0.0.8 apps to Shiftorium
- Added virus scanner
- Floodgate "Featured Floods" and program downloading
- SAA files
- New skinning system
- TRM file creation in TextPad
- Save converter
- Many Bug Fixes

rhobariii:

- ShiftOS crash concept (Fake crash)
- System information
- Many Bug Fixes

pfgshiftos:

- Added floodgate
- Added home page and history to Shiftnet
- Added 404 page to Shiftnet
- Added "Shiftnet can not find the web server" or something like that
- File skimmer icons + tempelate
- TRM scripts in file skimmer
- Shell scripts in file skimmer
- Added labyrinth
- Added a site no one knows about
- Simple idea for shiftnet storyline (Improved apon by william)
- Added show me [title], [message] command
- Pirateboat
- Added many programs as floods
- A few Bug Fixes

NarrodGaming:

- Unstable alias command
- 4dd3d t0t4ly l3g1t b1tn0t3 h4ck
- Coherence mode
- The Plague
- Bug Fixes

0.0.9 Alpha 1 (Mar 21 2015): Start menu, Desktop icons, crash screen, scripting


Credits:

Written by Andrew Lee and Ewin

Notice any errors? Make a [pull request](https://github.com/Alee14/shiftos-website/pulls)!

Last updated: September 14, 2026
