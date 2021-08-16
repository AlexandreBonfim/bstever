const isCharacterALetter = (char: string) => {
  return (/^[a-zA-Z]{1}$/).test(char)
}

const getIndex = () => {
  return Math.floor(Math.random() * Date.now())
 }

export { isCharacterALetter, getIndex }
