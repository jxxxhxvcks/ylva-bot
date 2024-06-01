module.exports = {
    name: "ping",
    code: `
    $title[Pong!]
    $description[Meu ping está em \`$ping ms\`]
    $color[#cebfa2]
    $addTimestamp
    $reply[$messageID;true]
    `
};