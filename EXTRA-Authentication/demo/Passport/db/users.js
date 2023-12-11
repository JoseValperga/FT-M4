var records = [
  { id: 1, username: 'franco', password: '1234', displayName: 'Fran', emails: [ { value: 'fran@example.com' } ] }
];

exports.findById = function(id, cb) {
  return new Promise(function (resolve, reject) {
    var idx = id - 1;
    if(records[idx]) {
      resolve(records[idx]);
    } else {
      reject(new Error('User ' + id + ' does not exist'));
    }
  })
}

/* la de arriba con async/await y try/catch

En la versión con async/await, la función findById devuelve 
directamente el valor en lugar de usar explícitamente resolve. 
Cuando una función está marcada como async, cualquier valor 
que se devuelva dentro de ella se envuelve automáticamente 
en una Promise resuelta. En este caso, si el usuario existe, 
se devuelve el registro directamente, y si el usuario no existe, 
se lanza un error.

exports.findById = async function(id) {
  try {
    // Calcula el índice restando 1 al ID proporcionado
    var idx = id - 1;

    // Verifica si existe un registro en la posición calculada del array 'records'
    if (records[idx]) {
      // Si existe, devuelve el registro correspondiente
      return records[idx];
    } else {
      // Si no existe, lanza un error indicando que el usuario no existe
      throw new Error('User ' + id + ' does not exist');
    }
  } catch (error) {
    // Captura cualquier error y devuelve una Promise rechazada con ese error
    throw error;
  }
}
*/


exports.findByUsername = function(username, cb) {
  return new Promise(function (resolve, reject) {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return resolve(record);
      }
    }
    return reject(null);
  });
}

/*
exports.findByUsername = async function(username) {
  try {
    // Itera sobre el array 'records' para buscar un registro con el nombre de usuario proporcionado
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      
      // Si se encuentra un registro con el nombre de usuario, devuelve ese registro
      if (record.username === username) {
        return record;
      }
    }

    // Si no se encuentra ningún registro con el nombre de usuario, lanza un error con valor nulo
    throw null;
  } catch (error) {
    // Captura cualquier error y lanza una Promise rechazada con ese error
    throw error;
  }
}
*/