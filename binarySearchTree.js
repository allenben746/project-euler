class Node {
    constructor(id, info) {
        this.id = id;
        this.info = info;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(id, info) {
        const newNode = new Node(id, info);

        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while(true) {
                if(id < current.id) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }
                else if (id > current.id) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
               else {
                   return undefined;
               }
            }
        }
    }

    search(id) {
        let current = this.root;
        let unresolved = true;

        while (unresolved && current) {
            if (id < current.id) {
                current = current.left;
            }
            else if (id > current.id) {
                current = current.right
            }
            else {
                unresolved = false;
            }
        }
        return current.info;
    }
}

const tree = new BinarySearchTree();
tree.root = new Node(64, {name: 'Klien', password: '$#RFDsaf02ef@R'});
tree.insert(23, {name: 'Ben', password: '%$#@Fadsasfdsgds'})
tree.insert(32, {name: 'James', password: '%$sdgf#@Fsfdfsdhgdsfsgds'})
tree.insert(43, {name: 'Fuller', password: '%$#@Fsfdsgdfsgds'})
tree.insert(4, {name: 'Kevin', password: '%$#@Fsfdsgds'})
tree.insert(54, {name: 'Butch', password: '%$#@Fsfdgfdshsgds'})
tree.insert(16, {name: 'Competont', password: '%$#@dassdfgfsfdsgds'})
tree.insert(110, {name: 'Trump', password: '%$#@dfgsdf'})
tree.insert(34, {name: 'Santa', password: '%$#@Fsfdsgds'})
tree.insert(33, {name: 'Tim', password: '%$#dgfs@Fsfgadgdsgfdsdafgds'})
tree.insert(5, {name: 'Allen', password: '%$#@Fsfdsfgdsgds'})
tree.insert(2, {name: 'Charlie', password: '%$#@Fsfdsgdfsgds'})
tree.insert(53, {name: 'Neil', password: '%$#@Fsfdvfdsgds'})
tree.insert(11, {name: 'Sandra', password: '%sdfg$#@Fsfddfsgdsgsgds'})
tree.insert(9, {name: 'Rudolphf', password: '%$#@Fsfsgfddsgds'})
tree.insert(41, {name: 'Dasher', password: '%$#@Fsfdsgds'})
tree.insert(36, {name: 'Vixin', password: '%$sgd#@fgsdg'})
tree.insert(45, {name: 'Coment', password: '%$#@Fsfdsgds'})
tree.insert(13, {name: 'Bliztin', password: '%$#@dsgdsgds'})