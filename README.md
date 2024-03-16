Before you get started anything you need to create your NEW Application bot in https://discord.com/developers , Then copy and save your Application Bot's TOKEN (Please don't share this with anyone, Because whoever has it will have full access to your bot, for example they can Nuked your server!)
**Make sure that your Bot have access to the Intents in the Portal**

Now you need to install Javascript Environment Run (Node.js) in your Computer, Simply visit the https://nodejs.org and download the Verison 16.9 or higher, Because the Discord.js V14 is only valid in this version!

After the download is complete, Open your code Editor, I recommend for you to use Visual Studio Code, You can download this Application on your computer in https://code.visualstudio.com

Now Open your Toggle Panel with
```
CTRL + J 
```
Select the Terminal Option and Type
```
npm init -y
```
for creating `package.json` file to save your modules.

<hr>

Now you need to install all of required package/library such as Discord.js module with these commands below and waiting for each of them:

```
npm install discord.js
```
and then
```
npm install @discordjs/voice
```

<hr>

After the operation was processed with any error, please create a NEW file with
```
CTRL + Alt + Windows + N
```
and set the name to anything you want such as: `index.js`, `bot.js`, `main.js`

Then Upload the source of this repository along with your personal information for example: `botToken`, `prefix`, `voiceChannelId` and `rgbRoleId` in the [config.json](https://github.com/Masihdeveloper/Creating-Discord-Bot/blob/main/config.json) file

Finallly enter the following command in your terminal to run /executing your file and wait for response in the console log...
``` 
node fileName.js
```

🎉 Congratulations, your bot was successfully online for provide some exclusive features!



## Images
Ping & Uptime Command 

![Ping Command](https://github.com/Masihdeveloper/Creating-Discord-Bot/assets/100484009/e89b4627-4c00-43af-a0d5-b68ea2aac0f8)


Join to a Voice Channel 

![Join Voice Channel](https://github.com/Masihdeveloper/Creating-Discord-Bot/assets/100484009/1e96a076-da84-462d-af71-71b02b31fb92)


RGB Role 

![RGB Role](https://github.com/Masihdeveloper/Creating-Discord-Bot/assets/100484009/e4fa79c9-2271-4f8a-bd64-c56e98537ac7)


- If you have a problem while usign this source make sure your to DM me on Discord: [Masih#0258](https://discord.com/users/901765485341859911), I will help you and fix your issue ASAP!
- For get more information of How these codes work? you can simply check official guidelines in: https://discordjs.guide/
> Copyright (c): Masih 2022/12/16
