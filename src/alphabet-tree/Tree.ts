import Node from './Node';
import { getIndex, isCharacterALetter } from './helpers'

export class Tree {
  root: any;

  constructor() {
    this.root = new Node(''); //Root node
  }

createTree(keys: string[]) {
  const letters = keys.filter(x => isCharacterALetter(x))

  if (letters.length <= 0) throw new Error('No letters')

  letters.forEach(letter => {
    letter = letter.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    //Store the character index
    //Iterate the trie with the given character index,
    //If the index points to null
    //simply create a Node and go down a level
    for (let level=0; level<letter.length; level++){
      index = getIndex();

      if (currentNode.children[index] == null){
        currentNode.children[index] = new Node(letter[level]);
        console.log(String(letter[level]) + " inserted into loop");
      }
      currentNode = currentNode.children[index];
    }

    //Mark the end character as leaf node
    currentNode.markAsLeaf();
    // console.log(`'${letter}' inserted`);
  })

//   compareTree(): any {

//   }

//   formatTree(): any {

   }
 }


const test1 = (keys: string[]) => {
  let t = new Tree()
    //Construct Trie
  t.createTree(keys)
  console.log(JSON.stringify(t))
}

export { test1 }
