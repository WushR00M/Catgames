const messages = [
	"I spent too much time making this",
	"Originally known as \"game5e5\" (ringing a bell?)",
	"For those who see me programming as a passion and call me a hacker, screw off",
	"My name is not Felix, get it right Cameran",
	"Sponsored by RAID SHADOW LEGENDS!",
	"It's funny how you keep reloading the page and getting different messages every time",
	"(technically) Since 2023",
	"meow",
	"Sonic Milkshakes are pretty good",
	"Owned by the #92,144 USA osu!mania Player",
	"I'll probably take this down during my Junior year (1-2 years away)",
	"Kids ask me how to make a proxy or how to delete GoGuardian, and I could tell them; but I think they're too stupid to understand literally anything I would say to them",
	"we ball",
	"Shoutout to Echo (3kh0), goated",
	"I still get death threats from people I know in-person for a YouTube video I made when I was 11",
	"Using Windows 11 or Microsoft Edge in the big 2026? God, you need help.",
	"Do what you want 'cause a pirate is free; you are a pirate!",
	"I can speak 3 languages!",
	"¡Puedo hablar tres idiomas!",
	"3つの言語を話せます！",
	"I wish I could take a lot of people I know in-person to court for emotional tramua",
	"ROBLOX kinda buns ngl",
	"When I say \"Made with 💙\", I'm lying very heavily",
	];
const randomIndex = Math.floor(Math.random() * messages.length);
const para = document.getElementById("randText");
para.textContent = messages[randomIndex];