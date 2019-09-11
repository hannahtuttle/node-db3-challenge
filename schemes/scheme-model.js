const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find() {
    return db('schemes').then(schemes => {
        return schemes
    })
}

function findById(id) {
    return db('schemes').where('id', id)
   
}

function findSteps(id) {
    return db('schemes as s')
    .join('steps as st', 's.id', 'st.scheme_id')
    .where('s.id', id)
    .select('st.id','s.scheme_name', 'st.step_number', 'st.instructions')
     .then(steps => {
        return steps
    })
}

function add(schemes) {
    return db('schemes')
    .insert(schemes)
    
}

function update(changes, id){
    return db('schemes')
    .where({id}).update(changes)
    
}

function remove(id) {
    return db('schemes')
    .where({id})
    .delete()
   
}
function addStep(step, scheme_id) {
    return db('steps').where({scheme_id}).insert(step)
    .then(ids => ({ id: ids[0] }))
   
}