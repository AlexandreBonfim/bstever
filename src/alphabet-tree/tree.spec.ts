import { Tree, test1 }  from './Tree';

const mockAlphabet = ['a', 'Z',' ', 'e', 'D', 'I am test', 'f']

describe('Tree', () => {
    let instance: Tree;

    beforeEach(() => {
        instance = new Tree();
    });

    // test('should create a tree', () => {
    //     expect(instance).toBeInstanceOf(Tree);
    //     const tree = instance.createTree(mockAlphabet);
    //     expect(tree).toBeDefined();
    //     // expect(tree).toEqual();
    // });

    test('should return tree', () => { // see response
      expect(test1(mockAlphabet)).toEqual([])
    })
});
