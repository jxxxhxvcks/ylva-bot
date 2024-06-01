module.exports = {
  name: "userinfo",
  aliases: ["ui"],
  code: `
  $title[Informações de $username[$mentioned[1;true]]]
  $thumbnail[$userAvatar[$mentioned[1;true]]]
  $color[#cebfa2]
  $addTimestamp
  $addField[Tag do usuário;\`$userTag[$mentioned[1]]\`]
  $addField[Data de Criação da Conta;\`$creationDate[$mentioned[1;true];date]\`]
  $addField[Entrou Nesse Servidor em;<t:$round[$math[$memberJoinDate[$authorID;$guildID]/1000]]:R>]
  `
}