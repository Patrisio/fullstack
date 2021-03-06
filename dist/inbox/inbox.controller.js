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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboxController = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const inbox_service_1 = require("./inbox.service");
const message_dto_1 = require("./dto/message.dto");
const assigned_dto_1 = require("./dto/assigned.dto");
const client_data_dto_1 = require("./dto/client-data.dto");
const channel_dto_1 = require("./dto/channel.dto");
let InboxController = class InboxController {
    constructor(inboxService) {
        this.inboxService = inboxService;
    }
    getMessagesHistory(projectId, clientId) {
        return this.inboxService.getMessagesHistory({ projectId, clientId });
    }
    getWidgetScript(res, projectId) {
        fs_1.readFile(path_1.resolve(__dirname, '..', '..', 'public', 'widget.js'), 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            const widgetScriptFile = data.replace(/project_id/g, projectId);
            res.send(widgetScriptFile);
        });
    }
    getMessagesHistoryByProjectId(projectId) {
        return this.inboxService.getMessagesHistoryByProjectId(projectId);
    }
    addMessage(messageDto) {
        return this.inboxService.addMessage(messageDto);
    }
    addChannel(channel, projectId) {
        return this.inboxService.addChannel(channel, parseInt(projectId));
    }
    updateAssignedUser(projectId, assignedDto) {
        return this.inboxService.updateAssignedUser(assignedDto, projectId);
    }
    update(projectId, clientId, clientData) {
        return this.inboxService.update(parseInt(projectId), clientId, clientData);
    }
    getUserInfo(projectId, clientId) {
        return this.inboxService.getClientInfo(parseInt(projectId), clientId);
    }
    getChannels(projectId) {
        return this.inboxService.getChannels(parseInt(projectId));
    }
};
__decorate([
    common_1.Get('/project/:projectId/chat/:clientId/getMessagesHistory'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('clientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "getMessagesHistory", null);
__decorate([
    common_1.Get('/api/:projectId/widget'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "getWidgetScript", null);
__decorate([
    common_1.Get('/project/:projectId/getMessagesHistoryByProject'),
    __param(0, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "getMessagesHistoryByProjectId", null);
__decorate([
    common_1.Post('/addMessage'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.MessageDto]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "addMessage", null);
__decorate([
    common_1.Post('/project/:projectId/addChannel'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [channel_dto_1.ChannelDto, Object]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "addChannel", null);
__decorate([
    common_1.Post('/project/:projectId/updateAssignedUser'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assigned_dto_1.AssignedDto]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "updateAssignedUser", null);
__decorate([
    common_1.Post('/project/:projectId/client/:clientId/update'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('clientId')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, client_data_dto_1.ClientDataDto]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "update", null);
__decorate([
    common_1.Get('project/:projectId/client/:clientId/getClientInfo'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('clientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "getUserInfo", null);
__decorate([
    common_1.Get('project/:projectId/getChannels'),
    __param(0, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "getChannels", null);
InboxController = __decorate([
    common_1.Controller('inbox'),
    __metadata("design:paramtypes", [inbox_service_1.InboxService])
], InboxController);
exports.InboxController = InboxController;
//# sourceMappingURL=inbox.controller.js.map