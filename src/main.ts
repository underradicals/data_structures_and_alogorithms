import LinkedList from "./data_structures/LinkedList/LinkedList.ts";

import './style.css'


const list = new LinkedList<number>(null, null);
list.append(2);
list.append(3);
list.prepend(4);
console.log(list);