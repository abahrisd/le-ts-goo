"use strict";
class UserMO {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (Array.isArray(skillOrSkills)) {
            this.skills.concat(skillOrSkills);
        }
        else {
            this.skills.push(skillOrSkills);
        }
    }
}
function exec(param) {
    if (typeof param === 'number') {
        return 1;
    }
    else {
        return 'a';
    }
}
