// objeto de estado modelo

let state = {
   query : {
      is_valid: false,
      nodes   : [
         {
            id     : 1,
            keyword: 'SELECT',
            content: '*'
         },
         {
            id     : 2,
            keyword: 'FROM',
            content: 'DEPTNO'
         }
      ]
      content: null,
      result : null,
   }
}
