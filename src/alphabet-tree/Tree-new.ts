export default class Tree {
  children: any = new Map()
  parent: string = null
  id: number = Math.floor(Math.random() * Date.now())
  char: string = 'a'

  constructor(char: string){
    if (!char || !char.trim().length) throw new Error('char must be a non-empty string')

    this.char = char
  }

  getChar(): string {
    return this.char
  }

  setChar(newChar: string ): string {
    if (!newChar || !newChar.trim().length) throw new Error('char must be a non-empty string')

    return this.char = newChar
  }

  getIdentifier(): number {
    return this.id
  }

  getChildren(): any[] {
    return Array.from(this.children.values())
  }

  getParent(): string {
    return this.parent
  }

  setParent(parent: any) {
    if(parent !== this.parent && (parent !== null || parent instanceof Tree))

    this.parent = parent;
  }

  getChildrenCount(): number {
    return this.children.size()
  }

  createChildNode(child: string) {
    const newNode = new Tree(child)
    this.children.set(newNode.id, newNode)

    //set a parent node
    newNode.parent = this.parent

    return newNode
  }

  private printTreeString(node: any, spaceCount: number = 0) {
    let str = '\n'

    node.children.forEach((child: any) => {
      str += `${' '.repeat(spaceCount)}${child.name}${this.printTreeString(child, spaceCount + 2)}`
    })

    return str
  }
}

const test1 = (keys: string[]) => {
  let t = new Tree('a')
    //Construct Trie
  // t.createTree(keys)
  console.log(JSON.stringify(t))
}

export { test1 }
