// construcción de los nodos

const node_type_generator = function(sql){
   return Object.assign({},node_type,{sql});
}

// modelo definición de nodo
let node_type = {
   sql : '',
   id : 'sql-joined-with-'
   description : 'que hace'
   help : 'como se usa'
   allowed_left_siblings : [],
   allowed_right_siblings : [node_type_1,node_type_2]
};

// creado por el usuario 
let node = {
   node_type : 'Objecto clon del node_type elegido'
   id : 'uuid-runtime-generated'
}

let query = {
   nodes : [node1, node2],
   content : 'query construida en función de los nodos'
}

let state = {
   queries : [{
         id      : 0,
         content : 'aa bb',
         nodes   : [
            {
               content : '*'
               id      : 4,
               keyword : 'aa'
            },
            {
               content : '*'
               id      : 4,
               keyword : 'bb'
            }
         ]
      }
   ]
}