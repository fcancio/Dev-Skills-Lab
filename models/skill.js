const skills = [
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'JavaScript'},
];

module.exports = {
    getAll,
    getOne,
    create,
};

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};