const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add
}

function find() {
    return db('schemes').then(schemes => {
        return schemes
    })
}

function findById(id) {
    return db('schemes').where('id', id)
    .then(scheme => {
        return scheme
    })
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
    .then(scheme => {
        return scheme
    })
}