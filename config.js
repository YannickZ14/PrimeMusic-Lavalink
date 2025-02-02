

module.exports = {
  TOKEN: "",
  language: "de",
  ownerID: ["1123986321669632031", ""], 
  mongodbUri : "mongodb+srv://codex-in1:codex-in1@codex-in1.1bgxp.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Pegagus Clan Musik I Deutsch", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/v26JAgNeVA",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    {
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
