const db = require('../config/database');

class Product {
    
    static findAll(){
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM students' , (error, result)=>{
                if (error)  return reject(error);
                resolve(results[0]);
            })
        });
    }

    static findById(id) {
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM students WHERE id = ?', [id], (error, result)=>{
                if (error)  return reject(error);
                resolve(results[0]);
            })
        });
    }

    static create(newProduct){
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO products SET ?', newProduct, (error, result)=>{
                if (error)  return reject(error);
                resolve(results.insertId);
            })
        });
    }

    static update(id, updateProduct){
        return new Promise((resolve, reject)=>{
            db.query('UPDATE products SET ? WHERE id= ?', [updateProduct, id], (error, result)=>{
                if (error)  return reject(error);
                resolve(results);
            })
        });
    }

    static delete(id){
        return new Promise((resolve, reject)=>{
            db.query('DELETE FROM products SET WHERE id= ?', [id], (error, result)=>{
                if (error)  return reject(error);
                resolve(results);
            })
        });
    }

}

module.exports = Product;