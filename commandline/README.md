## Command line

~ = /Users/username

commands are effectively functions. passing in parameters in the same way, but without parentheses/commas.

#### e.g.

**pwd** = present working directory
- outputs '/Users/richardfehrenbacher' (or whatever folder you're currently in. this is a path)
- command with no arguments

**ls** = list
- list the stuff in the current folder

**cd** = change directory
- jumps into new folder
- needs argument (folder you wanna go to)
    - **e.g.** cd Desktop

**relative paths** - if there's a 'netart' folder on my Desktop, I can navigate there from the desktop in terminal using cd netart. THis is a relative path.

**absolute path** - absolute paths start at the root
**e.g.** /~/Desktop/netart


**options** - built in little arguments you have to use a certain way. tell options and arguments apart as options start with - or --
- also called **'flags'** sometimes
- **ls -a** lists files AND hidden files
- hidden folders start with a . **e.g.** '.Trash'
- you'll see '.' and '..'. navigation tools. '..' is folder above. '.' is current folder
    - **e.g.** '../Documents' will take you out of current folder, back to one level up, and into documents.
    - '../../Documents' also works if you need to go up two levels.
- **-l** list display
- **ls -l -a** will show all files in list format
can also be written **ls -la**

**ping** shows packet deliveries to declared website e.g. **ping google.com** goes forever, unless declared otherwise with an option **e.g. ping google.com -c 3** goes three times. **-c** is count.

**CTRL-C** quits running program. some programs require you use **Q** instead

#### there are commands that will delete all of your shit and it's a nasty prank that nerds do so watch out nerd

**--h** will bring up help helpful suff about the command yr referencing. some help files r lazy. **node** has a bunch of helpful documentation in ther **-h** file

**man** is a command that opens other commands' manuals **e.g. man node**
- can only quit manual with **Q**

**mkdir** makes directory in the directory you're in (use path to **mkdir** in other directors) **e.g. mkdir poop**

**touch** makes a file wih no data **e.g. touch poop.jpg**

**text editors**
- lots of 'em, nick likes **nano** because it gives you instructions on how to use it at the bottom of the terminal. just type in **nano**

**rm** removes files. doesn't remove folders. **e.g. rm hello.txt**
- need a flag **-r** (recursive) to delete folders **e.g. rm -r poop**
#### doesn't put the files in your trash can. straight up removes them so be careful u beautiful baby

**-f** force it to do that shit.

if things require admin controls and you don't have them, you'll get an error message

**sudo** kind of like 'superuser do' i guess. dictates that you have admin privileges and will ask you for your password. **won't see your password being typed in the terminal**


### Networking
Protocols - bunch of rules
- **IMAP** - email. 'internet message access protocol'
- **VoIP** - voice over IP
- **BitTorrent**
- **HTTP**
- **whole bunch of other ones**

Most filesharing on the internet uses a server-client model using a centralized server that you gotta request. So the more popular things get the slower as well.

**BitTorrent** protocol allows you to connect to every other person with a bittorrent program open. Everybody's a peer (so a client and a server) so you can download pieces of the file from different people's servers. More peers = more places to get the file = faster download.

#### world wide web ≠ the Internet. internet is just computers connected together. this particular way of using it is the world wide web.

#### CURL

**curl** in terminal client **e.g. curl netart.rocks** returns the html to your terminal

can build our own server. get a raspberry pi that could be interesting

**nslookup** gets IP address of where site is hosted

**login to other computers from yours**
**e.g. ssh pi@192.168.1.17**

ssh pi (which is the computer we're logging into) @ the correct ip address

# Homework

codeacademy command line
codeacadmey git
