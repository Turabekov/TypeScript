class User15 {
    skills: string[];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills == "string") {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    }
}

new User15().addSkill("ddsds");

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
    if (typeof distance == "number") {
        return 1;
    } else {
        return "";
    }
}

run(12);
