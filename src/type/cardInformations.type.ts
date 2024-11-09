export default interface CardInformationsType {
  cardNumber: CardInformationType
  cardDate: CardInformationType
  cardSecurityNumber: CardInformationType
}

export interface CardInformationType {
  value: string
  icon: "clipboard" | "success"
}