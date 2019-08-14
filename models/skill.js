const skills = [
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'JavaScript'},
];

module.exports = {
    getAll,
    getOne,
};

function getOne(id) {
    return skills[id];
};

function getAll() {
    return skills;
};