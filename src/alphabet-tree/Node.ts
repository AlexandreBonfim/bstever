export default class Node {
  children: string[];
  isEnd: boolean;
  char: string;

  constructor(char: string){
    this.children = [];
    // for(var i=0; i<26; i++){ //Total # of English Alphabets
    //   this.children[i]=null;
    // }
    this.isEnd = false; //will be true if the node represents the end
    this.char = char; //To store the value of a particular key
  }

  //Function to mark the currentNode as Leaf
  markAsLeaf(){
    this.isEnd = true;
  }
}

