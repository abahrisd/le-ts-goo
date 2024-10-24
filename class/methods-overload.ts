class UserMO {
    skills: string[] = [];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills : string | string[]): void {
        if (Array.isArray(skillOrSkills)) {
            this.skills.concat(skillOrSkills);
        } else {
            this.skills.push(skillOrSkills);
        }
    }
}

function exec(param: string): string;
function exec(param: number): number;
function exec(param: string | number): string | number {
    if (typeof param === 'number') {
        return 1;
    } else {
        return 'a';
    }
}