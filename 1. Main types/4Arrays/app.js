"use strict";
const skills = ["Dev", "DevOps", "Testing"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res1 = skills
    .filter((s) => s !== "DevOps")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
console.log(res1);
