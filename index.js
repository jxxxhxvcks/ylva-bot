const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: process.env.TOKEN,
    prefix: "l.",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

client.loadCommands("./commands");

client.status({
    name: "seus comandos ପ૮{˶• ༝ •˶}აଓ",
    type: "LISTENING",
    time: 12
});

client.command({
    name: "<@1246137899452465243>",
    code: `
    Olá <@$authorID>, eu sou a **Ylva** meu prefixo é \`l.\` e ainda estou em fase de desenvolvimento :)
    $reply[$messageId;true]
    `,
    nonPrefixed: true
})