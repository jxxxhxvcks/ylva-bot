module.exports = {
  name: "uptime",
  code: `
  Olá <@$authorID>, a minha última reinicialização foi há **$uptime**.
  $reply[$messageId;true]
  `
}