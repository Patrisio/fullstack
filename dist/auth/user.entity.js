"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const projects_entity_1 = require("./projects.entity");
let User = class User extends typeorm_1.BaseEntity {
    async validatePassword(password) {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToMany(type => projects_entity_1.Project, project => project.users),
    __metadata("design:type", Array)
], User.prototype, "projects", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User.prototype, "project_id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "invite_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "all_count", void 0);
__decorate([
    typeorm_1.Column("jsonb", {
        array: false,
        default: () => "'[]'",
        nullable: false,
    }),
    __metadata("design:type", Array)
], User.prototype, "all_client_ids", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "unread_count", void 0);
__decorate([
    typeorm_1.Column("jsonb", {
        array: false,
        default: () => "'[]'",
        nullable: false,
    }),
    __metadata("design:type", Array)
], User.prototype, "unread_client_ids", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "opened_count", void 0);
__decorate([
    typeorm_1.Column("jsonb", {
        array: false,
        default: () => "'[]'",
        nullable: false,
    }),
    __metadata("design:type", Array)
], User.prototype, "opened_client_ids", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "assigned_count", void 0);
__decorate([
    typeorm_1.Column("jsonb", {
        array: false,
        default: () => "'[]'",
        nullable: false,
    }),
    __metadata("design:type", Array)
], User.prototype, "assigned_client_ids", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "closed_count", void 0);
__decorate([
    typeorm_1.Column("jsonb", {
        array: false,
        default: () => "'[]'",
        nullable: false,
    }),
    __metadata("design:type", Array)
], User.prototype, "closed_client_ids", void 0);
User = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['email'])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map