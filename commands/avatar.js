module.exports = {
  name: "avatar",
  code: `
  $title[Avatar de $username[$mentioned[1;true]]]
  $image[$userAvatar[$mentioned[1;true]]]
  $color[#cebfa2]
  $reply[$messageID;true]
  $addButton[1;Abrir no navegador;link;https://discord.gg/;false]
  `
}