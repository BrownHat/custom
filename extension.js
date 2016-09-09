(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "BrownHat";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['wtf', 'fuck', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }
        
        bot.commands.moeCommand = {
          command: 'moe', 
          rank: 'user', 
          type: 'exact', 
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("Website http://moesocial.com");
            }
          }
        };
        
        bot.commands.abcCommand = {
          command: 'abc',  
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendchat("mao-chan!!");
            }
          }
        };
        
        bot.commands.discordCommand = {
          command: 'discord', 
          rank: 'user', 
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("https://discordapp.com/channels/217282275350544384/217282275350544384");
            }
          }
        };
        
        bot.commands.fbCommand = {
          command: 'fb', 
          rank: 'user', 
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("Fanpage http://facebook.com/MoeSocial");
            }
          }
        };
        
        bot.commands.ytCommand = {
          command: 'yt', 
          rank: 'user', 
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("Yumi Nightcore: http://bit.ly/yuminightcore");
            }
          }
        };
        
        bot.commands.q1Command = {
          command: 'q1', 
          rank: 'user', 
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("Have a pussy Italy!");
            }
          }
        };
        
        bot.commands.q2Command = {
          command: 'q2', 
          rank: 'user', 
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("Mọi người thường gọi Rei là con Rei");
            }
          }
        };
        
        bot.commands.yuiCommand = {
          command: 'yui', 
          rank: 'user', 
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("yui nii-sama là chủ nhân của tôi!!!!!");
            }
          }
        };
        
        bot.commands.maoCommand = {
          command: 'mao', 
          rank: 'user', 
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("Mao-chan xinh gái , là bé gái 10 tuổi có nhu cầu tuyển onii-chan, tuy nhiên lại bị LÕM :p");
            }
          }
        };
        
        // Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "Moe-chan",
      language: "english",
      chatLink: "https://raw.githubusercontent.com/BrownHat/custom/master/lang/en.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 2, // 1-200
      startupVolume: 0, // 1-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: false,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: false,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 5,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: false,
      commandCooldown: 1,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Temporary Message of the Day",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: ["Tham gia mạng xa hội Moe Social: http://moesoical.com","Nhớ play những video hợp lệ!!!",""],
      messageInterval: 5,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/BrownHat/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/BrownHat/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/BrownHat/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
